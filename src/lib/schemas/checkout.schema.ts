import * as Yup from "yup";

export const checkoutSchema = Yup.object().shape({
  details: Yup.string().required("Details is required."),
  phone: Yup.string()
    .matches(
      /^(\+2)?01[0125]{1}[0-9]{8}$/,
      "phone must be like @example: 01012345678")
    .required("Phone number is required"),
  city: Yup.string().required('City is required')  
});
