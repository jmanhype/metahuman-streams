import { MIN_PASSWORD_LENGTH } from "../constants";
import { SignupFormData } from "../types";

export default (values: SignupFormData) => {
  const errors = {} as SignupFormData;

  //First Name Validation
  if (!values.firstName) {
    errors.firstName = "Required";
  }

  //Last Name Validation
  if (!values.lastName) {
    errors.lastName = "Required";
  }

  //Email Validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //Password Validation
  if (values.password) {
    if (values.password.length < MIN_PASSWORD_LENGTH) {
      errors.password = "Password should be at least 8 chars minimum.";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
        values.password
      )
    ) {
      errors.password = "Password must contain letters, numbers, and symbols.";
    }

    //Confirm Password validation
    if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
      errors.password = "Passwords must match";
    }
  } 

  return errors;
};
