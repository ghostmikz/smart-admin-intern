"use client";
import { useRouter } from "next/navigation";
import { SmartInput, SmartButton, SmartFormField, SmartSelect } from "@repo/ui";

export default function NewUserPage() {
  const router = useRouter();
  
  const roleOptions = [
    { value: "user", label: "Ажилтан (User)" },
    { value: "editor", label: "Засварлагч (Editor)" },
    { value: "admin", label: "Админ (Admin)" },
  ];

  return (
    <div style={{ 
      maxWidth: '700px', 
      margin: '0 auto', 
      fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', letterSpacing: '-0.02em' }}>
          Шинэ хэрэглэгч
        </h1>
        <button 
          onClick={() => router.back()}
          style={{ background: '#f1f5f9', border: 'none', padding: '6px 12px', borderRadius: '6px', color: '#64748b', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}
        >
          Буцах
        </button>
      </div>

      <div style={{ 
        background: '#ffffff', 
        borderRadius: '10px', 
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
      }}>
        
        <div style={{ padding: '24px', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
            01. Хэрэглэгчийн мэдээлэл
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <SmartFormField label="Нэр">
              <SmartInput value="" />
            </SmartFormField>
            <SmartFormField label="Овог">
              <SmartInput value="" />
            </SmartFormField>
            <div style={{ gridColumn: 'span 2' }}>
              <SmartFormField label="Имэйл хаяг">
                <SmartInput value="" />
              </SmartFormField>
            </div>
          </div>
        </div>

        <div style={{ padding: '24px', background: '#fcfcfd' }}>
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '0.05em' }}>
            02. Хандах эрх
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <SmartFormField label="Үүрэг">
              <SmartSelect options={roleOptions} />
            </SmartFormField>
            <SmartFormField label="Нууц үг">
              <SmartInput value="" />
            </SmartFormField>
          </div>
        </div>

        <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'flex-end', gap: '12px', alignItems: 'center' }}>
          <button 
            onClick={() => router.push("/users")}
            style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: '600', fontSize: '14px', cursor: 'pointer' }}
          >
            Цуцлах
          </button>
          <div style={{ width: '150px' }}>
            <SmartButton text="Хадгалах" onClick={() => router.push("/users")} />
          </div>
        </div>
      </div>
    </div>
  );
}