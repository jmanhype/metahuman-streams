import Keyboard from '../assets/keyboard.png';
import Futuristic from '../assets/futuristic.png';
import GPT from '../assets/gpt.png';

const Features = () => {
  return (
    <section className="grid justify-items-center text-white">
      <header className="mt-56 grid justify-items-center">
        <h1 className="font-semibold text-3xl lg:text-5xl my-5">
          F E A T U R E S
        </h1>
        <h2 className="lg:text-xl text-md opacity-50 text-center">
          Designed to the last pixel and engineered with unforgiving precision
        </h2>
      </header>

      <article className="grid gap-10 w-[70%] sm:w-full">
        <div className="lg:flex grid items-center mt-10 sm:ml-5 gap-5">
          <div className="bg-gradient-to-br from-[#8D297B]/70 to-[#6C2FA9]/40 rounded-xl w-full lg:w-[63%] p-[1px]">
            <div className="grid justify-items-center gap-7 bg-[#000017] rounded-xl p-10 ">
              <img src={Keyboard} alt="" />
              <div className="flex flex-wrap gap-5">
                <div className="border-[1px] border-[#E0D8FF] border-opacity-[33%] bg-[rgba(174,77,198,0.5)] rounded-full px-[15px] py-[10px]">
                  <span className="shadow-[0_1px_20px_10px_rgb(15,10,66,0.8)] bg-[rgb(15,10,66,0.65)] px-6 rounded-full">
                    English
                  </span>
                </div>
                <div className="border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-full px-[15px] py-[10px]">
                  <span className="shadow-[0_1px_20px_10px_rgb(15,10,66,0.8)] bg-[rgb(15,10,66,0.65)] px-6 rounded-full">
                    ગુજરાતી
                  </span>
                </div>
                <div className="border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-full px-[15px] py-[10px]">
                  <span className="shadow-[0_1px_20px_10px_rgb(15,10,66,0.8)] bg-[rgb(15,10,66,0.65)] px-6 rounded-full">
                    हिंदी
                  </span>
                </div>
                <div className="border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-full px-[15px] py-[10px]">
                  <span className="shadow-[0_1px_20px_10px_rgb(15,10,66,0.8)] bg-[rgb(15,10,66,0.65)] px-6 rounded-full">
                    తెలుగు
                  </span>
                </div>
              </div>

              <div className="grid justify-items-center gap-3">
                <h1 className="text-2xl text-center">NLP with multi-language support</h1>
                <h2 className="text-sm w-[70%] text-center text-white/50">
                  Chatbots that understand context, nuances, and user intent for
                  more meaningful interactions.
                </h2>
              </div>
            </div>
          </div>

          <div className="grid justify-items-center gap-3 border-[1px] lg:w-1/3 border-[#6948EA]/50 h-full w-full rounded-xl">
            <img src={Futuristic} alt="" />
            <h1 className="text-2xl text-center">Custom persona & voice</h1>
            <h2 className="text-sm w-[80%] text-center text-white/50 relative lg:bottom-8">
              Create chatbots with distinct personalities, from friendly and
              casual to professional.
            </h2>
          </div>
        </div>

        <div className="lg:flex grid items-center gap-10 sm:ml-5">
          <div className="grid justify-items-center gap-3 border-[#3D23AD] border-[1px] rounded-xl p-10 h-full lg:w-1/3 w-full">
            <div className="shadow-[30px_120px_120px_100px_rgba(108,47,169,1),30px_120px_150px_150px_rgba(54,33,172,1)]" />
            <img src={GPT} alt="" />
            <h1 className="text-2xl text-center">Powered by ChatGPT-4</h1>
            <h2 className="text-sm w-[70%] text-center text-white/50">
              Get cutting-edge AI capabilities with our ChatGPT-powered custom
              chatbot.
            </h2>
          </div>

          <div className="grid justify-items-center gap-3 bg-[url('pages/LandingPage/assets/photo_grid.png')] lg:w-[62%] w-full border-[1px] border-[#AEA0FF]/50 rounded-xl py-10 bg-fill bg-no-repeat h-full">
            <div className="h-64" />
            <div className="shadow-[50px_-100px_200px_150px_rgba(54,33,172,0.7)] lg:shadow-[250px_-100px_200px_150px_rgba(54,33,172,0.7)]" />

            <div className="relative  grid justify-items-center">
              <h1 className="text-2xl mb-3 text-center">Multi-content Support</h1>
              <h2 className="text-sm w-[70%] text-center text-white/50">
                Chatbots that understand context, nuances, and user intent for
                more meaningful interactions.
              </h2>
            </div>
          </div>
        </div>
      </article>

      <footer className="font-semibold text-4xl sm:text-7xl mt-48 sm:ml-10 text-center">
        BE A PART OF THE A.I REVOLUTION
      </footer>
    </section>
  );
};

export default Features;
