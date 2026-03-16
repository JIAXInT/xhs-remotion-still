import React from "react";
import { SlideLayout } from "../SlideLayout";

export const HookSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h2
          style={{
            fontSize: 64,
            fontWeight: 900,
            margin: "0 0 36px",
            lineHeight: 1.2
          }}
        >
          {data.title}
          <span
            style={{
              background: data.theme?.dark || "#111",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: 18,
              marginLeft: 12,
              display: "inline-block",
              transform: "rotate(-2deg)"
            }}
          >
            {data.highlightTitle}
          </span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: 36,
              padding: 40,
              border: "1px solid #EEF0F3",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "#9CA3AF" }}>
              {data.cards?.[0]?.label}
            </div>
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.3 }}>
              {data.cards?.[0]?.text}
            </div>
          </div>

          <div
            style={{
              background: data.theme?.dark || "#111",
              color: "#fff",
              borderRadius: 36,
              padding: 40,
              boxShadow: "0 16px 40px rgba(0,0,0,0.22)"
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: data.theme?.primary || "#00C48C"
              }}
            >
              {data.cards?.[1]?.label}
            </div>
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.3 }}>
              {data.cards?.[1]?.text}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: 999,
              padding: "14px 40px",
              fontSize: 26,
              color: "#6B7280",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
            }}
          >
            <span>💬</span>
            {data.cta}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};
