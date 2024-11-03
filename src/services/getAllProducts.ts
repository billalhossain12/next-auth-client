/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { envConfig } from "@/config/envConfig";
import { TProduct } from "@/types";

export async function getAllProducts() {
  try {
    const response = await fetch(`${envConfig.baseApi}/products/get-products`);
    const data: { data: TProduct[] } = await response.json();
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
