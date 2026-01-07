"use client";
import React from "react";
// Хэрэв sharedStyles байгаа бол импортлоно, байхгүй бол дотор нь объект үүсгэнэ
import { sharedStyles } from "../styles"; 

interface SmartButtonProps {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties; // Гаднаас нэмэлт стиль авах боломжтой
  variant?: "primary" | "outline";
}

export const SmartButton = ({ text, onClick, style, variant = "primary" }: SmartButtonProps) => {
  
  // Үндсэн стиль (styles.ts-ээс эсвэл шууд эндээс)
  const baseStyle: React.CSSProperties = {
    height: "46px",
    padding: "0 24px",
    borderRadius: "6px",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    border: variant === "outline" ? "1px solid #e2e8f0" : "none",
    backgroundColor: variant === "outline" ? "transparent" : "#0f172a",
    color: variant === "outline" ? "#0f172a" : "#ffffff",
    width: "100%",
    ...style, // Гаднаас орж ирэх стиль багцын стилийг дарах (Override) боломжийг олгоно
  };

  return (
    <button 
      onClick={onClick} 
      style={baseStyle}
      // Hover эффект өгөхөд хэрэгтэй
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      {text}
    </button>
  );
};