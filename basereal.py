"""Base class for real-time digital human rendering.

This module provides the foundation for various digital human models
(ER-NeRF, MuseTalk, Wav2Lip) used in the streaming system.
"""

import math
import torch
import numpy as np
from typing import Optional, List, Dict, Any
import os
import time
import cv2
import glob
import pickle
import copy

import queue
from queue import Queue
from threading import Thread, Event
from io import BytesIO
import soundfile as sf

from ttsreal import EdgeTTS, VoitsTTS, XTTS

from tqdm import tqdm


def read_imgs(img_list: List[str]) -> List[np.ndarray]:
    """Read a list of images from disk.

    Args:
        img_list: List of image file paths

    Returns:
        List of images as numpy arrays
    """
    frames = []
    print('reading images...')
    for img_path in tqdm(img_list):
        frame = cv2.imread(img_path)
        if frame is None:
            print(f"Warning: Failed to read image: {img_path}")
            continue
        frames.append(frame)
    return frames


class BaseReal:
    """Base class for real-time digital human rendering.

    This class manages TTS (Text-to-Speech), custom video/audio streams,
    and provides the foundation for various digital human implementations.

    Attributes:
        opt: Configuration options
        sample_rate: Audio sample rate (16000 Hz)
        chunk: Samples per chunk based on FPS
        tts: Text-to-speech engine instance
        curr_state: Current playback state (0=inference, 1=silence, >1=custom)
        custom_img_cycle: Dictionary of custom image sequences
        custom_audio_cycle: Dictionary of custom audio streams
        custom_audio_index: Current index in custom audio
        custom_index: Current index in custom images
        custom_opt: Custom configuration options
    """

    def __init__(self, opt: Any) -> None:
        """Initialize the BaseReal instance.

        Args:
            opt: Configuration object with TTS type and other settings

        Raises:
            ValueError: If TTS type is not recognized
        """
        self.opt = opt
        self.sample_rate: int = 16000
        self.chunk: int = self.sample_rate // opt.fps  # 320 samples per chunk (20ms * 16000 / 1000)

        # Initialize TTS based on configuration
        if opt.tts == "edgetts":
            self.tts = EdgeTTS(opt, self)
        elif opt.tts == "gpt-sovits":
            self.tts = VoitsTTS(opt, self)
        elif opt.tts == "xtts":
            self.tts = XTTS(opt, self)
        else:
            raise ValueError(f"Unknown TTS type: {opt.tts}. Supported types: edgetts, gpt-sovits, xtts")

        self.curr_state: int = 0
        self.custom_img_cycle: Dict[int, List[np.ndarray]] = {}
        self.custom_audio_cycle: Dict[int, np.ndarray] = {}
        self.custom_audio_index: Dict[int, int] = {}
        self.custom_index: Dict[int, int] = {}
        self.custom_opt: Dict[int, Dict[str, Any]] = {}
        self.__loadcustom()
    
    def __loadcustom(self) -> None:
        """Load custom video and audio configurations.

        Reads custom image sequences and audio files based on configuration.
        """
        for item in self.opt.customopt:
            print(f"Loading custom content: {item}")
            try:
                # Find and sort image files
                input_img_list = glob.glob(os.path.join(item['imgpath'], '*.[jpJP][pnPN]*[gG]'))
                input_img_list = sorted(input_img_list, key=lambda x: int(os.path.splitext(os.path.basename(x))[0]))

                # Load images and audio
                self.custom_img_cycle[item['audiotype']] = read_imgs(input_img_list)
                self.custom_audio_cycle[item['audiotype']], sample_rate = sf.read(item['audiopath'], dtype='float32')

                # Initialize indices
                self.custom_audio_index[item['audiotype']] = 0
                self.custom_index[item['audiotype']] = 0
                self.custom_opt[item['audiotype']] = item

                print(f"Loaded {len(input_img_list)} images and audio for type {item['audiotype']}")
            except Exception as e:
                print(f"Error loading custom content for type {item['audiotype']}: {e}")

    def init_customindex(self) -> None:
        """Reset all custom content indices to initial state."""
        self.curr_state = 0
        for key in self.custom_audio_index:
            self.custom_audio_index[key] = 0
        for key in self.custom_index:
            self.custom_index[key] = 0

    def mirror_index(self, size: int, index: int) -> int:
        """Calculate mirrored index for ping-pong playback.

        Args:
            size: Total size of the sequence
            index: Current index

        Returns:
            Mirrored index for smooth looping
        """
        turn = index // size
        res = index % size
        if turn % 2 == 0:
            return res
        else:
            return size - res - 1

    def get_audio_stream(self, audiotype: int) -> np.ndarray:
        """Get a chunk of audio from custom audio stream.

        Args:
            audiotype: Type identifier for the audio stream

        Returns:
            Audio chunk as numpy array
        """
        idx = self.custom_audio_index[audiotype]
        stream = self.custom_audio_cycle[audiotype][idx:idx + self.chunk]
        self.custom_audio_index[audiotype] += self.chunk

        # Switch to silence when custom audio ends (no loop)
        if self.custom_audio_index[audiotype] >= self.custom_audio_cycle[audiotype].shape[0]:
            self.curr_state = 1

        return stream

    def set_curr_state(self, audiotype: int, reinit: bool) -> None:
        """Set the current playback state.

        Args:
            audiotype: Type of audio to play (0=inference, 1=silence, >1=custom)
            reinit: Whether to reinitialize indices to start from beginning
        """
        print(f'set_curr_state: {audiotype}')
        self.curr_state = audiotype
        if reinit:
            self.custom_audio_index[audiotype] = 0
            self.custom_index[audiotype] = 0
    
    # def process_custom(self,audiotype:int,idx:int):
    #     if self.curr_state!=audiotype: #从推理切到口播
    #         if idx in self.switch_pos:  #在卡点位置可以切换
    #             self.curr_state=audiotype
    #             self.custom_index=0
    #     else:
    #         self.custom_index+=1