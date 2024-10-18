import { Formik } from "formik";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import { ProfileData, SignupFormData } from "../../../types";
import { FaUserEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { CiLogin } from "react-icons/ci";
import validateProfileForm from "../../../validators/validateProfileForm";

const SettingsPanel = ({
  isEditing,
  setIsEditing,
  setPasswordFormVisible,
  setDeleteFormVisible,
  setFormVisible,
}: {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  setPasswordFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isSending, setIsSending] = useState(false);
  const notifyError = (error: string) => toast.error(error);
  const notifyMessage = (message: string) => toast(message);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const fetchData = async () => {
    const token = localStorage.getItem("access_token");
    const response = await axios.get(`${BASE_URL}/profile?token=${token}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    
    if (response.data.statusCode === 200) {
      setProfileData(response.data.profile);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="my-28 bg-[url('assets/morphline.png')] bg-[50%_0%] grid justify-items-center">
      <h1 className="text-6xl text-white font-bold mb-12">
        {!isEditing ? "Profile" : "Edit Profile"}
      </h1>
      <div className="shadow-[450px_150px_280px_170px_rgba(7,43,170,0.7),230px_150px_280px_150px_rgba(90,0,161,0.7)]" />
      <div className="flex w-[80%] justify-end">
        <button
          onClick={() => {
            if (!isEditing) {
              setPasswordFormVisible(true);
            } else setIsEditing(false);
          }}
          className="group relative"
        >
          <div
            className={
              isEditing
                ? "border-[1px] border-[#E0D8FF] border-opacity-[33%] bg-[rgba(174,77,198,0.5)] rounded-full w-10 h-10 px-[12.5px] py-[10px]"
                : "w-10 h-10 px-[12.5px] py-[10px] rounded-full border-[1px] border-[#E0D8FF] border-opacity-[33%]"
            }
          >
            <div className="group shadow-[0_1px_20px_10px_rgb(15,10,66,0.8)] bg-[rgb(15,10,66,0.65)] rounded-full">
              <FaUserEdit color="white" />
            </div>
          </div>

          <span className="text-white rounded-xl absolute p-3 w-[300%] left-[-40px] bg-gray-800 mt-2 hidden group-hover:block">
            Edit Profile
          </span>
        </button>

        {false ? (
          <button
            onClick={() => {
              setFormVisible(true);
            }}
            className="mx-6 text-white border-[1px] flex items-center gap-5 border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[35%] rounded-xl px-[40px] py-[16px]"
          >
            <CiLogin size={25} /> Admin Panel
          </button>
        ) : (
          <></>
        )}
      </div>

      <Formik
        initialValues={{
          firstName: profileData.firstName ? profileData.firstName : '',
          lastName: profileData.lastName ? profileData.lastName : "",
          email: profileData.email ? profileData.email : "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors: SignupFormData = validateProfileForm(values);
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
          const token = localStorage.getItem("access_token");
          const response = await axios.put(
            `${BASE_URL}/profile`,
            {
              token,
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

          setIsSending(false);
          if (response.data["statusCode"] === 200) {
            notifyMessage(response.data["message"]);

            setProfileData({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
            });
          } else {
            notifyError(response.data["message"]);
          }
          setIsEditing(false);
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
            className="grid justify-items-center text-white rounded-xl bg-gradient-to-r from-[#0C0735]/70 to-[#0C0735] w-full lg:w-[80%] px-16 py-8 mt-5"
          >
            <div className="lg:flex grid gap-10 w-full lg:w-[80%] mt-10">
              <div className="w-full">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={!isEditing ? profileData.firstName : values.firstName}
                  disabled={!isEditing}
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
                  value={!isEditing ? profileData.lastName : values.lastName}
                  disabled={!isEditing}
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
                value={!isEditing ? profileData.email : values.email}
                disabled={!isEditing}
                type="text"
                name="email"
                placeholder="Email"
                className="py-[25px] px-[40px] rounded-lg w-full border-[#E0D8FF] border-[1px] border-opacity-[47%] bg-transparent"
              />
              <h4 className="text-red-600 text-[12px] mb-3">
                {errors.email && touched.email && errors.email}
              </h4>
            </div>

            {isEditing ? (
              <>
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
                        <AiOutlineEye
                          size={25}
                          className="mt-6 text-white/50"
                        />
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
                        <AiOutlineEye
                          size={25}
                          className="mt-6 text-white/50"
                        />
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
                  disabled={isSubmitting}
                  type="submit"
                  className="lg:mx-6 my-10 border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[12%] rounded-xl px-[40px] py-[16px]"
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
                    "Save Changes"
                  )}
                </button>
              </>
            ) : (
              <></>
            )}

            {!isEditing ? (
              <div className="flex justify-between w-[85%]">
                <div />
                <button
                  type="button"
                  onClick={() => {
                    setDeleteFormVisible(true);
                  }}
                  className="lg:mx-6 my-10 border-[1px] border-[rgba(255,255,255,0.12)] bg-[#e83b3b] bg-opacity-[36%] rounded-xl px-[40px] py-[16px]"
                >
                  Delete Profile
                </button>
              </div>
            ) : (
              <></>
            )}
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

export default SettingsPanel;
