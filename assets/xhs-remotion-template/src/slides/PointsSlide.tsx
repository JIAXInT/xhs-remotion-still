import React from "react";
import { SlideLayout } from "../SlideLayout";
import { PointCard } from "../components/PointCard";
import { SummaryBox } from "../components/SummaryBox";

export const PointsSlide: React.FC<{ data: any }> = ({ data }) => {
  return (
    <SlideLayout tag={data.tag} page={data.page} theme={data.theme}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <h2 style={{ fontSize: 64, fontWeight: 900, margin: "0 0 36px" }}>
          {data.title}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {data.items?.map((item: any, i: number) => (
            <PointCard key={i} icon={item.icon} text={item.text} />
          ))}
        </div>

        {data.summary ? (
          <SummaryBox
            label={data.summary.label || data.summary.title || "总结"}
            highlight={data.summary.highlight || data.summary.text}
            desc={data.summary.desc}
          />
        ) : null}
      </div>
    </SlideLayout>
  );
};
