/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { envConfig } from "@/config/envConfig";
import { axiosInstance } from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const getProducts = async () => {
  try {
    const res = await axiosInstance.get(
      `${envConfig.baseApi}/products/get-products`
    );
    return res.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const createProduct = async (productData: FieldValues) => {
  try {
    const res = await axiosInstance.post(
      `${envConfig.baseApi}/products/create-product`,
      productData
    );
    return res.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};

export const deleteProduct = async (productId: string) => {
  try {
    const res = await axiosInstance.delete(
      `${envConfig.baseApi}/products/delete-product/${productId}`
    );
    return res.data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
};
