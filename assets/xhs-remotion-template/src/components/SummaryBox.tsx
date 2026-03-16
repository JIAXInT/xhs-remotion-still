import React from "react";

export const SummaryBox: React.FC<{
  label: string;
  highlight: string;
  desc?: string;
}> = ({ label, highlight, desc }) => {
  return (
    <div style={{ position: "relative", marginTop: 32 }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 12,
          background: "#5C67CF",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          zIndex: 2
        }}
      />
      <div
        style={{
          background: "#F6F7FE",
          borderRadius: 20,
          padding: "28px 28px 28px 56px",
          border: "1px solid #EBEFF8",
          position: "relative",
          zIndex: 1
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontWeight: 900,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 12,
            marginBottom: 18
          }}
        >
          <span style={{ color: "#0F172A" }}>{label}</span>
          <span
            style={{
              background: "#E2E6F9",
              color: "#5C67CF",
              padding: "6px 14px",
              borderRadius: 12
            }}
          >
            {highlight}
          </span>
        </div>
        {desc ? (
          <div
            style={{
              fontSize: 28,
              color: "#64748B",
              lineHeight: 1.7,
              whiteSpace: "pre-wrap",
              fontWeight: 600
            }}
          >
            {desc}
          </div>
        ) : null}
      </div>
    </div>
  );
};
