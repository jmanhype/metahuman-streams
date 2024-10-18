import { ChatbotApplicationFormData } from "../types";

export default (values: ChatbotApplicationFormData) => {
  const errors = {} as ChatbotApplicationFormData;

  //Name Validation
  if (!values.name) {
    errors.name = "Required";
  }

  //Email Validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //Attachement
  if(!values.attachement){
    errors.attachement = "Required";
  }

  return errors;
};
