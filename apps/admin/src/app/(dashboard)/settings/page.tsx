"use client";
import React, { useState } from "react";
import { 
  SmartInput, 
  SmartButton, 
  SmartFormField, 
  SmartSelect, 
  DashboardCard, 
  Toast 
} from "@repo/ui";

export default function SettingsPage() {
  const [showToast, setShowToast] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    language: "mn",
    theme: "light",
    systemName: "Smart Admin System",
    notifications: true
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate a 1-second save process
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px' }}>
      
      {/* 1. Header Area */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '850', color: '#0f172a', letterSpacing: '-0.04em', margin: 0 }}>
            Систем тохиргоо
          </h1>
          <p style={{ color: '#64748b', fontSize: '15px', marginTop: '4px' }}>
            Платформын үндсэн тохиргоог эндээс удирдана
          </p>
        </div>
        <div style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: '700', color: '#475569' }}>
          V1.0.4
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* 2. Appearance Section */}
        <DashboardCard title="Харагдац болон хэл">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <SmartFormField label="Үндсэн хэл">
              <SmartSelect 
                options={[{ value: "mn", label: "Монгол" }, { value: "en", label: "English" }]} 
                value={formData.language}
                onChange={(val) => updateField("language", val)}
              />
            </SmartFormField>
            
            <SmartFormField label="Системийн өнгө">
              <SmartSelect 
                options={[{ value: "light", label: "Light Mode" }, { value: "dark", label: "Dark Mode" }]} 
                value={formData.theme}
                onChange={(val) => updateField("theme", val)}
              />
            </SmartFormField>
          </div>
        </DashboardCard>

        {/* 3. General Info with Styled Native Checkbox */}
        <DashboardCard title="⚙️ Ерөнхий мэдээлэл">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <SmartFormField label="Системийн нэршил">
              <SmartInput 
                value={formData.systemName}
                onChange={(val) => updateField("systemName", val)}
                hideLabel
              />
            </SmartFormField>

            <div style={{ 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '16px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9'
            }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>Имэйл мэдэгдэл</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Системийн чухал өөрчлөлтийг имэйлээр авах</div>
              </div>
              
              {/* Using a clean native checkbox with modern accent color */}
              <input 
                type="checkbox" 
                checked={formData.notifications}
                onChange={(e) => updateField("notifications", e.target.checked)}
                style={{ 
                  width: '20px', 
                  height: '20px', 
                  accentColor: '#0f172a', // Matches your dark theme color
                  cursor: 'pointer' 
                }}
              />
            </div>
          </div>
        </DashboardCard>

        {/* 4. Footer Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', alignItems: 'center', marginTop: '8px' }}>
          <button 
            onClick={() => window.history.back()} 
            style={{ background: 'none', border: 'none', color: '#94a3b8', fontWeight: '700', cursor: 'pointer', fontSize: '14px' }}
          >
            Цуцлах
          </button>
          <div style={{ width: '180px' }}>
            <SmartButton 
              text={isSaving ? "Хадгалж байна..." : "Хадгалах"} 
              onClick={handleSave} 
            />
          </div>
        </div>
      </div>

      {/* 5. Toast Feedback */}
      {showToast && (
        <Toast 
          message="Тохиргоо амжилттай хадгалагдлаа" 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </div>
  );
}