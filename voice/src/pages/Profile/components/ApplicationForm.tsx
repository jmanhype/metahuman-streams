//import { useState } from "react";
import { Formik } from "formik";
import validateChatbotApplicationForm from "../../../validators/validateChatbotApplicationForm";

//Icons
import { ChatbotApplicationFormData } from "../../../types";
import FormAnimation from '../assets/form_animation.gif';
import { AiOutlineClose } from "react-icons/ai";

const ApplicationForm = ({
  setFormVisible,
}: {
  setFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // const [isSending, setIsSending] = useState(false);
  // const [file, setFile] = useState<File | null>();

  return (
    <>
      <div
        onClick={() => {
          setFormVisible(false);
        }}
        className="h-full w-full fixed top-[0px] right-[0px] z-40 bg-black opacity-30"
      ></div>

      <section
        className={`w-[70%] sm:w-1/2 fixed left-5 sm:left-[25%] z-40 top-[15%] my-10 bg-gradient-to-r from-[#1D0D54] to-[#4C178E] from-[50%] rounded-lg border-2 border-[#8756DF]/70`}
      >
        <div className="flex justify-between mx-5 my-3">
          <div></div>
          <h1 className="text-white/70">Chatbot Application Form</h1>
          <button onClick={() => setFormVisible(false)}>
            <AiOutlineClose color="white" />
          </button>
        </div>

        <article className="flex">
          <Formik
            initialValues={{
              name: "",
              email: "",
              attachement: "",
            }}
            validate={(values) => {
              const errors: ChatbotApplicationFormData = validateChatbotApplicationForm(values);
              //TODO: Add a loading indicator
              //if (errors.email || errors.name || errors.attachement) setIsSending(false);

              return errors;
            }}
            onSubmit={async (
              values: ChatbotApplicationFormData,
              { setSubmitting }
            ) => {
              //TODO: Send Application form
              console.log(values);
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
            }) => {
              return (
                <form
                  onSubmit={handleSubmit}
                  className="grid place-content-start items-center px-10 py-5 overflow-auto"
                >
                  <div className="grid h-24">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="px-5 w-full border-2 border-white/70 rounded-xl text-white/70 bg-transparent"
                    />

                    <h4 className="text-red-600 text-[12px] mb-3">
                      {errors.name && touched.name && errors.name}
                    </h4>
                  </div>

                  <div className="grid h-24">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="px-5 w-full border-2 border-white/70 rounded-xl text-white/70 bg-transparent"
                    />

                    <h4 className="text-red-600 text-[12px] mb-3">
                      {errors.email && touched.email && errors.email}
                    </h4>
                  </div>

                  <div className="grid h-24">
                    <input
                      type="file"
                      name="attachements"
                      onChange={(event) => {
                        if (event.currentTarget.files) {
                          //setFile(event.currentTarget.files[0]);
                          handleChange(event);
                        }
                      }}
                      onBlur={handleBlur}
                      value={values.attachement}
                      className="w-full border-2 border-white/70 rounded-xl p-5 text-white/70"
                    />

                    <h4 className="text-red-600 text-[12px] mb-3">
                      {errors.attachement &&
                        touched.attachement &&
                        errors.attachement}
                    </h4>
                  </div>
                  <div className="flex justify-center h-5 mb-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={() => {
                        //if (isSubmitting) setIsSending(true);
                      }}
                      className="border-[1px] border-[rgba(255,255,255,0.12)] bg-[#AEA0FF] bg-opacity-[24%] text-white rounded-lg w-[25%] h-10"
                    >
                      Apply
                    </button>
                  </div>
                </form>
              );
            }}
          </Formik>

          <img
            src={FormAnimation}
            alt=""
            className="w-[50%] h-[375px] mt-3 ml-3 object-[-1px_0px] rounded-l-xl bg-transparent"
          />
        </article>
      </section>
    </>
  );
};

export default ApplicationForm;
