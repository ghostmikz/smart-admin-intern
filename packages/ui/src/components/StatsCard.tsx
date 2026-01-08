"use client";
import React from "react";

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon?: React.ReactNode; // Added: Support for an icon
  description?: string;   // Added: Secondary info
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

export const StatsCard = ({ 
  label, 
  value, 
  change, 
  trend, 
  icon, 
  description, 
  style, 
  labelStyle 
}: StatsCardProps) => {
  
  const trendConfig = {
    up: { color: "#16a34a", bg: "#f0fdf4", icon: "↑", label: "Өссөн" },
    down: { color: "#e11d48", bg: "#fff1f2", icon: "↓", label: "Буурсан" },
    neutral: { color: "#64748b", bg: "#f8fafc", icon: "•", label: "Тогтвортой" }
  };

  const currentTrend = trendConfig[trend];

  return (
    <div 
      className="stats-card-container"
      style={{ 
        background: "#ffffff", 
        padding: "24px", 
        borderRadius: "20px", // Slightly rounder for a modern feel
        border: "1px solid #f1f5f9", 
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -2px rgba(0, 0, 0, 0.02)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        minWidth: "240px",
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "default",
        ...style 
      }}
    >
      {/* Top Row: Label and Icon */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ 
          color: "#64748b", 
          fontSize: "12px", 
          fontWeight: "700", 
          textTransform: "uppercase", 
          letterSpacing: "0.05em",
          ...labelStyle
        }}>
          {label}
        </div>
        {icon && (
          <div style={{ color: "#94a3b8", fontSize: "20px" }}>
            {icon}
          </div>
        )}
      </div>

      {/* Main Content: Value and Trend */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ 
            fontSize: "32px", 
            fontWeight: "800", 
            color: "#0f172a",
            letterSpacing: "-0.04em",
            lineHeight: "1"
          }}>
            {value}
          </div>
          {description && (
            <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
              {description}
            </div>
          )}
        </div>

        <div 
          title={currentTrend.label}
          style={{ 
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "4px 10px",
            borderRadius: "12px",
            fontSize: "13px", 
            fontWeight: "700",
            backgroundColor: currentTrend.bg,
            color: currentTrend.color,
          }}
        >
          <span style={{ fontSize: "14px" }}>{currentTrend.icon}</span>
          <span>{change}</span>
        </div>
      </div>

      {/* Hover Effect CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .stats-card-container:hover {
          transform: translateY(-4px);
          border-color: #e2e8f0;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
        }
      `}} />
    </div>
  );
};