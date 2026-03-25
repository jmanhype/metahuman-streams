# metahuman-streams

Real-time streaming digital human with synchronized audio-video dialogue. Fork/derivative of lipku/metahuman-stream with added LLM chat integration and API key management.

Most documentation below is translated from the original Chinese. The codebase mixes Chinese and English comments.

## Status

Research/experimental. Requires CUDA-capable GPU (tested on CUDA 11.3). Model weights must be downloaded separately from external links (Baidu Pan, Caiyun). Some download links may be dead.

## What It Does

Renders a talking-head avatar in real time, driven by text or audio input. Supports 3 face animation models and 3 streaming transport modes.

### Supported Models

| Model | Lip Sync Method | RTMP Support | Notes |
|---|---|---|---|
| ER-NeRF | Neural radiance field | Yes | Requires per-avatar training; highest quality |
| MuseTalk | Diffusion-based | No (WebRTC only) | Pre-trained avatars available; needs mmcv/mmdet/mmpose |
| Wav2Lip | GAN-based | No (WebRTC only) | Simplest setup; lower quality |

### Transport Modes

| Mode | Requires SRS | Port Requirements |
|---|---|---|
| WebRTC P2P | No | TCP 8010, UDP 50000-60000 |
| WebRTC push to SRS | Yes | TCP 8000/8010/1985, UDP 8000 |
| RTMP push to SRS | Yes | TCP 1935/1985/8080 |

## Tech Stack

| Component | Technology |
|---|---|
| Language | Python 3.10 |
| ML Framework | PyTorch 1.12.1, CUDA 11.3 |
| Face Animation | ER-NeRF, MuseTalk, Wav2Lip |
| Streaming | WebRTC (aiortc), RTMP, SRS media server |
| Web UI | Flask + WebSocket |
| TTS | edge_tts, GPT-SoVITS (voice cloning) |
| LLM | OpenAI API, Google Generative AI |

## Project Layout

```
app.py              # Entry point (Flask + WebRTC signaling)
basereal.py         # Base class for avatar renderers
baseasr.py          # Base ASR (automatic speech recognition)
ernerf/             # ER-NeRF model, training scripts, CUDA kernels
  nerf_triplane/    # Network, renderer, ASR integration
  data_utils/       # Face parsing, tracking, DeepSpeech features
musetalk/           # MuseTalk integration
wav2lip/            # Wav2Lip integration
llm/                # LLM chat integration
data/               # Config files, reference audio
GPT-SoVITS/         # Voice cloning module
```

## Setup

Tested on Ubuntu 20.04, Python 3.10, PyTorch 1.12, CUDA 11.3.

```bash
conda create -n nerfstream python=3.10
conda activate nerfstream
conda install pytorch==1.12.1 torchvision==0.13.1 cudatoolkit=11.3 -c pytorch
pip install -r requirements.txt

# Only needed for ER-NeRF:
pip install "git+https://github.com/facebookresearch/pytorch3d.git"
pip install tensorflow-gpu==2.8.0
pip install --upgrade "protobuf<=3.20.1"
```

Copy `.env.example` to `.env` and set `OPENAI_API_KEY` if using LLM chat.

### Quick Run (ER-NeRF + WebRTC via SRS)

Terminal 1 -- start SRS media server:

```bash
export CANDIDATE='<your-server-ip>'
docker run --rm --env CANDIDATE=$CANDIDATE \
  -p 1935:1935 -p 8080:8080 -p 1985:1985 -p 8000:8000/udp \
  registry.cn-hangzhou.aliyuncs.com/ossrs/srs:5 \
  objs/srs -c conf/rtc.conf
```

Terminal 2 -- start avatar server:

```bash
python app.py
```

Open `http://<server-ip>:8010/rtcpushapi.html` in a browser. Enter text to make the avatar speak.

## Model-Specific Notes

**ER-NeRF**: Requires per-avatar training. See `ernerf/scripts/train_obama.sh`. Supports custom backgrounds (`--bg_img`) and full-body compositing (`--fullbody`). Audio features default to wav2vec; use `--asr_model facebook/hubert-large-ls960-ft` for Hubert.

**MuseTalk**: Download models from external links. Additional deps: `mmengine`, `mmcv>=2.0.1`, `mmdet>=3.1.0`, `mmpose>=1.1.0`. Run with `--model musetalk --transport webrtc`. Supports `--batch_size` for GPU utilization.

**Wav2Lip**: Download `s3fd.pth` to `wav2lip/face_detection/detection/sfd/` and `wav2lip.pth` to `models/`. Run with `--transport webrtc --model wav2lip --avatar_id wav2lip_avatar1`.

## Limitations

- CUDA 11.3 + PyTorch 1.12 is a dated stack. Newer GPUs (Ada Lovelace, Hopper) may have compatibility issues.
- Model download links point to Chinese cloud storage (Baidu Pan, Caiyun) which may require accounts or be region-restricted.
- ER-NeRF training requires significant GPU hours per avatar.
- No authentication on the Flask server.
- GPT-SoVITS voice cloning setup is not fully documented here.
- Mixed Chinese/English documentation throughout.

## License

See `LICENSE`.
