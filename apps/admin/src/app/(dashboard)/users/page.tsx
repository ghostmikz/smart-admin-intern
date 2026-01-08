"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  SmartInput, 
  SmartButton, 
  SmartTable, 
  DashboardCard 
} from "@repo/ui";

export default function UsersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "Chingunjav", email: "chingunjav.ariuntur@gmail.com", role: "Admin", status: "Active" },
    { id: 2, name: "Bat-Erdene", email: "baterdene.b@gmail.com", role: "Editor", status: "Active" },
    { id: 3, name: "Saran", email: "saran.dev@gmail.com", role: "User", status: "Inactive" },
    { id: 4, name: "Bold", email: "bold.tech@gmail.com", role: "User", status: "Active" },
    { id: 5, name: "Anu", email: "anu.designer@gmail.com", role: "Editor", status: "Active" },
    { id: 6, name: "Ganzorig", email: "ganzo.work@gmail.com", role: "User", status: "Inactive" },
    { id: 7, name: "Doomslayer", email: "Doomslayer@gmail.com", role: "Admin", status: "Active" },
    { id: 8, name: "Temuulen", email: "temka.t@gmail.com", role: "User", status: "Active" },
    { id: 9, name: "Nomin", email: "nomin.e@gmail.com", role: "Editor", status: "Active" },
    { id: 10, name: "Tuvshin", email: "tuvshoo.dev@gmail.com", role: "User", status: "Inactive" },
    { id: 11, name: "Bilguun", email: "bilguun.b@gmail.com", role: "User", status: "Active" },
    { id: 12, name: "Enkhjin", email: "enkhjin.p@gmail.com", role: "Editor", status: "Active" },
    { id: 13, name: "Oyun", email: "oyun.smart@gmail.com", role: "User", status: "Active" },
    { id: 14, name: "Munkh", email: "munkh.er@gmail.com", role: "User", status: "Inactive" },
    { id: 15, name: "Zaya", email: "zaya.z@gmail.com", role: "Editor", status: "Active" },
    { id: 16, name: "Tuguldur", email: "tuguldur.v@gmail.com", role: "User", status: "Active" },
    { id: 17, name: "Namuun", email: "namuun.g@gmail.com", role: "User", status: "Active" },
    { id: 18, name: "Tulga", email: "tulga.o@gmail.com", role: "Admin", status: "Active" },
    { id: 19, name: "Solongo", email: "solongo.b@gmail.com", role: "User", status: "Inactive" },
    { id: 20, name: "Buyan", email: "buyan.tech@gmail.com", role: "User", status: "Active" },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { 
      header: "Хэрэглэгч", 
      key: "name",
      render: (val: string, row: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ 
            width: "36px", height: "36px", borderRadius: "10px", 
            background: "#f1f5f9", 
            color: "#475569", 
            display: "flex", alignItems: "center", justifyContent: "center", 
            fontWeight: "800", fontSize: "13px" 
          }}>
            {val[0]}
          </div>
          <div>
            <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "14px" }}>{val}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{row.email}</div>
          </div>
        </div>
      )
    },
    { 
      header: "Эрх", 
      key: "role",
      render: (val: string) => (
        <span style={{ 
          fontSize: "12px", 
          fontWeight: "700", 
          color: val === "Admin" ? "#6366f1" : "#64748b",
          background: val === "Admin" ? "#f5f3ff" : "#f8fafc",
          padding: "4px 10px",
          borderRadius: "6px",
          textTransform: "uppercase",
          letterSpacing: "0.02em"
        }}>
          {val}
        </span>
      )
    },
    { 
      header: "Төлөв", 
      key: "status",
      render: (val: string) => (
        <span style={{ 
          fontSize: "12px", 
          fontWeight: "700", 
          color: val === "Active" ? "#16a34a" : "#94a3b8",
          background: val === "Active" ? "#f0fdf4" : "#f8fafc",
          padding: "4px 10px",
          borderRadius: "6px"
        }}>
          {val === "Active" ? "Идэвхтэй" : "Идэвхгүй"}
        </span>
      )
    },
    {
      header: "",
      key: "actions",
      render: (_: any, row: any) => (
        <button 
          onClick={() => router.push(`/users/edit/${row.id}`)}
          style={{ 
            background: "none", border: "none", color: "#cbd5e1", 
            cursor: "pointer", fontWeight: "900", fontSize: "18px",
            padding: "8px"
          }}
        >
          ⋮
        </button>
      )
    }
  ];

  return (
    <div style={{ width: "100%", paddingBottom: "40px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "32px" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "850", color: "#0f172a", letterSpacing: "-0.05em", margin: 0 }}>
            Хэрэглэгчид
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>
            Нийт {users.length} бүртгэлтэй байна
          </p>
        </div>
        <div style={{ width: "180px" }}>
          <SmartButton text="Шинэ хэрэглэгч +" onClick={() => router.push("/users/new")} />
        </div>
      </header>

      <DashboardCard 
        title="Жагсаалт" 
        noPadding 
        action={
          <div style={{ width: "280px" }}>
            <SmartInput 
              placeholder="Хайх (Нэр, имэйл...)" 
              value={searchTerm}
              onChange={(val) => setSearchTerm(val)}
              hideLabel
            />
          </div>
        }
      >
        {filteredUsers.length > 0 ? (
          <SmartTable columns={columns} data={filteredUsers} />
        ) : (
          <div style={{ padding: "100px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🕵️‍♂️</div>
            <h3 style={{ fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0" }}>Хэрэглэгч олдсонгүй</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>"{searchTerm}" гэсэн нэртэй хүн байхгүй байна.</p>
          </div>
        )}
      </DashboardCard>
    </div>
  );
}