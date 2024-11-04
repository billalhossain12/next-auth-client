import { loginUser, registerUser } from "@/services/authServices/auth.service";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: async (userData: FieldValues) => loginUser(userData),
    mutationKey: ["Login User"],
    onSuccess: () => {
      toast.success("User login is success!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserRegister = () => {
  return useMutation({
    mutationFn: async (userData: FieldValues) => registerUser(userData),
    mutationKey: ["Login User"],
    onSuccess: () => {
      toast.success("User registration is success!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
