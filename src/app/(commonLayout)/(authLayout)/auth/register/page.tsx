/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CustomForm from "@/components/Form/CustomForm";
import CustomInput from "@/components/Form/CustomInput";
import Loading from "@/components/UI/Loading";
import { useUser } from "@/contexts/user.provider";
import { useUserRegister } from "@/hooks/auth.hooks";
import { registerSchema } from "@/schemas/register.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const router = useRouter();

  const {
    mutate: handleUserRegister,
    isPending,
    isSuccess,
  } = useUserRegister();
  const { setIsLoading } = useUser();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    await handleUserRegister(data);
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
            resolver={yupResolver(registerSchema)}
          >
            <div className="space-y-[2rem]">
              <CustomInput
                type="text"
                name="name"
                label="Name"
                required={true}
              />
              <CustomInput
                type="text"
                name="mobileNumber"
                label="Mobile Number"
                required={false}
              />
              <CustomInput
                type="email"
                name="email"
                label="Email"
                required={true}
              />
              <CustomInput
                type="password"
                name="password"
                label="Password"
                required={true}
              />
              <div>
                <button className="bg-black text-white px-5 py-2 rounded-md w-full">
                  Register
                </button>
              </div>
              <div className="flex justify-end gap-1 text-gray-600">
                <span>Already have an account?</span>
                <Link href="/auth/login">
                  <span className="hover:text-gray-800 hover:font-medium hover:underline">
                    Login
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
