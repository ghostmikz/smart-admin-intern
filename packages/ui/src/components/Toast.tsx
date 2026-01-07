"use client";
import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

export const Toast = ({ message, type = "success", onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      padding: "12px 20px",
      borderRadius: "10px",
      background: type === "success" ? "#0f172a" : "#e11d48",
      color: "#ffffff",
      fontSize: "13px",
      fontWeight: "600",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "ui-sans-serif, system-ui, sans-serif"
    }}>
      <span>{type === "success" ? "✓" : "✕"}</span>
      {message}
    </div>
  );
};