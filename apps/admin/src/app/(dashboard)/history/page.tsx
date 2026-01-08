"use client";
import React from "react";
import { SmartTable } from "@repo/ui";

export default function HistoryPage() {
  const transactions = [
    { id: "#TRX-001", date: "2026-01-08", amount: "₮250,000", status: "Амжилттай", type: "Орлого" },
    { id: "#TRX-002", date: "2026-01-07", amount: "₮12,500", status: "Хүлээгдэж буй", type: "Зарлага" },
    { id: "#TRX-003", date: "2026-01-05", amount: "₮1,200,000", status: "Амжилттай", type: "Орлого" },
    { id: "#TRX-004", date: "2026-01-04", amount: "₮55,000", status: "Цуцлагдсан", type: "Зарлага" },
  ];

  const columns = [
    { header: "Гүйлгээний ID", key: "id" },
    { header: "Огноо", key: "date" },
    { 
      header: "Төрөл", 
      key: "type",
      render: (val: string) => (
        <span style={{ 
          color: val === "Орлого" ? "#22c55e" : "#ef4444",
          fontWeight: "600"
        }}>
          {val}
        </span>
      )
    },
    { header: "Дүн", key: "amount" },
    { 
      header: "Төлөв", 
      key: "status",
      render: (val: string) => {
        const colors: any = {
          "Амжилттай": { bg: "#f0fdf4", text: "#16a34a" },
          "Хүлээгдэж буй": { bg: "#fefce8", text: "#ca8a04" },
          "Цуцлагдсан": { bg: "#fef2f2", text: "#dc2626" }
        };
        const theme = colors[val] || colors["Амжилттай"];
        return (
          <span style={{ 
            padding: "4px 10px", 
            borderRadius: "6px", 
            fontSize: "12px", 
            fontWeight: "700",
            backgroundColor: theme.bg,
            color: theme.text
          }}>
            {val}
          </span>
        );
      }
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "850", color: "#0f172a", letterSpacing: "-0.05em" }}>
          Гүйлгээний түүх
        </h1>
        <p style={{ color: "#64748b" }}>Системийн бүх санхүүгийн хөдөлгөөнийг эндээс хянана уу.</p>
      </div>

      <SmartTable 
        title="Сүүлийн гүйлгээнүүд"
        columns={columns} 
        data={transactions} 
      />
    </div>
  );
}