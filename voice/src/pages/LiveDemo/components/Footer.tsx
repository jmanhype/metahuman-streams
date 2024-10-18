import Youtube from "../../../assets/youtube.png";
import Instagram from "../../../assets/instagram.png";
import LinkedIn from "../../../assets/linkedin.png";
import Twitter from "../../../assets/twitter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const brand = localStorage.getItem('brand');

  return (
    <footer className="bg-[url('assets/world.png')] bg-[50%_0%] mt-5 text-white grid justify-items-center relative">
      <div className="h-[300px]" />

      <div className="grid justify-items-center text-center relative bottom-48">
        <h1 className="text-3xl lg:text-7xl font-semibold w-[65%] mb-5">
          Unlock Personalized Conversations: AI Chatbots with a Human Touch
        </h1>
        <h2 className="text-xl text-white/50 w-[50%]">
          Unleash the power of AI within {brand ?? "One2One AI"}. Upgrade your
          productivity with {brand ?? "One2One AI"}, the open AI chat app.
        </h2>
      </div>
      <div className="shadow-[150px_850px_150px_250px_rgba(7,43,170,0.9),230px_350px_150px_300px_rgba(90,0,161,0.9),-100px_850px_150px_300px_rgba(157,7,170,0.9),-80px_350px_150px_300px_rgba(103,0,74,0.9)] lg:shadow-[650px_250px_150px_250px_rgba(7,43,170,0.9),230px_250px_150px_300px_rgba(90,0,161,0.9),-230px_250px_150px_300px_rgba(157,7,170,0.9),-650px_250px_150px_300px_rgba(103,0,74,0.9)]" />

      <div className="lg:flex grid gap-16 relative bottom-28">
        <a
          href="/signup"
          className="text-2xl border-[1px] rounded-full text-center border-white w-[120%] lg:w-auto font-thin px-[60px] sm:px-[180px] py-[14px]"
        >
          SIGN UP
        </a>
        <Link
          to="/live-demo#faq"
          className="text-2xl border-[1px] rounded-full text-center border-white w-[120%] lg:w-auto font-thin px-[60px] sm:px-[180px] py-[14px]"
        >
          FAQ
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 mt-48 relative lg:left-0">
        <div>
          <hr className="bg-white w-[250px] mb-5" />
          <div className="flex gap-3 items-center">
            <img src={Youtube} alt="" className="h-[50px] w-[50px]" />
            YOUTUBE
          </div>
        </div>

        <div>
          <hr className="bg-white w-[250px] mb-5" />
          <div className="flex gap-3 items-center">
            <img src={LinkedIn} alt="" className="h-[50px] w-[50px]" />
            LINKEDIN
          </div>
        </div>

        <div>
          <hr className="bg-white w-[250px] mb-5" />
          <div className="flex gap-3 items-center">
            <img src={Instagram} alt="" className="h-[50px] w-[50px]" />
            INSTAGRAM
          </div>
        </div>

        <div>
          <hr className="bg-white w-[250px] mb-5" />
          <div className="flex gap-3 items-center">
            <img src={Twitter} alt="" className="h-[50px] w-[50px]" />
            TWITTER
          </div>
        </div>
      </div>

      <div className="my-10 font-light grid justify-items-center text-center">
        <h2 className="text-lg">
          {brand?.toUpperCase() ?? "ONE2ONE AI"} &copy;{" "}
          {new Date().getFullYear()}, All right reserved
        </h2>
        <Link to="/terms-and-agreements" className="text-sm underline">
          Terms & Agreements
        </Link>
        <Link to="/privacy-policy" className="text-sm underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
