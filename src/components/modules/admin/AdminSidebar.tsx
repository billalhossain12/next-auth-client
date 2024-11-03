"use client";
import { siteConfig, SidebarItem } from "@/config/site";
import { Icon } from "@iconify/react"; // Import Icon component
import Link from "next/link";
import { usePathname } from "next/navigation";
interface AdminSidebarProps {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}
const AdminSidebar = ({ isOpen, setIsOpen }: AdminSidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed left-0 h-full bg-gray-800 text-white transition-transform duration-300 pb-[15rem] overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 md:w-64`}
    >
      <nav className="mt-5">
        <ul className="space-y-5">
          {siteConfig.adminSidebarItems.map((item: SidebarItem) => (
            <li
              onClick={() => setIsOpen && setIsOpen(!isOpen)}
              key={item.label}
            >
              <Link
                href={item.href}
                className={`flex items-center px-4 py-2 rounded ${
                  pathname === item.href
                    ? "bg-gray-700 font-bold"
                    : "hover:bg-gray-700"
                }`}
              >
                <Icon icon={item.icon} className="w-5 h-5 mr-2" /> {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-4 py-2 hover:bg-red-700 hover:text-white rounded mt-[5rem] w-full text-left text-red-500 flex items-center gap-2">
          <Icon icon="mdi:logout" />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
