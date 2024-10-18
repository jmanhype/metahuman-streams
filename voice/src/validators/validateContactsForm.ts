import { ContactUsFormData } from "../types";

export default (values: ContactUsFormData) => {
  const errors = {} as ContactUsFormData;

  //First Name Validation
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  //Last Name Validation
  if (!values.lastName) {
    errors.lastName = "Required";
  }

  //Message Validation
  if (!values.message) {
    errors.message = "Required";
  }

  //Message Validation
  if (!values.profession || values.profession === "Profession") {
    errors.profession = "Required";
  }

  //Email Validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
