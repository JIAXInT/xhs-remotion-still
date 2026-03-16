import React from "react";

export const PointCard: React.FC<{ icon: string; text: string }> = ({
  icon,
  text
}) => {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 24,
        padding: 32,
        boxShadow: "0 8px 30px rgba(0,0,0,0.03)",
        border: "1px solid #F1F5F9",
        display: "flex",
        alignItems: "flex-start",
        gap: 24
      }}
    >
      <div style={{ fontSize: 32, marginTop: 4, color: "#475569" }}>{icon}</div>
      <div
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: "#1F2937",
          lineHeight: 1.6,
          whiteSpace: "pre-wrap"
        }}
      >
        {text}
      </div>
    </div>
  );
};
