"use client";
import AdminHeader from "@/components/modules/admin/AdminHeader";
import AdminSidebar from "@/components/modules/admin/AdminSidebar";
import { ReactNode, useState } from "react";

interface AdminLayoutProps {
  children: ReactNode; // The main content to be rendered inside the layout
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <AdminHeader isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-1">
        <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <main className="flex-1 p-6 ml-0 md:ml-64 transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
