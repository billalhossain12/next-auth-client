/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { envConfig } from "@/config/envConfig";
import { TCategory } from "@/types";

export async function getAllCategories() {
  try {
    const response = await fetch(`${envConfig.baseApi}/categories/get-categories`);
    const data: { data: TCategory[] } = await response.json();
    return data.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message);
  }
}
