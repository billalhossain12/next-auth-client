"use client";
import { useUser } from "@/contexts/user.provider";
import { logoutUser } from "@/services/authServices/auth.service";
import Link from "next/link";
import userAvatar from "@/assets/user-avatar.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Swal from "sweetalert2";

const Header = () => {
  const { user, setUser } = useUser() || {};
  const [visible, setVisible] = useState(false);
  const handleLogout = () => {
    setVisible(false);
    Swal.fire({
      title: "Confirm Logout",
      text: "Are you sure you want to log out? You can always log back in later.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await logoutUser();
        setUser(null);
        Swal.fire({
          title: "Logged Out Successfully!",
          text: "You have been logged out. Feel free to log back in anytime.",
          icon: "success",
        });
      }
    });
  };

  return (
    <header className="flex justify-between items-center px-[3rem] py-5 sticky top-0 bg-white shadow-sm z-[999] border-b-[1px] border-b-gray-300">
      <h1 className="text-[2rem] font-bold">
        <Link href="/">ProductPulse</Link>
      </h1>

      <ul className="flex items-center gap-[3rem] text-[1.3rem] font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        {user?.email ? (
          <li className="flex items-center gap-10 relative">
            <div
              onClick={() => setVisible(!visible)}
              className="flex items-center gap-2 cursor-pointer select-none"
            >
              <Image
                className="rounded-full border-[1px] border-gray-500"
                src={userAvatar}
                alt="user profile"
                height={50}
                width={50}
              />
              <p>{user?.name}</p>
              {visible ? (
                <Icon icon="ep:arrow-up" />
              ) : (
                <Icon icon="ep:arrow-down" />
              )}
            </div>
            {/* Menu  */}
            {visible && (
              <div className="absolute border-[1px] border-gray-200 shadow-md bg-white text-gray-600 w-full min-h-[150px] top-[3.5rem] select-none">
                <ul className="space-y-[1rem]">
                  <li
                    onClick={() => setVisible(false)}
                    className="px-4 py-2 mt-2 cursor-pointer hover:bg-gray-100 hover:text-gray-700 flex items-center gap-3 text-gray-600"
                  >
                    <Icon className="text-[1.5rem]" icon="ep:user" />
                    <span>Profile</span>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-red-700 flex items-center gap-3 text-red-600"
                  >
                    <Icon
                      className="text-[1.5rem]"
                      icon="material-symbols:logout"
                    />
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            )}
          </li>
        ) : (
          <>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};
export default Header;
