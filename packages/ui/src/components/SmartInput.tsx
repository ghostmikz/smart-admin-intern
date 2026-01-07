"use client";
import React, { useState } from "react";
import { TextBox as DXTextBox, Button as DXTextBoxButton } from "devextreme-react/text-box";
import { Validator as DXValidator, RequiredRule as DXRequiredRule } from "devextreme-react/validator";
import { sharedStyles } from "../styles";

const TextBox = DXTextBox as any;
const TextBoxButton = DXTextBoxButton as any;
const Validator = DXValidator as any;
const RequiredRule = DXRequiredRule as any;

interface SmartInputProps {
  label?: string;
  placeholder?: string;
  mode?: "text" | "password" | "email" | "tel" | "url";
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  hideLabel?: boolean;
  style?: React.CSSProperties; // Гаднаас стиль авах боломжтой болгов
}

export const SmartInput = ({ 
  label, 
  placeholder, 
  mode = "text", 
  required, 
  value, 
  onChange,
  readOnly,
  hideLabel,
  style // Проп-оос авч байна
}: SmartInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const currentMode = mode === "password" ? (isPasswordVisible ? "text" : "password") : mode;

  // Өвөрмөц ID үүсгэх (Scoped CSS-д зориулагдсан)
  const inputId = React.useId().replace(/:/g, "");

  return (
    <div className={`smart-input-container-${inputId}`} style={{ 
      width: '100%',
      marginBottom: (label && !hideLabel) ? '20px' : '0px',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif'
    }}>
      {(label && !hideLabel) && (
        <label style={{ 
          display: 'block', 
          fontSize: '13px', 
          marginBottom: '6px', 
          color: '#475569', 
          fontWeight: '600',
        }}>
          {label}
        </label>
      )}
      
      <TextBox
        mode={currentMode}
        value={value}
        onValueChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        stylingMode="outlined"
        // Inline-style болон sharedStyles-ийг нэгтгэх
        elementAttr={{ 
          style: { 
            ...sharedStyles.input, 
            ...style, // Гаднаас ирсэн стиль (жишээ нь TopBar-аас ирэх height: '40px')
            display: 'flex',
            alignItems: 'center'
          } 
        }}
      >
        {mode === "password" && (
          <TextBoxButton
            name="password"
            location="after"
            options={{
              icon: isPasswordVisible ? "eyeopen" : "eyeclose",
              stylingMode: "text",
              onClick: () => setIsPasswordVisible(!isPasswordVisible),
              elementAttr: { style: { color: '#94a3b8', cursor: 'pointer' } }
            }}
          />
        )}
        {required && (
          <Validator>
            <RequiredRule message={`${label || 'Утга'} заавал оруулна уу`} />
          </Validator>
        )}
      </TextBox>

      {/* Scoped Self-Styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .smart-input-container-${inputId} .dx-texteditor.dx-editor-outlined {
          background-color: ${style?.backgroundColor || sharedStyles.input.background || '#ffffff'} !important;
          border: ${style?.border || sharedStyles.input.border} !important;
          border-radius: ${style?.borderRadius || sharedStyles.input.borderRadius || '8px'} !important;
          height: ${style?.height || sharedStyles.input.height || '46px'} !important;
          transition: all 0.2s ease;
        }
        .smart-input-container-${inputId} .dx-texteditor-input {
          padding: ${sharedStyles.input.padding || '0 16px'} !important;
          font-size: ${sharedStyles.input.fontSize || '14px'} !important;
          font-family: inherit !important;
          color: #0f172a !important;
        }
        .smart-input-container-${inputId} .dx-placeholder {
          font-family: inherit !important;
          padding: ${sharedStyles.input.padding || '0 16px'} !important;
          color: #94a3b8 !important;
        }
        .smart-input-container-${inputId} .dx-texteditor.dx-state-focused {
          border-color: #0f172a !important;
          box-shadow: 0 0 0 1px #0f172a !important;
        }
        /* DevExtreme-ийн default хөх хүрээг арилгах */
        .smart-input-container-${inputId} .dx-texteditor.dx-editor-outlined.dx-state-active,
        .smart-input-container-${inputId} .dx-texteditor.dx-editor-outlined.dx-state-focused {
          border-color: #0f172a !important;
        }
      `}} />
    </div>
  );
};