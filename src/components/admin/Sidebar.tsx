// components/Sidebar.tsx
"use client";
import { usePathname } from "next/navigation";
import { FaChartPie, FaUsers, FaPaw, FaFlag, FaCog, FaCheckCircle } from "react-icons/fa";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: <FaChartPie /> },
  { label: "Users", href: "/users", icon: <FaUsers /> },
  { label: "Pet Listings", href: "/pets", icon: <FaPaw /> },
  { label: "Reports", href: "/reports", icon: <FaFlag /> },
  { label: "Verifications", href: "/verifications", icon: <FaCheckCircle /> },
  { label: "Settings", href: "/settings", icon: <FaCog /> },
];

export default function Sidebar() {
  const path = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-orange-500">Anima Unity</h2>
      </div>
      <nav className="p-4 space-y-2">
        {navItems.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
              path === href
                ? "bg-secondary text-primary border-l-4 border-primary"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}