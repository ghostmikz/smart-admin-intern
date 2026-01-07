"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { TopBar } from "@repo/ui";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menu = [
    { id: "0", text: "Хяналт", path: "/dashboard", icon: "📊" }, 
    { id: "1", text: "Хэрэглэгчид", path: "/users", icon: "👥" },
    { id: "2", text: "Профайл", path: "/profile", icon: "👤" },
    { id: "3", text: "Тохиргоо", path: "/settings", icon: "⚙️" },
    { id: "4", text: "Гарах", path: "/logout", icon: "🚪" },
  ];

  const handleLogout = () => {
    if (confirm("Системээс гарах уу?")) {
      localStorage.removeItem("user");
      router.push("/login");
    }
  };

  const asideStyle: React.CSSProperties = {
    width: isCollapsed ? "80px" : "280px",
    background: "#fcfcfd",
    borderRight: "1px solid #f1f5f9",
    display: "flex",
    flexDirection: "column",
    padding: isCollapsed ? "24px 10px" : "24px 16px",
    transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
    flexShrink: 0,
    height: "100vh"
  };

  return (
    <div style={{ 
      display: "flex", 
      height: "100vh", 
      overflow: "hidden", 
      fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif", // Sans font
      background: "#ffffff" 
    }}>
      {/* Sidebar Area */}
      <aside style={asideStyle}>
        {/* Header Section */}
        <div style={{ 
          padding: "0 8px", 
          marginBottom: "32px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: isCollapsed ? "center" : "space-between" 
        }}>
           {!isCollapsed && (
             <div style={{ fontWeight: "900", fontSize: "16px", letterSpacing: "-0.02em", color: "#0f172a" }}>
               SMART ADMIN
             </div>
           )}
           <button 
             onClick={() => setIsCollapsed(!isCollapsed)} 
             style={{ 
               background: "#f1f5f9", border: "none", borderRadius: "8px", 
               width: "28px", height: "28px", cursor: "pointer", 
               display: "flex", alignItems: "center", justifyContent: "center", 
               fontSize: "12px", color: "#64748b" 
             }}
           >
             {isCollapsed ? "→" : "←"}
           </button>
        </div>

        {/* Navigation Section */}
        <nav style={{ flex: 1 }}>
          {menu.map((item) => {
            const isActive = pathname === item.path;
            const isLogout = item.path === "/logout";

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (isLogout) handleLogout();
                  else router.push(item.path);
                }}
                style={{
                  width: "100%", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "12px", 
                  padding: "10px 12px", 
                  marginBottom: "4px",
                  borderRadius: "10px", 
                  border: "none", 
                  cursor: "pointer",
                  background: isActive ? "#ffffff" : "transparent",
                  color: isLogout ? "#e11d48" : (isActive ? "#0f172a" : "#64748b"),
                  boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.04)" : "none",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = "transparent";
                }}
              >
                <span style={{ fontSize: "18px" }}>{item.icon}</span>
                {!isCollapsed && (
                  <span style={{ fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
                    {item.text}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer User Profile Section */}
        <div style={{ 
          marginTop: "auto",
          paddingTop: "16px",
          borderTop: "1px solid #f1f5f9"
        }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "10px",
            padding: "8px",
            borderRadius: "12px",
            background: "#f8fafc",
            justifyContent: isCollapsed ? "center" : "flex-start"
          }}>
            <div style={{ 
              width: "32px", height: "32px", borderRadius: "8px", 
              background: "#0f172a", color: "white", display: "flex", 
              alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700",
              flexShrink: 0
            }}>
              C
            </div>

            {!isCollapsed && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ 
                  fontSize: "13px", fontWeight: "700", color: "#0f172a", 
                  whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" 
                }}>
                  Chingunjav
                </div>
                <div style={{ fontSize: "11px", color: "#64748b" }}>Admin</div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div style={{ 
        flex: 1, 
        display: "flex", 
        flexDirection: "column", 
        minWidth: 0, 
        background: "#ffffff" 
      }}>
        <TopBar />
        <main style={{ 
          flex: 1, 
          overflowY: "auto", 
          padding: "40px",
          backgroundColor: "#fcfcfd" // Main content background
        }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}