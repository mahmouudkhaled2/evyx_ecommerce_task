import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "minimum: 3 characters")
    .max(30, "maximum: 30 characters.")
    .required("Name is required."),

  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required."),

  password: Yup.string()
    .matches(
      /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Password must be 8+ characters & include both uppercase and lowercase letters.")
    .required("Password is required."),

  rePassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Passwords don't match. Please ensure both passwords are identical")
    .required("Password confirmation is required"),

  phone: Yup.string()
    .matches(
      /^(\+2)?01[0125]{1}[0-9]{8}$/,
      "phone must be like @example: +2(01012345678)")
    .required("Phone number is required"),
});
