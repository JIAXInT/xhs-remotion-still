import React from "react";
import { AbsoluteFill } from "remotion";

const defaultTheme = {
  primary: "#00C48C",
  bg: "#F8F9FA",
  text: "#1A1A1A",
  accent: "#7C3AED",
  dark: "#111111"
};

const GridBackground: React.FC<{ color?: string }> = ({ color = "#E5E7EB" }) => (
  <AbsoluteFill
    style={{
      backgroundColor: "transparent",
      backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px),\n        linear-gradient(to bottom, ${color} 1px, transparent 1px)` ,
      backgroundSize: "40px 40px",
      opacity: 0.6
    }}
  />
);

export const SlideLayout: React.FC<{
  tag?: string;
  page?: string;
  theme?: Partial<typeof defaultTheme>;
  children: React.ReactNode;
}> = ({ tag, page, theme, children }) => {
  const t = { ...defaultTheme, ...theme };
  return (
    <AbsoluteFill
      style={{
        backgroundColor: t.bg,
        color: t.text,
        fontFamily:
          "Inter, PingFang SC, Microsoft YaHei, Helvetica Neue, Arial, sans-serif",
        padding: 80,
        boxSizing: "border-box"
      }}
    >
      <GridBackground />

      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          zIndex: 2
        }}
      >
        {tag ? (
          <div
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              background: "#FFFFFF",
              color: t.accent,
              fontWeight: 800,
              fontSize: 20,
              border: "1px solid #EEF0F3",
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)"
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: t.primary,
                display: "inline-block"
              }}
            />
            {tag}
          </div>
        ) : (
          <div />
        )}
        {page ? (
          <div style={{ fontSize: 32, fontWeight: 900 }}>{page}</div>
        ) : null}
      </div>

      <div style={{ flex: 1, marginTop: 60, position: "relative", zIndex: 2 }}>
        {children}
      </div>
    </AbsoluteFill>
  );
};
