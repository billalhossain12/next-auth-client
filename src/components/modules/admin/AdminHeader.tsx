"use client";
import Image from "next/image";

interface AdminHeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AdminHeader = ({ isOpen, setIsOpen }: AdminHeaderProps) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white flex items-center justify-between p-4 shadow-md">
      <h1 onClick={toggleSidebar} className="text-xl font-bold cursor-pointer">
        ProductPulse
        <div className="md:hidden">
          <button onClick={toggleSidebar}>Toggle</button>
        </div>
      </h1>
      <div className="flex items-center space-x-4">
        <span className="hidden md:block">Siam Ahmed</span>
        <div>
          <Image
            src="https://i.ibb.co.com/Kx3bp73/john-doe.jpg"
            width={40}
            height={40}
            alt="Profile Image"
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
