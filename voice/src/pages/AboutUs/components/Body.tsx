import BodyBg from "../../AboutUs/assets/about_body.png";
import VoiceDetection from "../assets/voice_detection.png";
import VoiceCloning from "../assets/voice_cloning.png";
import MultiLanguage from "../assets/multi_language.png";
import VoiceCharacteristics from "../assets/voice_characteristics.png";
import LineGradient from "../assets/gradient_line.png";
import Ajinkya from "../assets/ajinkya.jpg";

const Body = () => {
  const brand = localStorage.getItem("brand");

  return (
    <section className="lg:mt-96 mt-[500px] z-30 relative">
      <header className="grid justify-items-center gap-10">
        <h1 className="text-white/50 w-[40%] text-center">
          We all know the transformative potential of artificial intelligence in
          shaping the way we access information and communicate. Our AI-powered
          chatbot platform opens the door to a new era of personalized
          conversations
        </h1>
        <h2 className="text-justify mx-10 text-xl text-white">
          A ChatGPT - Of the People, For the People, By the People
        </h2>
      </header>
      <article className="lg:flex place-content-center mt-20">
        <div className="lg:flex grid place-content-center">
          <div className="mx-10">
            <img src={Ajinkya} alt="" className="w-[200px] mt-16" />

            <div className="text-white relative bottom-10 backdrop-blur-lg lg:w-full h-10 grid justify-items-center">
              <h1 className="text-xl font-semibold">Ajinkya Dev</h1>
            </div>
          </div>

          <img
            src={LineGradient}
            alt=""
            className=" lg:rotate-0 rotate-90 relative hidden lg:block top-[-50px] h-[520px]"
          />
        </div>

        <aside className="text-white text-center mx-10 lg:w-[40%] lg:ml-24 relative lg:top-36">
          {brand ?? "One2One AI"} was founded in September, 2023 by Ajinkya Dev.
          He is a computer engineer and an MBA-I.T graduate from Symbiosis,
          Pune. He worked as a Business analyst cum automation consultant for 5
          years prior to shooting his shot at entrepreneurship. This is his
          first venture.
        </aside>
      </article>

      <article className="grid place-content-center justify-items-center">
        <h1 className="text-white text-5xl my-10 text-center">OUR VALUES</h1>
        <h2 className="text-white/50 my-5 text-center">
          People believe in people over technology!
        </h2>
        <h3 className="text-white w-[60%] text-center">
          Humans place their trust in humans rather than relying solely on
          technology - That's the core value on which {brand ?? "One2One AI"}{" "}
          was built. In times where people are fearful of A.I replacing humans,{" "}
          {brand ?? "One2One AI"} has set a great example of how A.I can work
          with People and truly add value in their lives.
        </h3>
      </article>

      <article className="grid relative  justify-items-center left-[10%] mt-32 text-white w-[80%]">
        <h1 className="text-5xl lg:hidden">Features</h1>
        <div className="lg:flex grid gap-5 lg:gap-32">
          <div className="my-10 w-full border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl pl-[40px] pr-[0px] py-[16px]">
            <img src={VoiceDetection} alt="" className="my-3" />
            <h1 className="text-xl my-3">Custom persona & voice</h1>
            <h2 className="text-white/50">
              Clone your own voice or create a custom one to match your
              chatbot's persona, enhancing its authenticity and creating an
              immersive experience.
            </h2>
          </div>

          <div className="my-10 w-full border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl pl-[40px] lg:pr-[120px] py-[16px]">
            <img src={MultiLanguage} alt="" className="my-3" />
            <h1 className="text-xl my-3">NLP with multi-language support</h1>
            <h2 className="text-white/50 ">
              {brand ?? "One2One AI"}{" "} supports a total of 92 languages. Which
              means our chatbot will be able to consume & converse in your
              native language effortlessly.
            </h2>
          </div>
        </div>

        <img
          src={BodyBg}
          alt=""
          className="absolute left-[5%] w-[90%] top-[100px] h-[600px] lg:block hidden"
        />

        <div className="lg:flex grid lg:mt-32 lg:gap-32">
          <div className="my-10 border-[1px] w-full border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl pl-[40px] lg:pr-[0px] py-[16px]">
            <img src={VoiceCloning} alt="" className="my-3" />
            <h1 className="text-3xl my-3">Powered by ChatGPT-4</h1>
            <h2 className="text-white/50 ">
              Streaming responses based on your content - without making up
              facts. Responses have links to the content source as well.
            </h2>
          </div>

          <div className="my-10 border-[1px] w-full border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl pl-[40px] lg:pr-[120px] py-[16px]">
            <img src={VoiceCharacteristics} alt="" className="my-3" />
            <h1 className="text-3xl my-3">Multi-content support</h1>
            <h2 className="text-white/50 ">
              A chatbot that consumes any type of content like video, audio,
              podcast, pdf/word/excel documents, etc.
            </h2>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Body;
