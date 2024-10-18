import { useEffect, useRef, useState } from "react";
import ChatbotPlaceholder from "../../assets/chatbot_icon.png";
import { ThreeDots } from "react-loader-spinner";
import { FaPause, FaPlay } from "react-icons/fa6";

const Avatar = ({
  avatar,
  audioBase64,
  isSending,
}: {
  avatar: string | undefined;
  audioBase64: string | undefined;
  isSending: boolean;
}) => {
  const [audio, setAudio] = useState<string>(
    "data:audio/mpeg;base64," + audioBase64
  );
  const [intensity, setIntensity] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>();
  const playBtnRef = useRef<any>();
  const analyzer = useRef<any>();
  const canvasRef = useRef<any>();
  const source = useRef<any>();

  const audioAnalyzer = () => {
    const audioContext = new AudioContext();

    if (!source.current) {
      source.current = audioContext.createMediaElementSource(audioRef.current);
      analyzer.current = audioContext.createAnalyser();
      source.current.connect(analyzer.current);
      analyzer.current.connect(audioContext.destination);
      source.current.onended = () => {
        source.current.disconnect();
        setIntensity(0);
      };
    }
    visualizeData();
  };

  const visualizeData = () => {
    const animationController = window.requestAnimationFrame(visualizeData);
    if (audioRef.current.paused) {
      return cancelAnimationFrame(animationController);
    }
    const audioData = new Uint8Array(analyzer.current.frequencyBinCount);
    analyzer.current.getByteFrequencyData(audioData);

    setIntensity(Math.floor(calculateIntensity(audioData)));
  };

  const calculateIntensity = (data: Uint8Array) => {
    let sum = 0;

    for (let i = 0; i < data.length; i++) sum += data[i];

    return sum / data.length;
  };

  useEffect(() => {
    window.addEventListener("resize", () =>
      setScreenWidth(window.screen.width)
    );
  }, []);

  useEffect(() => {
    setAudio("data:audio/mpeg;base64," + audioBase64);
  }, [audioBase64]);

  useEffect(() => {
    if (getUserAgent() !== "iOS") {
      audioRef.current.load();
      audioRef.current.play();
    }
    else{
      if (playBtnRef.current) playBtnRef.current.click();
    }
      

  }, [audio]);

  const getUserAgent = () => {
    var userAgent = navigator.userAgent;

    if (/opera | mozilla | chrome/i.test(userAgent)) {
      return "Desktop Browser";
    }

    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
      return "Android";
    }

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return "iOS";
    }

    return '';
  };
  return (
    <div className="relative w-full grid justify-items-center">
      <canvas
        ref={canvasRef}
        width={(screenWidth > 640 ? 180 : 96) + intensity}
        height={(screenWidth > 640 ? 180 : 96) + intensity}
        className="bg-[#8756DF]/50 rounded-full transition-all duration-1000 ease-in-out absolute"
      />

      <div className="relative z-10">
        {audio.length > 25 && !isSending ? (
          <button
            ref={playBtnRef}
            onClick={() => {
              if (
                audioRef.current.currentSrc !== audio &&
                getUserAgent() === "iOS"
              )
                audioRef.current.load();

              if (audioRef.current.paused || audioRef.current.ended)
                audioRef.current.play();
              else audioRef.current.pause();
            }}
            className="rounded-full h-28 w-28 sm:h-48 sm:w-48 flex justify-center place-items-center  absolute z-20 bg-black/20"
          >
            {!isPlaying ? (
              <FaPlay color="#8756DF" size={35} />
            ) : (
              <FaPause color="#8756DF" size={35} />
            )}
          </button>
        ) : (
          <></>
        )}

        <img
          src={avatar ?? ChatbotPlaceholder}
          alt=""
          className="rounded-full h-28 w-28 sm:h-48 sm:w-48 "
        />
      </div>

      <audio
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
        ref={audioRef}
        onPlaying={audioAnalyzer}
        className="w-[90%] sm:w-1/2 md:w-1/3"
      >
        <source src={audio} type="audio/mpeg" />
      </audio>

      {isSending ? (
        <div className="flex gap-5 items-center h-1">
          <h1 className="text-white/50 text-xl">Let me think</h1>
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#8756DF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Avatar;
