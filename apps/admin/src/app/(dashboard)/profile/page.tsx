"use client";
import React, { useState, useRef } from "react";
import { SmartInput, SmartButton, SmartFormField, DashboardCard } from "@repo/ui";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  
  // Real state
  const [user, setUser] = useState({
    firstName: "Chingunjav",
    lastName: "Ariuntur",
    email: "chingunjav.ariuntur@gmail.com",
    phone: "95186410",
    position: "Developer"
  });

  // Backup state to revert changes if user cancels
  const [tempUser, setTempUser] = useState({...user});

  const handleEditToggle = () => {
    if (isEditing) {
      setTempUser({...user}); // Revert to original if canceling
    } else {
      setTempUser({...user}); // Sync temp with current
    }
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setUser({...tempUser});
    setIsEditing(false);
    // Add a toast notification here: "Амжилттай хадгалагдлаа"
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '0 24px' }}>
      
      {/* 1. Profile Header with Avatar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '24px', 
        marginBottom: '40px',
        padding: '0 10px' 
      }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          color: 'white',
          fontWeight: '800',
          boxShadow: '0 10px 15px -3px rgba(99, 102, 241, 0.3)'
        }}>
          {user.firstName[0]}
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '28px', fontWeight: '850', color: '#0f172a', margin: 0, letterSpacing: '-0.03em' }}>
            {user.firstName} {user.lastName}
          </h1>
          <p style={{ color: '#64748b', fontSize: '15px' }}>{user.position} • {user.email}</p>
        </div>
        <div style={{ width: '140px' }}>
          <SmartButton 
            variant={isEditing ? "outline" : "primary"}
            text={isEditing ? "Цуцлах" : "Засах"} 
            onClick={handleEditToggle} 
          />
        </div>
      </div>

      {/* 2. Form Container using DashboardCard for consistency */}
      <DashboardCard title="Хувийн мэдээлэл" subtitle="Таны мэдээлэл системд аюулгүй хадгалагдаж байна">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '32px' 
        }}>
          
          <SmartFormField label="Нэр">
            {isEditing ? (
              <SmartInput value={tempUser.firstName} onChange={(val) => setTempUser({...tempUser, firstName: val})} hideLabel />
            ) : (
              <div style={{ fontWeight: '600', color: '#1e293b', padding: '8px 0' }}>{user.firstName}</div>
            )}
          </SmartFormField>

          <SmartFormField label="Овог">
            {isEditing ? (
              <SmartInput value={tempUser.lastName} onChange={(val) => setTempUser({...tempUser, lastName: val})} hideLabel />
            ) : (
              <div style={{ fontWeight: '600', color: '#1e293b', padding: '8px 0' }}>{user.lastName}</div>
            )}
          </SmartFormField>

          <div style={{ gridColumn: 'span 2' }}>
            <SmartFormField label="Имэйл хаяг">
              {isEditing ? (
                <SmartInput value={tempUser.email} onChange={(val) => setTempUser({...tempUser, email: val})} hideLabel />
              ) : (
                <div style={{ fontWeight: '600', color: '#1e293b', padding: '8px 0' }}>{user.email}</div>
              )}
            </SmartFormField>
          </div>

          <SmartFormField label="Албан тушаал">
            {isEditing ? (
              <SmartInput value={tempUser.position} onChange={(val) => setTempUser({...tempUser, position: val})} hideLabel />
            ) : (
              <div style={{ fontWeight: '600', color: '#1e293b', padding: '8px 0' }}>{user.position}</div>
            )}
          </SmartFormField>

          <SmartFormField label="Гар утас">
            {isEditing ? (
              <SmartInput value={tempUser.phone} onChange={(val) => setTempUser({...tempUser, phone: val})} hideLabel />
            ) : (
              <div style={{ fontWeight: '600', color: '#1e293b', padding: '8px 0' }}>{user.phone}</div>
            )}
          </SmartFormField>
        </div>

        {isEditing && (
          <div style={{ 
            marginTop: '40px', 
            paddingTop: '24px', 
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <div style={{ width: '180px' }}>
              <SmartButton text="Хадгалах" onClick={handleSave} />
            </div>
          </div>
        )}
      </DashboardCard>
    </div>
  );
}