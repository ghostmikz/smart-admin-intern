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
    { id: 4, text: "Гарах", path: "/login", emoji: "🚪" },
  ];

  return (
    <SmartSidebar 
      items={menu} 
      user={currentUser} 
      activePath={pathname}
      onItemClick={(item) => router.push(item.path)}
      // 1. Pass the Text here
      header={
        <span style={{ fontWeight: '800', color: '#0f172a', fontSize: '15px', letterSpacing: '-0.5px' }}>
          SMART ADMIN
        </span>
      }
      // 2. Handle the click to go home
      onHeaderClick={() => router.push("/dashboard")}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, height: "100vh" }}>
        <TopBar user={currentUser} onSearch={(val) => console.log(val)} />
        <main style={{ flex: 1, overflowY: "auto", padding: "32px 40px", backgroundColor: "#ffffff" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            {children}
          </div>
        </main>
      </div>
    </SmartSidebar>
  );
}