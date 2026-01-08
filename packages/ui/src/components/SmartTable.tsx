"use client";
import React from "react";

interface Column {
  header: string;
  key: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface SmartTableProps {
  columns: Column[];
  data: any[];
  title?: string;
}

export const SmartTable = ({ columns, data, title }: SmartTableProps) => {
  return (
    <div style={{ 
      background: "#ffffff", 
      borderRadius: "20px", 
      border: "1px solid #f1f5f9",
      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
      overflow: "hidden"
    }}>
      {title && (
        <div style={{ padding: "24px", borderBottom: "1px solid #f1f5f9" }}>
          <h3 style={{ margin: 0, fontSize: "16px", fontWeight: "700", color: "#0f172a" }}>{title}</h3>
        </div>
      )}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              {columns.map((col, i) => (
                <th key={i} style={{ 
                  padding: "16px 24px", 
                  textAlign: "left", 
                  fontSize: "11px", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em",
                  color: "#64748b",
                  fontWeight: "800",
                  borderBottom: "1px solid #f1f5f9"
                }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="table-row" style={{ transition: "background 0.2s" }}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} style={{ 
                    padding: "16px 24px", 
                    fontSize: "14px", 
                    color: "#334155",
                    borderBottom: "1px solid #f8fafc"
                  }}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .table-row:hover { background-color: #fcfcfd; }
      `}} />
    </div>
  );
};