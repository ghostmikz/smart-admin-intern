"use client";
import React, { useState } from "react";
import { SmartInput, SmartButton, SmartFormField, SmartSelect } from "@repo/ui";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    language: "mn",
    theme: "light",
    systemName: "Smart Admin System"
  });

  const languageOptions = [
    { value: "mn", label: "Монгол (MN)" },
    { value: "en", label: "English (EN)" },
  ];

  const themeOptions = [
    { value: "light", label: "Light Mode" },
    { value: "dark", label: "Dark Mode" },
  ];

  return (
    <div style={{ 
      maxWidth: '640px', 
      margin: '0 auto', 
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
      color: '#0f172a'
    }}>
      
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: '850', 
          color: '#0f172a', 
          letterSpacing: '-0.03em', 
          margin: 0 
        }}>
          Тохиргоо
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '2px' }}>
          Системийн ерөнхий тохиргоог эндээс удирдана
        </p>
      </div>

      <div style={{ 
        background: '#ffffff', 
        borderRadius: '12px', 
        border: '1px solid #f1f5f9',
        overflow: 'hidden'
      }}>
        
        <div style={{ padding: '24px', borderBottom: '1px solid #f8fafc' }}>
          <div style={{ 
            fontSize: '10px', 
            fontWeight: '800', 
            color: '#cbd5e1', 
            textTransform: 'uppercase', 
            marginBottom: '20px', 
            letterSpacing: '0.05em' 
          }}>
            01. Системийн харагдац
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <SmartFormField label="Хэл сонгох">
              <SmartSelect 
                options={languageOptions} 
                value={formData.language}
                onChange={(e: any) => setFormData({ ...formData, language: e.target.value })}
              />
            </SmartFormField>
            
            <SmartFormField label="Харагдац (Theme)">
              <SmartSelect 
                options={themeOptions} 
                value={formData.theme}
                onChange={(e: any) => setFormData({ ...formData, theme: e.target.value })}
              />
            </SmartFormField>
          </div>
        </div>

        <div style={{ padding: '24px', background: '#fcfcfd' }}>
          <div style={{ 
            fontSize: '10px', 
            fontWeight: '800', 
            color: '#cbd5e1', 
            textTransform: 'uppercase', 
            marginBottom: '20px', 
            letterSpacing: '0.05em' 
          }}>
            02. Ерөнхий мэдээлэл
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <SmartFormField label="Системийн нэр">
                <SmartInput 
                  value={formData.systemName}
                  placeholder="Системийн нэрийг оруулна уу" 
                  onChange={(val: string) => setFormData({ ...formData, systemName: val })}
                />
              </SmartFormField>
            </div>
          </div>
        </div>

        <div style={{ 
          padding: '16px 24px', 
          background: '#ffffff', 
          borderTop: '1px solid #f1f5f9',
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '12px',
          alignItems: 'center'
        }}>
          <button 
            type="button"
            onClick={() => window.history.back()}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#94a3b8', 
              fontWeight: '700', 
              fontSize: '13px', 
              cursor: 'pointer' 
            }}
          >
            Цуцлах
          </button>
          
          <div style={{ width: '160px' }}>
            <SmartButton 
              text="Хадгалах" 
              onClick={() => console.log(formData)} 
            />
          </div>
        </div>
      </div>

      <p style={{ textAlign: 'center', fontSize: '11px', color: '#cbd5e1', marginTop: '24px' }}>
        v1.0.4 - Core System
      </p>
    </div>
  );
}