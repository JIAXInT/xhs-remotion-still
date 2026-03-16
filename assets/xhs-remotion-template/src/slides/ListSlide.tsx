import React from "react";
import { SlideLayout } from "../SlideLayout";

export const ListSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h2 style={{ fontSize: 64, fontWeight: 900, margin: "0 0 48px" }}>
          {data.title}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {data.items?.map((item: any, i: number) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                borderRadius: 32,
                padding: "28px 32px",
                border: "1px solid #EEF0F3",
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                display: "flex",
                alignItems: "flex-start",
                gap: 20
              }}
            >
              <div style={{ fontSize: 32 }}>{item.icon}</div>
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 600,
                  lineHeight: 1.4,
                  whiteSpace: "pre-wrap"
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            background: "linear-gradient(90deg, #EEF2FF 0%, #FFFFFF 60%)",
            borderLeft: `10px solid ${data.theme?.accent || "#7C3AED"}`,
            borderRadius: 20,
            padding: "24px 28px",
            fontSize: 30
          }}
        >
          <strong>{data.summary?.title}</strong>{" "}
          <span
            style={{
              background: "#E0E7FF",
              color: data.theme?.accent || "#7C3AED",
              padding: "4px 10px",
              borderRadius: 8,
              marginLeft: 8
            }}
          >
            {data.summary?.text}
          </span>
        </div>
      </div>
    </SlideLayout>
  );
};
