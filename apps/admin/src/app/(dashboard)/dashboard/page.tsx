"use client";
import React from "react";
import { StatsCard, DashboardCard } from "@repo/ui";

export default function DashboardPage() {
  // Enhanced stats with icons and descriptions
  const stats = [
    { 
      label: "Нийт хэрэглэгч", 
      value: "1,240", 
      change: "+12%", 
      trend: "up", 
      icon: "👥",
      description: "Өнгөрсөн сараас 140-өөр нэмэгдсэн"
    },
    { 
      label: "Идэвхтэй хандалт", 
      value: "48", 
      change: "Хэвийн", 
      trend: "neutral", 
      icon: "⚡",
      description: "Одоо системд нэвтэрсэн байгаа"
    },
    { 
      label: "Системийн ачаалал", 
      value: "14%", 
      change: "-2%", 
      trend: "down", 
      icon: "🖥️",
      description: "CPU ашиглалт тогтвортой байна"
    },
  ] as const;

  const activities = [
    { id: 1, user: "Chingunjav", action: "Тохиргоо шинэчилсэн", time: "2 минутын өмнө", color: "#6366f1" },
    { id: 2, user: "Bat-Erdene", action: "Шинэ хэрэглэгч нэмсэн", time: "15 минутын өмнө", color: "#22c55e" },
    { id: 3, user: "Saran", action: "Системээс гарсан", time: "1 цагийн өмнө", color: "#f43f5e" },
  ];

  return (
    <div style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", padding: "10px" }}>
      {/* Dynamic Header */}
      <header style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "850", color: "#0f172a", letterSpacing: "-0.05em", margin: 0 }}>
            Хяналтын самбар
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>
            Системийн өнөөдрийн төлөв байдлыг эндээс хянана уу
          </p>
        </div>
        <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "600", background: "#f1f5f9", padding: "6px 12px", borderRadius: "8px" }}>
          Сүүлийн шинэчлэл: 10:21
        </div>
      </header>

      {/* Stats Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "24px", 
        marginBottom: "40px" 
      }}>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Layout Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
        gap: "24px" 
      }}>
        {/* Graph Placeholder */}
        <DashboardCard title="Хандалтын график">
          <div style={{ 
            height: "300px", 
            background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)", 
            borderRadius: "12px", 
            border: "1px dashed #e2e8f0",
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center", 
            color: "#94a3b8", 
            fontSize: "13px" 
          }}>
            <span style={{ fontSize: "24px", marginBottom: "8px" }}>📈</span>
            График ачаалж байна...
          </div>
        </DashboardCard>

        {/* Activity Feed */}
        <DashboardCard title="Сүүлийн үйлдлүүд">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "4px" }}>
            {activities.map((act) => (
              <div key={act.id} style={{ display: "flex", gap: "16px", position: "relative" }}>
                {/* Timeline line effect */}
                <div style={{ 
                  width: "10px", 
                  height: "10px", 
                  borderRadius: "50%", 
                  background: act.color, 
                  marginTop: "4px",
                  boxShadow: `0 0 0 4px ${act.color}15` 
                }} />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#1e293b" }}>{act.user}</div>
                  <div style={{ fontSize: "13px", color: "#64748b", marginTop: "2px" }}>{act.action}</div>
                  <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px", fontWeight: "500" }}>{act.time}</div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}