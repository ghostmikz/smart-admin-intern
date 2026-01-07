"use client";
import React, { useState } from "react";
import { Drawer } from "devextreme-react/drawer";
import { List } from "devextreme-react/list";

const DXDrawer = Drawer as any;
const DXList = List as any;

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
  user?: { name: string; email: string }; // Профайлын мэдээлэл нэмэв
}

export const SmartSidebar = ({ children, items, onItemClick, user = { name: "Chingunjav", email: "admin@smart.mn" } }: SmartSidebarProps) => {
  const [isOpened, setIsOpened] = useState(true);

  const NavigationTemplate = (item: NavigationItem) => {
    return (
      <div className="nav-item-wrapper" style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: isOpened ? '10px 16px' : '10px 0',
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
        transition: 'all 0.3s'
      }}>
        <span style={{ fontSize: '20px', minWidth: isOpened ? '30px' : '100%', textAlign: 'center' }}>
          {item.emoji}
        </span>
        {isOpened && (
          <span style={{ marginLeft: '12px', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap' }}>
            {item.text}
          </span>
        )}
      </div>
    );
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      <DXDrawer
        opened={isOpened}
        openedStateMode="shrink"
        position="left"
        revealMode="slide"
        height="100%"
        component={() => (
          <div style={{ 
            width: isOpened ? '260px' : '72px', 
            backgroundColor: '#ffffff',
            borderRight: '1px solid #f1f5f9',
            height: '100%',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            flexDirection: 'column' // БОСОО БҮТЭЦ
          }}>
            {/* 1. Header Section */}
            <div style={{ padding: '24px', textAlign: 'center', flexShrink: 0 }}>
               <span style={{ fontSize: '18px', fontWeight: '900', letterSpacing: '-1px', color: '#0f172a' }}>
                 {isOpened ? "SMART ADMIN" : "S"}
               </span>
            </div>

            {/* 2. Scrollable List Section */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
              <DXList
                dataSource={items}
                hoverStateEnabled={true}
                focusStateEnabled={false}
                selectionMode="single"
                onItemClick={(e: any) => onItemClick?.(e.itemData)}
                itemRender={NavigationTemplate}
                elementAttr={{ class: "sidebar-list" }}
              />
            </div>

            {/* 3. FIXED FOOTER SECTION (Profile) */}
            <div style={{ 
              padding: '16px', 
              borderTop: '1px solid #f1f5f9', 
              flexShrink: 0, 
              backgroundColor: '#ffffff' 
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '8px',
                borderRadius: '12px',
                background: '#f8fafc',
                justifyContent: isOpened ? 'flex-start' : 'center'
              }}>
                <div style={{ 
                  width: '32px', height: '32px', borderRadius: '8px', 
                  backgroundColor: '#0f172a', color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 'bold', flexShrink: 0
                }}>
                  {user.name.charAt(0)}
                </div>
                {isOpened && (
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {user.name}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Admin</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      >
        {/* Main Content Area */}
        <div style={{ backgroundColor: '#f8fafc', height: '100vh', overflowY: 'auto' }}>
          <div style={{ padding: '16px 24px', position: 'sticky', top: 0, zIndex: 10, backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'flex-start' }}>
            <button 
              onClick={() => setIsOpened(!isOpened)}
              style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 12px', cursor: 'pointer' }}
            >
              {isOpened ? "⬅️" : "➡️"}
            </button>
          </div>
          <div style={{ padding: '0 24px 24px 24px' }}>
            {children}
          </div>
        </div>
      </DXDrawer>

      <style dangerouslySetInnerHTML={{ __html: `
        .sidebar-list { border: none !important; }
        .dx-list-item { border: none !important; margin: 2px 8px !important; border-radius: 8px !important; }
        .dx-list-item.dx-list-item-selected { background-color: #0f172a !important; color: white !important; }
        .dx-list-item.dx-list-item-selected .nav-item-wrapper span { color: white !important; }
      `}} />
    </div>
  );
};