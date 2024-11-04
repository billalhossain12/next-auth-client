import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("First name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  mobileNumber: yup.string().required("Password is required"),
});
