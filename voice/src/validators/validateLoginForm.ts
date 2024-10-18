import { MIN_PASSWORD_LENGTH } from "../constants";
import { LoginFormData } from "../types";

export default (values: LoginFormData) => {
  const errors = {} as LoginFormData;

  //Email Validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  } 

  //Password Validation
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < MIN_PASSWORD_LENGTH) {
    errors.password = "Password should be at least 8 chars minimum.";
  } 
  else if (
    !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
      values.password
    )
  ) {
    errors.password = "Password must contain letters, numbers, and symbols.";
  }

  return errors;
};