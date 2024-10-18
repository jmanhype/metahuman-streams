import { BASE_URL } from "../../../constants";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Formik } from "formik";
import validateSignupForm from "../../../validators/validateSignupForm";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import Google from '../assets/google.png';
//import Facebook from '../assets/facebook.png'
import { getGoogleUrl } from "../../../utils/getGoogleUrl";
import { SignupFormData } from "../../../types";

const Form = () => {
  const navigate = useNavigate();
  const notifyError = (error: string) => toast.error(error);
  const notifyMessage = (message: string) => toast(message);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [searchParams, _setSearchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const statusCode = searchParams.get("status");
    const message = searchParams.get("message");

    if (statusCode && message && statusCode !== "201") notifyError(message);

    if (token && statusCode && message) {
      if (statusCode === "201") {
        localStorage.setItem("isVerified", 'false');
        localStorage.setItem("access_token", token);
        notifyMessage(message);
        setTimeout(()=>{
          navigate("/dashboard");
        }, 4000);
      }
    }
  }, []);

  return (
    <section className="bg-[url('assets/morphline.png')] bg-[50%-0%] grid justify-items-center mt-24">
      <h1 className="text-6xl text-white font-bold mb-12">Sign up</h1>
      <div className="shadow-[450px_150px_280px_170px_rgba(7,43,170,0.7),230px_150px_280px_150px_rgba(90,0,161,0.7)]" />
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors: SignupFormData = validateSignupForm(values);
          if (
            errors.firstName ||
            errors.lastName ||
            errors.confirmPassword ||
            errors.email ||
            errors.password
          )
            setIsSending(false);

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await axios.post(
            `${BASE_URL}/auth/signup`,
            {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
          if (response.data["statusCode"] === 406) {
            notifyError(response.data["message"]);
            setIsSending(false);
            setSubmitting(false);
            return;
          }

          setIsSending(false);
          notifyMessage(response.data["message"]);
          localStorage.setItem("access_token", response.data["token"]);
          setTimeout(() => {
            setSubmitting(false);

            navigate("/dashboard");
          }, 4000);
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
            className="grid justify-items-center text-white rounded-xl bg-gradient-to-r from-[#0C0735]/70 to-[#0C0735] w-full lg:w-[80%] px-16 py-8 mt-24"
          >
            <div className="w-full lg:w-[80%]">
              <div className="lg:flex grid w-full mb-5 gap-7">
                <a
                  href={getGoogleUrl("/signup")}
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

            <div className="lg:flex grid gap-10 w-full lg:w-[80%] mt-10">
              <div className="w-full">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="py-[25px] px-[40px] rounded-lg w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent"
                />
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.firstName && touched.firstName && errors.firstName}
                </h4>
              </div>

              <div className="w-full">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="py-[25px] px-[40px] rounded-lg w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent"
                />
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.lastName && touched.lastName && errors.lastName}
                </h4>
              </div>
            </div>

            <div className="w-full lg:w-[80%] mt-10">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="text"
                name="email"
                placeholder="Email"
                className="py-[25px] px-[40px] rounded-lg w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent"
              />
              <h4 className="text-red-600 text-[12px] mb-3">
                {errors.email && touched.email && errors.email}
              </h4>
            </div>

            <div className="lg:flex grid gap-10 w-full lg:w-[80%] mt-10">
              <div className="w-full relative">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="py-[25px] px-[40px] rounded-lg w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                  className="absolute top-0 right-5"
                >
                  {isPasswordVisible ? (
                    <AiOutlineEye size={25} className="mt-6 text-white/50" />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={25}
                      className="mt-6 text-white/50"
                    />
                  )}
                </button>
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.password && touched.password && errors.password}
                </h4>
              </div>

              <div className="w-full relative">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="py-[25px] px-[40px] rounded-lg w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent"
                />
                <button
                  type="button"
                  onClick={() =>
                    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                  }
                  className="absolute top-0 right-5"
                >
                  {isConfirmPasswordVisible ? (
                    <AiOutlineEye size={25} className="mt-6 text-white/50" />
                  ) : (
                    <AiOutlineEyeInvisible
                      size={25}
                      className="mt-6 text-white/50"
                    />
                  )}
                </button>
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </h4>
              </div>
            </div>

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
                "Sign up"
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
