import React from "react";
import { SlideLayout } from "../SlideLayout";
import { TerminalBlock } from "../components/TerminalBlock";

export const TerminalSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h2 style={{ fontSize: 64, fontWeight: 900, margin: "0 0 24px" }}>{data.title}</h2>
        {data.subtitle ? (
          <div style={{ fontSize: 30, color: "#6B7280", marginBottom: 28, whiteSpace: "pre-wrap" }}>
            {data.subtitle}
          </div>
        ) : null}
        <TerminalBlock lines={data.lines || []} />
        {data.note ? (
          <div style={{ marginTop: "auto", fontSize: 26, color: "#6B7280" }}>{data.note}</div>
        ) : null}
      </div>
    </SlideLayout>
  );
};
