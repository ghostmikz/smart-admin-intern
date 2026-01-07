"use client";
import Link from "next/link";
import { SmartInput, SmartButton } from "@repo/ui";

export default function RegisterPage() {
  const handleRegister = () => {
    console.log("Registering...");
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      background: "#f8fafc",
      fontFamily: "ui-sans-serif, system-ui, sans-serif"
    }}>
      <div style={{ 
        width: "100%", 
        maxWidth: "440px", 
        background: "#ffffff", 
        padding: "48px", 
        borderRadius: "24px", 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ 
            width: "48px", height: "48px", background: "#0f172a", borderRadius: "12px", 
            margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: "800", fontSize: "20px" 
          }}>
            C
          </div>
          <h1 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", letterSpacing: "-0.02em" }}>
            Шинэ бүртгэл үүсгэх
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px", marginTop: "8px" }}>
            Системд нэвтрэх эрхээ баталгаажуулна уу
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <SmartInput label="Нэр" placeholder="" required />
            <SmartInput label="Овог" placeholder="" />
          </div>
          
          <SmartInput label="Имэйл хаяг" placeholder="name@domain.com" required />
          <SmartInput label="Нууц үг" mode="password" required />
          <SmartInput label="Нууц үг давтах" mode="password" required />

          <div style={{ marginTop: "16px" }}>
            <SmartButton text="Бүртгүүлэх" onClick={handleRegister} />
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "32px", fontSize: "14px", color: "#64748b" }}>
          Аль хэдийн бүртгэлтэй юу?{" "}
          <Link href="/login" style={{ color: "#3b82f6", fontWeight: "600", textDecoration: "none" }}>
            Нэвтрэх
          </Link>
        </div>
      </div>
    </div>
  );
}