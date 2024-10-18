import ContactUs from "../../../components/ContactUs"
import Youtube from "../../../assets/youtube.png";
import Instagram from "../../../assets/instagram.png";
import LinkedIn from "../../../assets/linkedin.png";
import Twitter from '../../../assets/twitter.png';
import { Link } from "react-router-dom";

const Footer = () => {
  const brand = localStorage.getItem('brand');
  return (
    <footer className="bg-[url('assets/world.png')] bg-[50%_0%] text-white grid justify-items-center relative mt-[600px]">
      <ContactUs cssProps="bottom-96 z-10 grid justify-items-center" />

      <div className="shadow-[150px_850px_150px_250px_rgba(7,43,170,0.9),230px_350px_150px_300px_rgba(90,0,161,0.9),-100px_850px_150px_300px_rgba(157,7,170,0.9),-80px_350px_150px_300px_rgba(103,0,74,0.9)] lg:shadow-[650px_250px_150px_250px_rgba(7,43,170,0.9),230px_250px_150px_300px_rgba(90,0,161,0.9),-230px_250px_150px_300px_rgba(157,7,170,0.9),-650px_250px_150px_300px_rgba(103,0,74,0.9)]" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 mt-12 relative lg:left-0">
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
}

export default Footer
