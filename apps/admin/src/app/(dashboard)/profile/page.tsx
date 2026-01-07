"use client";
import React, { useState } from "react";
import { SmartInput, SmartButton, SmartFormField } from "@repo/ui";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    firstName: "Chingunjav",
    lastName: "Ariuntur",
    email: "chingunjav.ariuntur@gmail.com",
    phone: "95186410",
    position: "Developer"
  });

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '24px' 
      }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a' }}>Миний бүртгэл</h1>
          <p style={{ color: '#64748b', fontSize: '13px' }}>Хувийн мэдээллээ эндээс удирдана уу</p>
        </div>
        
        <div style={{ width: '120px' }}>
          <SmartButton 
            text={isEditing ? "Цуцлах" : "Засах"} 
            onClick={() => setIsEditing(!isEditing)} 
          />
        </div>
      </div>

      <div style={{ 
        background: '#f8fafc', 
        borderRadius: '16px', 
        padding: '24px',
        border: '1px solid #e2e8f0'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '12px' 
        }}>
          
          <SmartFormField label="Нэр">
            {isEditing ? <SmartInput value={user.firstName} hideLabel /> : user.firstName}
          </SmartFormField>

          <SmartFormField label="Овог">
            {isEditing ? <SmartInput value={user.lastName} hideLabel /> : user.lastName}
          </SmartFormField>

          <div style={{ gridColumn: 'span 2' }}>
            <SmartFormField label="Имэйл хаяг">
              {isEditing ? <SmartInput value={user.email} hideLabel /> : user.email}
            </SmartFormField>
          </div>

          <SmartFormField label="Албан тушаал">
            {isEditing ? <SmartInput value={user.position} hideLabel /> : user.position}
          </SmartFormField>

          <SmartFormField label="Холбоо барих">
            {isEditing ? <SmartInput value={user.phone} hideLabel /> : user.phone}
          </SmartFormField>

        </div>

        {isEditing && (
          <div style={{ 
            marginTop: '24px', 
            paddingTop: '20px', 
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <div style={{ width: '160px' }}>
              <SmartButton text="Хадгалах" onClick={() => setIsEditing(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}