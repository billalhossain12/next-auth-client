/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { axiosInstance } from "@/lib/axiosInstance";
import { cookies } from "next/headers";

export interface UserData {
  email: string;
  password: string;
}

export const loginUser = async (userData: UserData) => {
  try {
    const res = await axiosInstance.post("/auth/login", userData);
    const { data } = res;
    if (data.success) {
      (await cookies()).set("accessToken", data.data.accessToken);
      (await cookies()).set("refreshToken", data.data.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const registerUser = async (userData: UserData) => {
  try {
    const res = await axiosInstance.post("/auth/register", userData);
    const { data } = res;
    if (data.success) {
      (await cookies()).set("accessToken", data.data.accessToken);
      (await cookies()).set("refreshToken", data.data.refreshToken);
    }
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
