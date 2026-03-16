import React from "react";
import { SlideLayout } from "../SlideLayout";

export const CoverSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1
            style={{
              fontSize: 120,
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: -2,
              margin: 0
            }}
          >
            {data.title?.[0]}
            <br />
            <span
              style={{
                background: "#FFFFFF",
                padding: "12px 28px",
                borderRadius: 36,
                border: "1px solid #EEF0F3",
                display: "inline-block",
                marginTop: 18,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
              }}
            >
              {data.title?.[1]}
            </span>
          </h1>

          <p
            style={{
              marginTop: 40,
              fontSize: 40,
              color: "#6B7280",
              borderLeft: `10px solid ${data.theme?.primary || "#00C48C"}`,
              paddingLeft: 24,
              whiteSpace: "pre-wrap"
            }}
          >
            {data.subtitle}
          </p>
        </div>

        <div
          style={{
            height: 160,
            borderTop: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            gap: 40,
            paddingTop: 24
          }}
        >
          {data.metrics?.map((m: any) => (
            <div
              key={m.label}
              style={{
                borderLeft: m.highlight
                  ? `6px solid ${data.theme?.primary || "#00C48C"}`
                  : "6px solid transparent",
                paddingLeft: 16
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 700, color: "#9CA3AF" }}>
                {m.label}
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: m.highlight ? data.theme?.primary || "#00C48C" : "#111"
                }}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
};
