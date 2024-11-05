import * as yup from "yup";

export const addProductSchema = yup.object({
  name: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
  category: yup.object().required("This field is required"),
  price: yup.string().required("This field is required"),
  stock: yup.string().required("This field is required"),
  rating: yup.string().required("This field is required"),
  imgUrl: yup.string().required("This field is required"),
});
