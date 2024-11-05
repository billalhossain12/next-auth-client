/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createProduct,
  deleteProduct,
  getProducts,
} from "@/services/productServices/product.services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["GetAllProducts"],
    queryFn: getProducts,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["CreateProduct"],
    mutationFn: async (productData: FieldValues) => createProduct(productData),
    onSuccess: () => {
      toast.success("Product created successfully.");
      // Refetch the 'GetAllProducts' query after a successful product creation
      queryClient.invalidateQueries({ queryKey: ["GetAllProducts"] });
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["DeleteProduct"],
    mutationFn: async (productId: string) => deleteProduct(productId),
    onSuccess: () => {
      toast.success("Product deleted successfully.");
      // Refetch the 'GetAllProducts' query after a successful product deletion
      queryClient.invalidateQueries({ queryKey: ["GetAllProducts"] });
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });
};
