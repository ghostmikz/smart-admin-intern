"use client";
import React from "react";

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties; // Нэмэлтээр гаднаас стиль авах боломжтой болгов
}

export const DashboardCard = ({ title, children, style }: DashboardCardProps) => (
  <div style={{ 
    background: "#ffffff", 
    borderRadius: "16px", 
    border: "1px solid #f1f5f9", 
    padding: "24px",
    display: "flex", 
    flexDirection: "column",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // Маш зөөлөн сүүдэр нэмэв
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', // Sans font
    ...style // Гаднаас орж ирэх стиль үндсэн стилийг override хийнэ
  }}>
    <div style={{ 
      fontWeight: "800", 
      fontSize: "14px", 
      color: "#0f172a", 
      marginBottom: "20px",
      textTransform: "uppercase", // Илүү "Premium" харагдуулахын тулд
      letterSpacing: "0.025em"
    }}>
      {title}
    </div>
    <div style={{ flex: 1 }}>
      {children}
    </div>
  </div>
);