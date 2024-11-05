/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createProduct,
  getProducts,
} from "@/services/productServices/product.services";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["GetAllProducts"],
    queryFn: getProducts,
  });
};

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ["CreateProduct"],
    mutationFn: async (productData: FieldValues) =>createProduct(productData),
    onSuccess: () => {
      toast.success("Product created successfully.");
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });
};
