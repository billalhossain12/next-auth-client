interface SidebarItem {
  label: string;
  href: string;
  icon: string; // Iconify icon name
}

interface SiteConfig {
  adminSidebarItems: SidebarItem[];
  customerSidebarItems: SidebarItem[];
}

export const siteConfig: SiteConfig = {
  adminSidebarItems: [
    { label: "Dashboard", href: "/admin", icon: "material-symbols:dashboard" },
    { label: "Products", href: "/admin/products", icon: "mdi:cart" },
    { label: "Orders", href: "/admin/orders", icon: "mdi:clipboard-list" },
    { label: "Customers", href: "/admin/customers", icon: "mdi:account" },
    { label: "Promotions", href: "/admin/promotions", icon: "mdi:sale" },
    { label: "Reports", href: "/admin/reports", icon: "mdi:chart-line" },
    { label: "Settings", href: "/admin/settings", icon: "mdi:cog" },
    { label: "Reviews", href: "/admin/reviews", icon: "mdi:star" },
    { label: "Users", href: "/admin/users", icon: "mdi:account-group" },
    { label: "Support", href: "/admin/support", icon: "mdi:help-circle" },
    { label: "Blog", href: "/admin/blog", icon: "mdi:blog" },
  ],
  customerSidebarItems: [
    { label: "User Dashboard", href: "/user/dashboard", icon: "material-symbols:dashboard" },
    { label: "User Orders", href: "/user/orders", icon: "mdi:clipboard-list" },
    { label: "User Wishlist", href: "/user/wishlist", icon: "mdi:heart" },
    { label: "User Profile", href: "/user/profile", icon: "mdi:account" },
    { label: "User Support", href: "/user/support", icon: "mdi:help-circle" },
  ],
};

export type { SiteConfig, SidebarItem };

