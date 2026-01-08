"use client";
import React, { useState } from "react";

export interface NavigationItem {
  id: number;
  text: string;
  emoji: string;
  path: string;
}

interface SmartSidebarProps {
  children: React.ReactNode;
  items: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
  onHeaderClick?: () => void;
  header?: React.ReactNode;
  user?: { name: string; email: string; role?: string };
  activePath?: string;
}

export const SmartSidebar = ({ 
  children, 
  items, 
  onItemClick, 
  onHeaderClick,
  header,
  user = { name: "Chingunjav", email: "admin@smart.mn", role: "Админ" },
  activePath 
}: SmartSidebarProps) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden', 
      backgroundColor: '#ffffff', 
      fontFamily: '"Plus Jakarta Sans", sans-serif' 
    }}>
      
      {/* --- SIDEBAR --- */}
      <aside style={{ 
        width: isOpened ? '280px' : '88px', 
        backgroundColor: '#fcfcfd', 
        borderRight: '1px solid #f1f5f9',
        height: '100vh',
        transition: 'width 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        position: 'relative',
        zIndex: 50
      }}>
        
        {/* Toggle Button */}
        <div 
          onClick={() => setIsOpened(!isOpened)}
          style={{ 
            position: 'absolute', 
            right: '-12px', 
            top: '48px', 
            width: '24px', 
            height: '24px',
            borderRadius: '8px', 
            background: '#ffffff', 
            border: '1px solid #e2e8f0', 
            cursor: 'pointer', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            zIndex: 100
          }}
        >
          <svg 
            width="12" height="12" viewBox="0 0 12 12" fill="none" 
            style={{ 
                transform: isOpened ? 'rotate(0deg)' : 'rotate(180deg)', 
                transition: 'transform 0.4s ease' 
            }}
          >
            <path d="M7.5 9L4.5 6L7.5 3" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Clickable Header */}
        <div 
          onClick={onHeaderClick}
          style={{ 
            padding: '32px 24px', 
            display: 'flex', 
            alignItems: 'center', 
            overflow: 'hidden',
            cursor: onHeaderClick ? 'pointer' : 'default'
          }}
        >
          <div style={{ 
            minWidth: '40px', height: '40px', 
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)',
            flexShrink: 0
          }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>S</span>
          </div>
          <div style={{ 
            marginLeft: '16px',
            opacity: isOpened ? 1 : 0, 
            transform: isOpened ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'all 0.4s ease', 
            whiteSpace: 'nowrap'
          }}>
            {header}
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '0 16px', overflowY: 'auto', overflowX: 'hidden' }}>
          {items.map((item) => {
            const isActive = activePath === item.path;
            return (
              <div 
                key={item.id}
                onClick={() => onItemClick?.(item)}
                style={{
                  display: 'flex', alignItems: 'center', padding: '12px 16px', margin: '4px 0',
                  borderRadius: '14px', cursor: 'pointer', 
                  transition: 'all 0.2s ease',
                  backgroundColor: isActive ? '#f1f5f9' : 'transparent',
                  color: isActive ? '#6366f1' : '#64748b',
                }}
              >
                <span style={{ 
                    fontSize: '20px', 
                    minWidth: '24px', 
                    textAlign: 'center',
                    filter: isActive ? 'none' : 'grayscale(1)',
                }}>{item.emoji}</span>
                
                <span style={{ 
                  marginLeft: '16px', fontSize: '14px', fontWeight: '600',
                  opacity: isOpened ? 1 : 0, 
                  transition: 'opacity 0.3s ease', 
                  whiteSpace: 'nowrap'
                }}>
                  {item.text}
                </span>
              </div>
            );
          })}
        </nav>

        {/* User Footer */}
        <div style={{ padding: '20px', marginTop: 'auto' }}>
          <div style={{ 
            display: 'flex', alignItems: 'center', padding: '10px',
            background: isOpened ? '#ffffff' : 'transparent', 
            borderRadius: '16px', 
            border: isOpened ? '1px solid #f1f5f9' : '1px solid transparent',
            transition: 'all 0.3s'
          }}>
            <div style={{
                width: '36px', height: '36px', borderRadius: '10px',
                backgroundColor: '#0f172a', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', flexShrink: 0
            }}>
                {user.name.charAt(0)}
            </div>
            {isOpened && (
              <div style={{ marginLeft: '12px', overflow: 'hidden' }}>
                <p style={{ color: '#0f172a', fontSize: '13px', margin: 0, fontWeight: '700', whiteSpace: 'nowrap' }}>{user.name}</p>
                <p style={{ color: '#94a3b8', fontSize: '11px', margin: 0, whiteSpace: 'nowrap' }}>{user.role}</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT WINDOW --- */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
};