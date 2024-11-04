/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CustomForm from "@/components/Form/CustomForm";
import CustomInput from "@/components/Form/CustomInput";
import Loading from "@/components/UI/Loading";
import { useUser } from "@/contexts/user.provider";
import { useUserLogin } from "@/hooks/auth.hooks";
import { loginSchema } from "@/schemas/login.schema.";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const { setIsLoading } = useUser();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    await handleUserLogin(data);
    setIsLoading(true);
  };

  useEffect(() => {
    if (isSuccess && !isPending) {
      router.push("/");
    }
  }, [isSuccess, isPending, router]);

  return (
    <>
      {isPending && <Loading />}
      <main className="flex justify-center items-center w-full min-h-screen md:p-0 p-3">
        <div className="md:w-[500px] w-full">
          <CustomForm
            onSubmit={handleSubmit}
            resolver={yupResolver(loginSchema)}
          >
            <div className="space-y-[2rem]">
              <CustomInput
                type="email"
                name="email"
                label="Email"
                required={true}
              />
              <div>
              <div className="relative">
                <CustomInput
                  type={isVisible ? "text" : "password"}
                  name="password"
                  label="Password"
                  required={true}
                />
                {isVisible ? (
                  <Icon
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-gray-500 text-[1.5rem] absolute top-[43px] right-3 cursor-pointer"
                    icon="mdi:eye"
                  />
                ) : (
                  <Icon
                    onClick={() => setIsVisible(!isVisible)}
                    className="text-gray-500 text-[1.5rem] absolute top-[43px] right-3 cursor-pointer"
                    icon="mdi:eye-off"
                  />
                )}
              </div>
             <Link href="change-password"> <p className="hover:text-gray-800 text-gray-600 hover:font-medium hover:underline text-right mt-1 cursor-pointer">Forgot password?</p></Link>
              </div>
              <div>
                <button className="bg-black text-white px-5 py-2 rounded-md w-full">
                  Login
                </button>
              </div>
              <div className="flex justify-end gap-1 text-gray-600">
                <span>Do not have an account?</span>
                <Link href="/auth/register">
                  <span className="hover:text-gray-800 hover:font-medium hover:underline">
                    Register
                  </span>
                </Link>
              </div>
            </div>
          </CustomForm>
        </div>
      </main>
    </>
  );
};
export default Login;
