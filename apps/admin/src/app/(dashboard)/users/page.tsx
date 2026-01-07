"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SmartInput, SmartButton } from "@repo/ui";

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
    { id: 7, name: "Khulan", email: "khulan.m@gmail.com", role: "Admin", status: "Active" },
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

  return (
    <div style={{ paddingBottom: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "850", color: "#0f172a", letterSpacing: "-0.04em", margin: 0 }}>Хэрэглэгчид</h1>
          <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "4px" }}>Системийн нийт {users.length} хэрэглэгчийг удирдаж байна</p>
        </div>
        <div style={{ width: "180px" }}>
          <SmartButton 
            text="Шинэ хэрэглэгч +" 
            onClick={() => router.push("/users/new")} 
          />
        </div>
      </div>

      <div style={{ 
        background: "#ffffff", 
        borderRadius: "16px", 
        border: "1px solid #f1f5f9",
        boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
        overflow: "hidden"
      }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #f1f5f9", background: "#ffffff" }}>
          <div style={{ width: "320px" }}>
            <SmartInput 
              placeholder="Нэр эсвэл имэйлээр хайх..." 
              value={searchTerm}
              onChange={(val) => setSearchTerm(val)}
              hideLabel={true}
            />
          </div>
        </div>

        <div style={{ maxHeight: "600px", overflowY: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, textAlign: "left" }}>
            <thead style={{ position: "sticky", top: 0, zIndex: 10, background: "#fcfcfd" }}>
              <tr>
                <th style={{ padding: "14px 24px", fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", borderBottom: "1px solid #f1f5f9" }}>Хэрэглэгч</th>
                <th style={{ padding: "14px 24px", fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", borderBottom: "1px solid #f1f5f9" }}>Эрх (Role)</th>
                <th style={{ padding: "14px 24px", fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", borderBottom: "1px solid #f1f5f9" }}>Төлөв</th>
                <th style={{ padding: "14px 24px", borderBottom: "1px solid #f1f5f9" }}></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} style={{ transition: "background 0.2s" }}>
                  <td style={{ padding: "16px 24px", borderBottom: "1px solid #f8fafc" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#f1f5f9", color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "12px" }}>
                        {user.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: "700", color: "#0f172a", fontSize: "14px" }}>{user.name}</div>
                        <div style={{ color: "#94a3b8", fontSize: "12px" }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "16px 24px", borderBottom: "1px solid #f8fafc" }}>
                    <span style={{ fontSize: "13px", color: "#475569", fontWeight: "600" }}>{user.role}</span>
                  </td>
                  <td style={{ padding: "16px 24px", borderBottom: "1px solid #f8fafc" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ 
                        width: "6px", height: "6px", borderRadius: "50%", 
                        background: user.status === "Active" ? "#22c55e" : "#cbd5e1" 
                      }} />
                      <span style={{ 
                        fontSize: "12px", 
                        fontWeight: "700",
                        color: user.status === "Active" ? "#16a34a" : "#64748b"
                      }}>
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: "16px 24px", textAlign: "right", borderBottom: "1px solid #f8fafc" }}>
                    <button style={{ background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", fontWeight: "900", fontSize: "18px" }}>⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}