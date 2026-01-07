"use client";
import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
  isEditing?: boolean;
  style?: React.CSSProperties; // Гаднаас стиль авах боломжтой болгов
  labelStyle?: React.CSSProperties; // Label-ийг тусад нь стиль хийх боломжтой болгов
  contentStyle?: React.CSSProperties; // Агуулгыг тусад нь стиль хийх боломжтой болгов
}

export const SmartFormField = ({ 
  label, 
  children, 
  isEditing, 
  style, 
  labelStyle, 
  contentStyle 
}: Props) => {
  
  // 1. Үндсэн контейнерийн стиль
  const defaultContainerStyle: React.CSSProperties = {
    display: 'flex', 
    flexDirection: 'column', 
    gap: '8px', 
    padding: '16px',
    background: isEditing ? '#ffffff' : '#fcfcfd',
    borderRadius: '12px',
    border: isEditing ? '1px solid #0f172a' : '1px solid #f1f5f9',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
    ...style // <--- Гаднаас ирэх стиль бүгдийг дарах эрхтэй
  };

  // 2. Label-ийн стиль
  const defaultLabelStyle: React.CSSProperties = {
    fontSize: '11px', 
    fontWeight: '700', 
    color: isEditing ? '#0f172a' : '#64748b', 
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    ...labelStyle // <--- Гаднаас ирэх label-ийн стиль
  };

  // 3. Агуулгын стиль
  const defaultContentStyle: React.CSSProperties = {
    fontSize: '14px', 
    fontWeight: '600', 
    color: '#0f172a',
    minHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    ...contentStyle // <--- Гаднаас ирэх агуулгын стиль
  };

  return (
    <div style={defaultContainerStyle}>
      <label style={defaultLabelStyle}>
        {label}
      </label>
      <div style={defaultContentStyle}>
        {children}
      </div>
    </div>
  );
};