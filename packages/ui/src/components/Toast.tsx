"use client";
import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning"; 
  onClose: () => void;
}

export const Toast = ({ message, type = "success", onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  const themes = {
    success: { bg: "#0f172a", icon: "✓", color: "#22c55e" },
    error: { bg: "#be123c", icon: "✕", color: "#ffffff" },
    warning: { bg: "#f59e0b", icon: "!", color: "#ffffff" },
  };

  const theme = themes[type];

  return (
    <div style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      padding: "16px 20px",
      borderRadius: "12px",
      background: theme.bg,
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "600",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "ui-sans-serif, system-ui, sans-serif",
      animation: "toast-in 0.3s ease-out forwards",
    }}>
      <style>{`
        @keyframes toast-in {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
      
      <span style={{ color: theme.color, fontSize: "16px" }}>{theme.icon}</span>
      <span style={{ flex: 1 }}>{message}</span>
      
      <button 
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.5)",
          cursor: "pointer",
          fontSize: "16px",
          padding: "0 0 0 10px",
          marginLeft: "10px",
          borderLeft: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        ✕
      </button>
    </div>
  );
};