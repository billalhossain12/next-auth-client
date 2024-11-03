"use client";
import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return setShowError(true);
    }
    const userData = {
      email,
      password
    }
    console.log(userData)
  };

  return (
    <main className="flex justify-center items-center w-full mt-[3rem]">
      <form
        onSubmit={handleSubmit}
        className="space-y-[1.5rem] md:w-[500px] w-full"
      >
        <h3 className="text-[3rem] font-bold text-gray-700">Login</h3>
        <div>
          <label className="block font-semibold mb-1" htmlFor="email">
            Email <span className="text-red-500 font-bold text-[1.5rem]">*</span>
          </label>
          <input
            id="email"
            className="w-full rounded-md p-2 outline-none border-[1px] border-gray-300"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {!email && showError && (
            <p className="text-red-500 text-[14px] font-medium mt-1">
              Email is required*
            </p>
          )}
        </div>
        <div>
          <label className="block font-semibold mb-1" htmlFor="password">
            Password  <span className="text-red-500 font-bold text-[1.5rem]">*</span>
          </label>
          <input
            id="password"
            className="w-full rounded-md p-2 outline-none border-[1px] border-gray-300"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {!password && showError && (
            <p className="text-red-500 text-[14px] font-medium mt-1">
              Password is required*
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-700 text-white px-10 py-2 rounded-md font-bold">
            Login
          </button>
        </div>
      </form>
    </main>
  );
};
export default Login;
