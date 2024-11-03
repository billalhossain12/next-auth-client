interface SidebarItem {
  label: string;
  href: string;
  icon: string; // Add an icon property
}

interface SiteConfig {
  adminSidebarItems: SidebarItem[];
  customerSidebarItems: SidebarItem[];
}

export const siteConfig: SiteConfig = {
  adminSidebarItems: [
    { label: "Dashboard", href: "/admin", icon: "bxs:dashboard" },
    { label: "Products", href: "/admin/products", icon: "mdi:box" },
    { label: "Orders", href: "/admin/orders", icon: "mdi:clipboard-list" },
    { label: "Customers", href: "/admin/customers", icon: "mdi:account" },
    { label: "Promotions", href: "/admin/promotions", icon: "mdi:tag" },
    { label: "Reports", href: "/admin/reports", icon: "mdi:chart-line" },
    { label: "Settings", href: "/admin/settings", icon: "mdi:cog" },
    { label: "Reviews", href: "/admin/reviews", icon: "mdi:star" },
    { label: "Users", href: "/admin/users", icon: "mdi:account-group" },
    { label: "Support", href: "/admin/support", icon: "mdi:help-circle" },
    { label: "Blog", href: "/admin/blog", icon: "mdi:pen" },
  ],
  customerSidebarItems: [
    {
      label: "User Dashboard",
      href: "/user/dashboard",
      icon: "bxs:dashboard",
    },
    {
      label: "User Orders",
      href: "/user/orders",
      icon: "raphael:cart",
    },
    {
      label: "User Wishlist",
      href: "/user/wishlist",
      icon: "bxs:heart",
    },
    {
      label: "User Profile",
      href: "/user/profile",
      icon: "bxs:user-circle",
    },
    {
      label: "User Support",
      href: "/user/support",
      icon: "bxs:help-circle",
    },
  ],
};

export type { SiteConfig, SidebarItem };
