import { Formik } from "formik";
import validateContactsForm from "../validators/validateContactsForm";
import axios from "axios";
import { BASE_URL } from "../constants";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { useState } from "react";
import { ContactUsFormData } from "../types";

const ContactUs = ({
  cssProps,
  inputCssProps,
  textAreaCssProps,
}: {
  cssProps: string;
  inputCssProps?: string | "w-[120%]";
  textAreaCssProps?: string | "w-[95%]";
}) => {
  const [isSending, setIsSending] = useState(false);
  const notifyUser = (message: string) => toast(message);
  const notifyError = (message: string) => toast.error(message);

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          profession: "Profession",
          message: "",
        }}
        validate={(values) => {
          const errors: ContactUsFormData = validateContactsForm(values);
          if (errors.email || errors.firstName || errors.lastName || errors.profession || errors.message) setIsSending(false);

          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await axios.post(
            `${BASE_URL}/profile/support`,
            {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              profession: values.profession,
              message: values.message,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );

          setIsSending(false);

          if (response.data.statusCode === 200)
            notifyUser(response.data.message);
          else notifyError(response.data.error);
          values.email = ""
          values.firstName=""
          values.lastName = ""
          values.message = ""
          values.profession = "Profession"
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
            className={`px-5 text-white rounded-xl bg-[#000017] bg-opacity-[90%] shadow-lg relative lg:w-[80%] w-full ${cssProps}`}
          >
            <div className="shadow-[0_0_150px_35px_rgba(7,43,170,0.5)] sm:w-96 rounded-full" />
            <h1 className="text-3xl mt-16 mb-7 font-semibold">Contact Us</h1>

            <div className="lg:flex grid gap-10 w-[100%] sm:w-[80%] mb-10">
              <div className="w-full">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  name="firstName"
                  placeholder="First Name"
                  className={`py-[25px] px-[40px] rounded-lg ${inputCssProps} w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent`}
                />
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.firstName && touched.firstName && errors.firstName}
                </h4>
              </div>

              <div className="w-full">
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  className={`py-[25px] px-[40px] rounded-lg ${inputCssProps} w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent`}
                />
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.lastName && touched.lastName && errors.lastName}
                </h4>
              </div>
            </div>

            <div className="lg:flex grid gap-10 w-[100%] sm:w-[80%] mb-10">
              <div className="w-full">
                <input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                  className={`py-[25px] px-[40px] rounded-lg ${inputCssProps} w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent`}
                />
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.email && touched.email && errors.email}
                </h4>
              </div>

              <div className="w-full">
                <div
                  className={`px-[40px] rounded-lg ${inputCssProps} border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent`}
                >
                  <select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.profession}
                    placeholder="Profession"
                    name="profession"
                    className={`py-[25px] w-full bg-transparent ${
                      values.profession === "Profession"
                        ? "text-white/50"
                        : "text-white"
                    }`}
                  >
                    <option disabled className="hidden">
                      Profession
                    </option>
                    <option
                      value="Influencer"
                      className="bg-[#140F3A] text-white"
                    >
                      Influencer
                    </option>
                    <option
                      value="Business"
                      className="bg-[#140F3A] text-white"
                    >
                      Business
                    </option>
                    <option
                      value="Educator"
                      className="bg-[#140F3A] text-white"
                    >
                      Educator
                    </option>
                    <option value="Other" className="bg-[#140F3A] text-white">
                      Other
                    </option>
                  </select>
                </div>
                <h4 className="text-red-600 text-[12px] mb-3">
                  {errors.profession && touched.profession && errors.profession}
                </h4>
              </div>
            </div>

            <div className="w-full grid justify-items-center">
              <textarea
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                cols={30}
                rows={10}
                placeholder="Write Message"
                className={`py-[25px] px-[40px] rounded-lg ${textAreaCssProps} w-[80%] border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent`}
              />
              <h4 className="text-red-600 text-[12px] mb-3">
                {errors.message && touched.message && errors.message}
              </h4>
            </div>

            <button
              onClick={() => {
                setIsSending(true);
              }}
              type="submit"
              disabled={isSubmitting}
              className="mx-6 my-10 border-[1px] w-[50%] border-[rgba(255,255,255,0.12)] flex justify-center bg-[#AEA0FF] bg-opacity-[48%] rounded-xl px-[40px] py-[16px]"
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
                "Submit"
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
    </>
  );
};

export default ContactUs;
