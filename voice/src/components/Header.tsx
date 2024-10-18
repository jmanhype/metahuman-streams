import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RiUserSettingsLine } from "react-icons/ri";
import { ADMIN_URL, BASE_URL } from "../constants";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasToken = Boolean(localStorage.getItem("access_token"));
  const navigate = useNavigate();
  const logo = localStorage.getItem('logo');
  const isAdmin = localStorage.getItem("a") === "true" ? true : false;

  return (
    <header className="h-[97px] sm:w-[90%] flex items-center justify-between text-white font-thin relative top-[31px] sm:left-[7%] z-20">
      <Link to="/">
        <img
          src={logo && logo !== "" ? `${BASE_URL}/${logo}` : Logo}
          alt=""
          className="w-[100px]"
        />
      </Link>

      <nav className="w-[550px] h-[55px] text-[12px] bg-[#655C99] bg-opacity-[7%] lg:flex hidden items-center justify-center gap-[30px] border-[1px] border-[#E0D8FF] border-opacity-[33%] rounded-full px-[40px] py-[14px]">
        <Link to="/about-us">About Us</Link>
        <Link to="/live-demo">Live Demo</Link>
        <Link to="/contact-us">Contact</Link>
        <Link to="/how-it-works">How it works</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <div>
        <div className="grid justify-items-end">
          {hasToken ? (
            <div className="flex md:gap-[20px] gap-[10px] h-[47px] items-center">
              {isAdmin ? (
                <button
                  onClick={() => {
                    const access_token = localStorage.getItem("access_token");
                    window.location.replace(
                      `${ADMIN_URL}/login/?token=${access_token}&bypass=true`
                    );
                  }}
                >
                  <RiUserSettingsLine size={25} />
                  <span className="text-white rounded-xl absolute right-24 p-3 bg-gray-800 mt-4 hidden group-hover:block">
                    Profile Settings
                  </span>
                </button>
              ) : (
                <Link to="/profile" className="group">
                  <RiUserSettingsLine size={25} />
                  <span className="text-white rounded-xl absolute right-24 p-3 bg-gray-800 mt-4 hidden group-hover:block">
                    Profile Settings
                  </span>
                </Link>
              )}

              <button
                className="border-[1px] border-[#E0D8FF] border-opacity-[33%] bg-[rgba(174,77,198,0.5)] rounded-full px-[15px] py-[10px]"
                onClick={() => {
                  localStorage.removeItem("access_token");
                  localStorage.removeItem("isVerified");
                  localStorage.removeItem("logo");
                  localStorage.removeItem("menu");
                  localStorage.removeItem("brand");
                  localStorage.removeItem("a");

                  setTimeout(() => {
                    navigate("/");
                  }, 500);
                }}
              >
                <span className="shadow-[0_1px_20px_10px_rgb(15,10,66,0.8)] bg-[rgb(15,10,66,0.65)] px-6 rounded-full">
                  Logout
                </span>
              </button>
            </div>
          ) : (
            <div className="flex md:gap-[20px] gap-[10px] h-[47px] items-center">
              <Link to="/signup">Sign up</Link>
              <Link
                to="/login"
                className="border-[1px] border-[#E0D8FF] border-opacity-[33%] bg-[rgba(174,77,198,0.5)] rounded-full px-[15px] py-[10px]"
              >
                <span className="shadow-[0_1px_20px_10px_rgb(15,10,66,0.8)] bg-[rgb(15,10,66,0.65)] px-6 rounded-full">
                  Login
                </span>
              </Link>
            </div>
          )}

          <button
            className="mt-8 mr-8 block lg:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <HiMenu size={35} />
          </button>

          <nav
            className={`w-[200px] bg-[#261e50] absolute ${
              isExpanded ? "md:hidden grid" : "hidden"
            } justify-center gap-[30px] top-28 border-[1px] border-[#E0D8FF] border-opacity-[33%] rounded-lg px-[40px] py-[14px]`}
          >
            <Link to="/about-us">About Us</Link>
            <Link to="/live-demo">Live Demo</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/how-it-works">How it works</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
