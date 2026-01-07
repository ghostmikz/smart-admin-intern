"use client";
import React from "react";
import DXDataGrid, { 
  Column as DXColumn, 
  Paging as DXPaging, 
  Pager as DXPager,
  Scrolling as DXScrolling,
  LoadPanel as DXLoadPanel
} from "devextreme-react/data-grid";

const DataGrid = DXDataGrid as any;
const Column = DXColumn as any;
const Paging = DXPaging as any;
const Pager = DXPager as any;
const Scrolling = DXScrolling as any;
const LoadPanel = DXLoadPanel as any;

interface SmartTableProps {
  dataSource: any[];
  columns: any[];
  style?: React.CSSProperties;
}

export const SmartTable = ({ dataSource, columns, style }: SmartTableProps) => {
  return (
    <div style={{ 
      fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
      width: "100%",
      overflow: "hidden",
      borderRadius: "12px",
      border: "1px solid #f1f5f9",
      background: "#ffffff",
      ...style 
    }}>
      <DataGrid
        dataSource={dataSource}
        showBorders={false}
        columnAutoWidth={true}
        rowAlternationEnabled={false}
        hoverStateEnabled={true}
        showColumnLines={false} 
        showRowLines={true}
        // DevExtreme-ийн үндсэн контейнерт стиль өгөх
        elementAttr={{ 
          style: "background-color: transparent; border: none;" 
        }}
        // Мөрийн стилийг шууд JS-ээр удирдах
        onRowPrepared={(e: any) => {
          if (e.rowType === "data") {
            e.rowElement.style.height = "56px";
            e.rowElement.style.borderBottom = "1px solid #f1f5f9";
            e.rowElement.style.transition = "background-color 0.2s";
          }
          if (e.rowType === "header") {
            e.rowElement.style.backgroundColor = "#f8fafc";
            e.rowElement.style.borderBottom = "1px solid #e2e8f0";
          }
        }}
        // Cell бүрийн фонтыг тохируулах
        onCellPrepared={(e: any) => {
          if (e.rowType === "data") {
            e.cellElement.style.padding = "0 16px";
            e.cellElement.style.fontSize = "14px";
            e.cellElement.style.color = "#1e293b";
            e.cellElement.style.verticalAlign = "middle";
            e.cellElement.style.fontFamily = "inherit";
          }
        }}
      >
        <Scrolling mode="virtual" />
        <LoadPanel enabled={false} />
        
        {columns.map((col: any) => (
          <Column 
            key={col.dataField} 
            {...col} 
            headerCellRender={(data: any) => (
              <div style={{
                color: "#64748b",
                fontSize: "11px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                padding: "12px 0"
              }}>
                {data.column.caption}
              </div>
            )}
          />
        ))}

        <Paging defaultPageSize={10} />
        <Pager 
          showInfo={true} 
          infoText="Нийт {2}" 
          visible={true}
          elementAttr={{ 
            style: "padding: 15px; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 12px;" 
          }}
        />
      </DataGrid>

      {/* Зөвхөн DevExtreme-ийн устгах боломжгүй default хүрээнүүдийг арилгах жижиг блок */}
      <style dangerouslySetInnerHTML={{ __html: `
        .dx-datagrid-headers { border-bottom: none !important; }
        .dx-datagrid-focus-overlay { display: none !important; }
        .dx-datagrid-table .dx-row > td { border-bottom: none !important; }
      `}} />
    </div>
  );
};