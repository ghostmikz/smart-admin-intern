"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { TopBar, SmartSidebar } from "@repo/ui";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const currentUser = { 
    name: "Chingunjav", 
    email: "chingunjav.ariuntur@gmail.com",
    role: "Admin" 
  };

const menu = [
    { id: 0, text: "Хяналт", path: "/dashboard", emoji: "📊" }, 
    { id: 1, text: "Хэрэглэгчид", path: "/users", emoji: "👥" },
    { id: 5, text: "Түүх", path: "/history", emoji: "📜" }, 
    { id: 2, text: "Профайл", path: "/profile", emoji: "👤" },
    { id: 3, text: "Тохиргоо", path: "/settings", emoji: "⚙️" },
    { id: 4, text: "Гарах", path: "/logout", emoji: "🚪" },
  ];

  const handleNavigation = (item: any) => {
    if (item.path === "/logout") {
      if (confirm("Системээс гарах уу?")) {
        localStorage.removeItem("user");
        router.push("/login");
      }
    } else {
      router.push(item.path);
    }
  };

  return (
    <SmartSidebar 
      items={menu} 
      user={currentUser} 
      activePath={pathname}
      onItemClick={handleNavigation}
    >
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        minWidth: 0, // CRITICAL: Allows content to shrink correctly
        height: "100vh" 
      }}>
        <TopBar 
          user={currentUser} 
          onSearch={(val) => console.log("Searching:", val)} 
          style={{ 
            position: 'sticky', 
            top: 0, 
            zIndex: 40,
            borderBottom: '1px solid #f1f5f9',
            backgroundColor: '#ffffff'
          }}
        />
        
        <main style={{ 
          flex: 1, 
          overflowY: "auto", 
          padding: "32px 40px",
          backgroundColor: "#ffffff"
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            {children}
          </div>
        </main>
      </div>
    </SmartSidebar>
  );
}