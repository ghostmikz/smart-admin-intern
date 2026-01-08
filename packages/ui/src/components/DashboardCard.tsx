"use client";
import React from "react";

interface DashboardCardProps {
  title: string;
  subtitle?: string;        // Added: For secondary context
  children: React.ReactNode;
  action?: React.ReactNode;  // Added: For buttons like "View All" or "Filter"
  noPadding?: boolean;      // Added: Useful for tables or charts that need to touch edges
  style?: React.CSSProperties;
}

export const DashboardCard = ({ 
  title, 
  subtitle, 
  children, 
  action, 
  noPadding = false, 
  style 
}: DashboardCardProps) => (
  <div style={{ 
    background: "#ffffff", 
    borderRadius: "20px", 
    border: "1px solid #f1f5f9", 
    display: "flex", 
    flexDirection: "column",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 10px 15px -3px rgba(0, 0, 0, 0.03)", 
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
    overflow: "hidden", // Ensures children don't bleed over border radius
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    ...style 
  }}>
    {/* Header Section */}
    <div style={{ 
      padding: "20px 24px",
      borderBottom: "1px solid #f8fafc", // Subtle separator
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <div style={{ 
          fontWeight: "800", 
          fontSize: "13px", 
          color: "#0f172a", 
          textTransform: "uppercase", 
          letterSpacing: "0.05em",
          lineHeight: "1"
        }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
            {subtitle}
          </div>
        )}
      </div>

      {action && (
        <div style={{ display: "flex", alignItems: "center" }}>
          {action}
        </div>
      )}
    </div>

    {/* Content Section */}
    <div style={{ 
      flex: 1, 
      padding: noPadding ? "0" : "24px",
    }}>
      {children}
    </div>
  </div>
);