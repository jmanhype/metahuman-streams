import { Link } from "react-router-dom";
import Hero1 from "../assets/hero-1.png";
import Hero2 from "../assets/hero-2.png";
import Hero3 from "../assets/hero-3.png";
import Star from "../assets/star.svg";

const Hero = () => {
  return (
    <main className="lg:flex grid justify-items-center items-start lg:justify-around mt-28 h-[900px] lg:h-[500px] bg-[url('assets/morphline.png')] bg-[50%_0%] w-full">
      <section className="text-white lg:w-1/2 sm:mx-16 z-0 grid justify-items-center sm:justify-items-start">
        <h2 className="flex items-center gap-3 w-[235px] sm:w-[350px] border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-full px-[40px] py-[2px]">
          <img src={Star} alt="" />
          Our A.I chatbots just landed
        </h2>

        <h1 className="text-5xl sm:text-7xl m-5 text-center sm:text-start">
          INTERACT WITH YOUR FAVOURITE PEOPLE
        </h1>

        <h3 className="text-[#EFEDFD] text-opacity-70 mx-6 text-center sm:text-start">
          Unlock Personalized Conversations through A.I
        </h3>

        <Link
          to="/signup"
          className="w-[150px] flex items-center gap-5 mx-6 my-10 border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[48%] rounded-xl px-[30px] py-[16px]"
        >
          Get Started
        </Link>
      </section>

      <aside className="lg:w-1/3 sm:w-[80%] w-full relative top-[-150px] lg:top-0">
        <div className="absolute shadow-[70px_100px_300px_150px_rgba(174,77,198,0.5),70px_250px_300px_150px_rgba(174,77,198,0.5),300px_150px_300px_250px_rgba(34,17,128,0.67)]" />

        <div className="absolute z-30 sm:w-[280px] sm:right-[150px] right-[31%] w-[150px]">
          <img src={Hero1} alt="" className="sm:h-[400px] h-[200px]" />

          <div className="text-white relative bottom-16 backdrop-blur-lg w-full h-16 grid justify-items-center">
            <h1 className=" lg:text-2xl text-md font-semibold">
              Ranveer Allahbadia
            </h1>
            <h2 className="font-light lg:text-lg text-sm">
              Motivational Speaker
            </h2>
          </div>
        </div>

        <div className="absolute z-0 rotate-[10deg] top-10 sm:right-[30px] w-[120px] right-[12%] sm:w-[160px] h-[80%] opacity-70">
          <img src={Hero3} alt="" className="sm:h-[320px] h-[180px]" />
          <div className="text-white relative bottom-16 backdrop-blur-lg w-full h-16 grid justify-items-center">
            <h1 className="lg:text-2xl font-semibold">Prajikta Koli</h1>
            <h2 className="font-light lg:text-lg">Comedian</h2>
          </div>
        </div>

        <div className="absolute z-20 rotate-[-5deg] top-9 sm:right-[320px] right-[45%] w-[130px] sm:w-[230px] opacity-70">
          <img src={Hero2} alt="" className="sm:h-[350px] h-[180px]" />
          <div className="text-white relative bottom-16 backdrop-blur-lg w-full h-16 grid justify-items-center">
            <h1 className="lg:text-2xl font-semibold">Bhuvan Bam</h1>
            <h2 className="font-light lg:text-lg">Comedian</h2>
          </div>
        </div>
      </aside>
    </main>
  );
};

export default Hero;
