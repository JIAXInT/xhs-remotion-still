import React from "react";

type TerminalLine =
  | { type: "comment"; text: string }
  | { type: "command"; text: string; prompt?: string }
  | { type: "empty" };

export const TerminalBlock: React.FC<{ lines: TerminalLine[] }> = ({ lines }) => {
  return (
    <div
      style={{
        background: "#12141C",
        borderRadius: 24,
        padding: 40,
        boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
        fontFamily:
          "JetBrains Mono, Fira Code, Menlo, Monaco, Consolas, monospace",
        width: "100%"
      }}
    >
      <div style={{ display: "flex", gap: 12, marginBottom: 32 }}>
        <div style={{ width: 16, height: 16, borderRadius: 999, background: "#FF5F56" }} />
        <div style={{ width: 16, height: 16, borderRadius: 999, background: "#FFBD2E" }} />
        <div style={{ width: 16, height: 16, borderRadius: 999, background: "#27C93F" }} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 26, lineHeight: 1.8, letterSpacing: 0.5 }}>
        {lines.map((line, index) => {
          if (line.type === "empty") return <div key={index} style={{ height: 24 }} />;
          if (line.type === "comment") {
            return (
              <div key={index} style={{ color: "#94A3B8" }}>
                {line.text}
              </div>
            );
          }
          if (line.type === "command") {
            return (
              <div key={index} style={{ display: "flex", gap: 16, color: "#E5E7EB" }}>
                <span style={{ color: "#3B82F6", fontWeight: 800 }}>{line.prompt || ">"}</span>
                <span>{line.text}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
