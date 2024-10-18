import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Formik } from "formik";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Oval } from "react-loader-spinner";
import Google from "../assets/google.png";
//import Facebook from "../assets/facebook.png";
import { getGoogleUrl } from "../../../utils/getGoogleUrl";

const Form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const notifyUser = (message: string) => toast(message);
  const notifyError = (message: string) => toast.error(message);
  const forgotPassword = async (email: string) => {
    const response = await axios.post(
      `${BASE_URL}/auth/forgot-password`,
      { email, type: "user" },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (response.data.statusCode === 200) notifyUser(response.data.message);
    else notifyError(response.data.message);
  };
  const  [searchParams, _setSearchParams] = useSearchParams();

  const bypassAuth = async (token: string) => {
    const response = await axios.get(`${BASE_URL}/auth/bypass?token=${token}&type=a2u`);

    if (response.data.statusCode === 200) {
      localStorage.setItem("access_token", response.data["token"]);
      navigate("/dashboard");
    } else notifyError(response.data.message);
  };

  useEffect(()=>{
    const token = searchParams.get('token');
    const statusCode = searchParams.get('status');
    const isVerified = searchParams.get('isVerified');
    const bypass = searchParams.get("bypass");

    if(statusCode && statusCode !== '200')
      notifyError("User does not exist");
    
    if (token && bypass) bypassAuth(token);

    if(token && statusCode && isVerified){
      if(statusCode === '200'){
        localStorage.setItem("isVerified", isVerified);
        localStorage.setItem("access_token", token.substring(0, token.length - 1));
        navigate("/loading");
      }
    } 
  },[])

  return (
    <section className="bg-[url('assets/morphline.png')] bg-[50%_0%] grid justify-items-center mt-24">
      <h1 className="text-6xl text-white font-bold mb-12">Login</h1>
      <div className="shadow-[450px_150px_280px_170px_rgba(7,43,170,0.7),230px_150px_280px_150px_rgba(90,0,161,0.7)]" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await axios.post(
            `${BASE_URL}/auth/login`,
            { email: values.email, password: values.password },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );

          setIsSending(false);
          if (response.data["statusCode"] === 401) {
            notifyError(response.data["message"]);
            return;
          }

          localStorage.setItem('a', response.data['isAdmin']);
          localStorage.setItem("isVerified", response.data["isVerified"]);
          localStorage.setItem("access_token", response.data["token"]);
          navigate("/loading");
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="grid justify-items-center text-white rounded-xl bg-gradient-to-r from-[#0C0735]/70 to-[#0C0735] shadow-lg relative w-[90%] lg:w-[80%] px-16 py-8 mt-24"
          >
            <div className="w-full lg:w-[80%]">
              <div className="lg:flex grid w-full mb-5 gap-7">
                <a
                  href={getGoogleUrl("/login")}
                  className="border-[1px] w-full flex gap-10 items-center justify-center border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-xl px-[40px] py-[16px]"
                >
                  <img src={Google} alt="" className="w-10 h-10" />
                  Google
                </a>
                {/* <button
                  type="button"
                  className="border-[1px] lg:w-1/2 flex items-center justify-around border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-xl px-[40px] py-[16px]"
                >
                  <img src={Facebook} alt="" className="w-10 h-10" />
                  Facebook
                </button> */}
              </div>
              <div className="relative">
                <hr className="bg-white/20 w-full h-[1px]" />
                <h1 className="bg-[#0C0735] absolute top-[-12px] text-white/50 px-2 left-[48%]">
                  OR
                </h1>
              </div>
            </div>
            <div className="lg:flex grid w-full lg:w-[80%] gap-10 mt-10">
              <div className="w-full">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="py-[25px] px-[40px] w-full rounded-lg border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-[#0C0735]"
                />
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.email && touched.email && errors.email}
                </h4>
              </div>

              <div className="w-full">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type={isVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="py-[25px] px-[40px] rounded-lg w-full  border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-[#0C0735]"
                />
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.password && touched.password && errors.password}
                </h4>
              </div>
            </div>

            <label
              htmlFor="forgot"
              className="flex items-center justify-end w-full lg:w-[80%] gap-5"
            >
              <button type="button" onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? (
                  <AiOutlineEye size={25} className="mt-6 text-white/50" />
                ) : (
                  <AiOutlineEyeInvisible
                    size={25}
                    className="mt-6 text-white/50"
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  const email = prompt("Enter your account's email to proceed");
                  if(email !== null){
                    if (
                      email !== "" &&
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        email ?? ""
                      )
                    ) {
                      forgotPassword(email ?? "");
                    } else notifyError("Invalid email address");
                  }
                  
                }}
                className="underline text-white/50 mt-5"
              >
                Forgot Password
              </button>
            </label>

            <button
              onClick={() => {
                setIsSending(true);
              }}
              type="submit"
              disabled={isSubmitting}
              className="lg:mx-6 my-10 border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[48%] rounded-xl px-[40px] py-[16px]"
            >
              {isSending ? (
                <Oval
                  height={20}
                  width={20}
                  color="#8756DF"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#A37EE7"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Form;
