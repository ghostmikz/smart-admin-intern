"use client";
import React from "react";
import { StatsCard, DashboardCard } from "@repo/ui";

export default function DashboardPage() {
  const stats = [
    { label: "Нийт хэрэглэгч", value: "1,240", change: "+12%", trend: "up" },
    { label: "Идэвхтэй хандалт", value: "48", change: "Хэвийн", trend: "neutral" },
    { label: "Системийн ачаалал", value: "14%", change: "-2%", trend: "down" },
  ] as const;

  const activities = [
    { id: 1, user: "Chingunjav", action: "Тохиргоо шинэчилсэн", time: "2 минутын өмнө" },
    { id: 2, user: "Bat-Erdene", action: "Шинэ хэрэглэгч нэмсэн", time: "15 минутын өмнө" },
    { id: 3, user: "Saran", action: "Системээс гарсан", time: "1 цагийн өмнө" },
  ];

  return (
    <div style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>
      <header style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "850", color: "#0f172a", letterSpacing: "-0.04em", margin: 0 }}>
          Хяналтын самбар
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>
          Өнөөдрийн байдлаарх системийн ерөнхий төлөв
        </p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
        <DashboardCard title="Хандалтын график">
          <div style={{ flex: 1, minHeight: "240px", background: "#f8fafc", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#cbd5e1", fontSize: "13px" }}>
            [ График энд харагдана ]
          </div>
        </DashboardCard>

        <DashboardCard title="Сүүлийн үйлдлүүд">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {activities.map((act) => (
              <div key={act.id} style={{ display: "flex", gap: "12px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e2e8f0", marginTop: "4px" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "700", color: "#334155" }}>{act.user}</div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>{act.action}</div>
                  <div style={{ fontSize: "10px", color: "#cbd5e1", marginTop: "2px" }}>{act.time}</div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}