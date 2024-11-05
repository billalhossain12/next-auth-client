"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler } from "react-hook-form";
import CustomForm from "@/components/Form/CustomForm";
import CustomInput from "@/components/Form/CustomInput";
import CustomTextArea from "@/components/Form/CustomTextArea";
import dynamic from 'next/dynamic';

// Dynamically import react-select to avoid SSR issues
const CustomSelect = dynamic(() => import("@/components/Form/CustomSelect"), { ssr: false });

// import CustomSelect from "@/components/Form/CustomSelect";
import { addProductSchema } from "@/schemas/addProduct.schema";
import { useCreateProduct } from "@/hooks/product.hooks";
import Loading from "@/components/UI/Loading";

const productCategoryOptions = [
  { label: "Health & Garden", value: "Health & Garden" },
  { label: "Electronics", value: "Electronics" },
  { label: "Furniture", value: "Furniture" },
];

export default function AddProductForm() {
  const { mutate: handleCreateProductApi, isPending } = useCreateProduct();
  const handleSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Submitted form data ===> ", data);
    const modifiedData = {
      ...data,
      price: Number(data.price),
      rating: Number(data.rating),
      stock: Number(data.stock),
      category: data.category.value,
    };
    handleCreateProductApi(modifiedData);
  };
  return (
    <>
      {isPending && <Loading />}
      <div className="bg-white shadow-custom md:min-h-screen min-h-[100%] pb-10 md:mb-0 mb-[1rem]">
        <div className="flex items-center md:gap-[2rem] gap-[1rem] md:px-[2rem] px-1 py-[1rem]">
          <h3 className="text-[1.25rem] font-semibold">Add Product</h3>
        </div>

        <CustomForm
          onSubmit={handleSubmit}
          resolver={yupResolver(addProductSchema)}
        >
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[2.5rem] gap-[1.5rem] md:px-[3rem] px-1 md:pt-[2rem] pt-[1rem] md:mr-10">
            <CustomInput
              type="text"
              name="name"
              label="Name"
              required={true}
              placeholder="Enter title here"
            />
            <CustomInput
              type="text"
              name="imgUrl"
              label="Image URL"
              required={true}
              placeholder="Enter image url here"
            />
            <CustomInput
              type="number"
              name="price"
              label="Price"
              required={true}
              placeholder="Enter price here"
            />
            <CustomInput
              type="number"
              name="stock"
              label="Stock"
              required={true}
              placeholder="Enter stock amount here"
            />
            <CustomInput
              type="number"
              name="rating"
              label="Rating"
              required={true}
              placeholder="Enter rating here"
            />
            <div className="md:row-span-3">
              <CustomTextArea
                name="description"
                label="Product Description"
                required={true}
                placeholder="Enter product description here"
              />
            </div>
            <CustomSelect
              name="category"
              label="Category"
              required={true}
              options={productCategoryOptions}
            />
            <div className="md:col-span-2 flex justify-end">
              <button className="bg-primary px-[3rem] py-[0.5rem] bg-black text-white">
                Submit
              </button>
            </div>
          </div>
        </CustomForm>
      </div>
    </>
  );
}
