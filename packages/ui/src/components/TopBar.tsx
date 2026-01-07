"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { SmartInput } from "./SmartInput";

interface TopBarProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
  title?: string;
  style?: React.CSSProperties;
  onSearch?: (value: string) => void;
}

export const TopBar = ({ 
  user = { name: "Chingunjav", email: "chingunjav.ariuntur@gmail.com" }, 
  title = "Smart Admin",
  style,
  onSearch 
}: TopBarProps) => {
  const router = useRouter();

  return (
    <header style={{
      height: '72px', // Бага зэрэг өндөр болгож зай авлаа
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      background: '#ffffff',
      borderBottom: '1px solid #f1f5f9',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      ...style
    }}>
      {/* Left Section: Logo & Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1 }}>
        <div style={{ 
          fontSize: '14px', 
          fontWeight: '900', 
          color: '#0f172a', 
          letterSpacing: '-0.03em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap'
        }}>
          {title}
        </div>
        
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <SmartInput 
            placeholder="Хурдан хайлт..." 
            hideLabel={true}
            onChange={(e: any) => onSearch?.(e.target.value)}
            style={{ height: '40px' }} 
          />
        </div>
      </div>

      {/* Right Section: Profile */}
      <div 
        onClick={() => router.push("/profile")}
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '12px',
          transition: 'all 0.2s ease',
          marginLeft: '24px'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafc")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <div style={{ textAlign: 'right', display: 'none', md: 'block' } as any}>
          <div style={{ 
            fontSize: '13px', 
            fontWeight: '700', 
            color: '#0f172a',
            lineHeight: '1.2' 
          }}>
            {user.name}
          </div>
          <div style={{ 
            fontSize: '11px', 
            color: '#64748b', 
            fontWeight: '500' 
          }}>
            {user.email}
          </div>
        </div>
        
        <div style={{ 
          width: '40px', 
          height: '40px', 
          borderRadius: '10px', 
          background: '#0f172a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '15px',
          fontWeight: '700',
          color: '#ffffff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          flexShrink: 0
        }}>
          {user.avatar ? (
             <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
          ) : (
             user.name.charAt(0)
          )}
        </div>
      </div>
    </header>
  );
};