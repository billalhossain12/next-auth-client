import { UserData } from './../services/authServices/loginUser';
import { loginUser } from "@/services/authServices/loginUser";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: async (userData:UserData) => loginUser(userData),
    mutationKey: ["Login User"],
    onSuccess: () => {
      toast.success("User login success!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
