"use client";
import React from "react";

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  style?: React.CSSProperties; // Гаднаас стиль авах
  labelStyle?: React.CSSProperties;
}

export const StatsCard = ({ label, value, change, trend, style, labelStyle }: StatsCardProps) => {
  // Трэндээс хамаарах өнгө болон дэвсгэр
  const getTrendStyles = () => {
    switch (trend) {
      case "up": return { color: "#16a34a", bg: "#f0fdf4", icon: "↑" };
      case "down": return { color: "#e11d48", bg: "#fff1f2", icon: "↓" };
      default: return { color: "#64748b", bg: "#f8fafc", icon: "•" };
    }
  };

  const trendStyles = getTrendStyles();

  return (
    <div style={{ 
      background: "#ffffff", 
      padding: "24px", 
      borderRadius: "16px", 
      border: "1px solid #f1f5f9", 
      boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      minWidth: "200px",
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
      ...style 
    }}>
      {/* Label хэсэг */}
      <div style={{ 
        color: "#64748b", 
        fontSize: "11px", 
        fontWeight: "800", 
        textTransform: "uppercase", 
        letterSpacing: "0.05em",
        ...labelStyle
      }}>
        {label}
      </div>

      {/* Утга болон Трэнд */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between",
        gap: "12px" 
      }}>
        <div style={{ 
          fontSize: "32px", 
          fontWeight: "900", 
          color: "#0f172a",
          letterSpacing: "-0.03em" 
        }}>
          {value}
        </div>

        {/* Trend Badge */}
        <div style={{ 
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "4px 10px",
          borderRadius: "20px",
          fontSize: "12px", 
          fontWeight: "700",
          backgroundColor: trendStyles.bg,
          color: trendStyles.color,
          transition: "all 0.2s ease"
        }}>
          <span>{trendStyles.icon}</span>
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};