import VoiceChat from "../assets/voice_chat.png";
import VoiceDetection from "../assets/voice_detection.png";
import VoiceCloning from "../assets/voice_cloning.png";
import Hero1 from "../assets/hero-1.jpg";
import Hero2 from "../assets/hero-2.jpg";
import Hero3 from "../assets/hero-3.jpg";
import Hero4 from "../assets/hero-4.png";
import Hero5 from "../assets/hero-5.jpg";
import Hero6 from "../assets/hero-6.jpg";
import Hero7 from "../assets/hero-7.jpg";
import Hero8 from "../assets/hero-8.jpg";
import Hero9 from "../assets/hero-9.jpg";
import Influencers from '../assets/influencers.png';
import Businesses from '../assets/businesses.png';
import Educators from '../assets/educators.png';
import { Link } from "react-router-dom";

const Workings = () => {
  return (
    <section className="text-white sm:m-24 grid justify-items-center">
      <header className="font-semibold md:text-5xl text-3xl my-16 sm:ml-16">
        HOW IT WORKS
      </header>

      <div className="md:flex grid gap-48">
        <div>
          <div className="mx-6 my-10 sm:w-full border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[16px]">
            <img src={VoiceDetection} alt="" className="my-3" />
            <h1 className="text-2xl">Search & Find experts</h1>
          </div>
          <div className="mx-6 my-10 sm:w-full border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[16px]">
            <img src={VoiceCloning} alt="" className="my-3" />
            <h1 className="text-2xl">Chat with them directly</h1>
          </div>
          <div className="mx-6 my-10 sm:w-full border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[16px]">
            <img src={VoiceChat} alt="" className="my-3" />
            <h1 className="text-2xl">Get instant responses to your queries</h1>
          </div>
        </div>

        <div className="lg:flex grid gap-7 justify-items-center">
          <div className="grid gap-10">
            <div className="w-[200px] opacity-[25%] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero6}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Geekyranjit</h1>
                <h2 className="font-light text-sm">Tech expert</h2>
              </div>
            </div>

            <div className="w-[200px] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero2}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Pranjal Kamra</h1>
                <h2 className="font-light text-sm">Personal Finance Coach</h2>
              </div>
            </div>

            <div className="w-[200px] opacity-[35%] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero9}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Anushka Rathod</h1>
                <h2 className="font-light text-sm">Finance expert</h2>
              </div>
            </div>
          </div>

          <div className="grid gap-10 relative top-28">
            <div className="w-[200px] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero1}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Fittuber</h1>
                <h2 className="font-light text-sm">
                  Nutrition & Lifestyle coach
                </h2>
              </div>
            </div>

            <div className="w-[200px] opacity-[25%] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero5}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Rachana Ranade</h1>
                <h2 className="font-light text-sm">Finance expert</h2>
              </div>
            </div>

            <div className="opacity-[35%] w-[200px] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero4}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">We R Stupid</h1>
                <h2 className="font-light text-sm">
                  Fitness & Nutrition expert
                </h2>
              </div>
            </div>
          </div>

          <div className="grid gap-10">
            <div className="opacity-[35%] w-[200px] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero7}
                alt=""
                className="rounded-full object-cover object-[0px_1px] w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Saket Gokhale</h1>
                <h2 className="font-light text-sm">Fitness expert</h2>
              </div>
            </div>

            <div className="opacity-[25%] w-[200px] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero8}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Akshat Srivastava</h1>
                <h2 className="font-light text-[11px] text-center">
                  Investment & Economics Expert
                </h2>
              </div>
            </div>

            <div className="w-[200px] border-x-[1px] border-[rgba(255,255,255,0.12)] grid justify-center bg-gradient-to-b from-[#251f41] to-transparent bg-opacity-[6%] rounded-xl h-[300px]">
              <img
                src={Hero3}
                alt=""
                className="rounded-full object-cover w-24 h-24 my-10 relative left-5"
              />

              <div className="text-white relative bottom-16 w-full h-16 grid justify-items-center mt-10">
                <h1 className="text-md font-semibold">Ankur Warikoo</h1>
                <h2 className="font-light text-sm">Business & Life coach</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="grid justify-items-center my-14">
        <h1 className="text-4xl sm:text-6xl my-24 text-center">
          A TAILOR-MADE SOLUTION FOR
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative left-2">
          <div className="group">
            <Link
              to="/how-it-works#influencer"
              className="my-10 h-full grid justify-items-center border-[1px] group-hover:scale-110 transition-all duration-300 ease-in-out border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[50px]"
            >
              <img src={Influencers} alt="" className="my-3" />
              <h1 className="text-3xl my-1 group-hover:underline">
                Influencers
              </h1>
              <h2 className="text-md opacity-50 text-center">
                Foster deeper connections & loyalty by enhancing viewer
                engagement
              </h2>
            </Link>
          </div>

          <div className="group">
            <Link
              to="/how-it-works#business"
              className="my-10 grid h-full justify-items-center border-[1px] group-hover:scale-110 transition-all duration-300 ease-in-out border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[50px]"
            >
              <img src={Businesses} alt="" className="my-3" />
              <h1 className="text-3xl my-1 group-hover:underline">
                Businesses
              </h1>
              <h2 className="text-md opacity-50 text-center">
                Make your customers feel heard & valued by providing precise
                solutions to their precise problems
              </h2>
            </Link>
          </div>

          <div className="group">
            <Link
              to="/how-it-works#educator"
              className="my-10 grid h-full justify-items-center border-[1px] group-hover:scale-110 transition-all duration-300 ease-in-out border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[6%] rounded-xl px-[40px] py-[50px]"
            >
              <img src={Educators} alt="" className="my-3" />
              <h1 className="text-3xl my-1 group-hover:underline">Educators</h1>
              <h2 className="text-md opacity-50 text-center">
                Improve the overall learning experience by providing valuable
                insights to your students
              </h2>
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Workings;
