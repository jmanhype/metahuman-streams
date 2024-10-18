import { AiOutlineArrowRight } from "react-icons/ai";
import Robot from '../assets/robot.png';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="lg:flex grid justify-items-center lg:justify-around mt-28 bg-[url('assets/morphline.png')] bg-[50%_0%]">
      <article className="text-white w-1/2 lg:mx-16 z-10">
        <h1 className="text-5xl sm:text-7xl text-center sm:text-start sm:m-5 font-semibold">
          AI Chatbots at Your Service
        </h1>

        <Link
          to="/dashboard"
          className="w-[180px] flex items-center gap-5 sm:mx-6 my-10 border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-xl px-[40px] py-[16px]"
        >
          Explore
          <AiOutlineArrowRight />
        </Link>
      </article>

      <aside className="lg:w-1/3 relative">
        <div className="absolute shadow-[70px_100px_300px_150px_rgba(174,77,198,0.35),70px_250px_300px_150px_rgba(174,77,198,0.35),300px_150px_300px_250px_rgba(34,17,128,0.35)]" />

        <img
          src={Robot}
          alt=""
          className="lg:absolute relative z-10 lg:right-28 top-16 lg:top-0"
        />
      </aside>
    </section>
  );
};

export default Hero;
