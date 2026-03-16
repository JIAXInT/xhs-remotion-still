import React from "react";
import { Still } from "remotion";
import { postData } from "../data/post";
import { CoverSlide } from "./slides/CoverSlide";
import { ListSlide } from "./slides/ListSlide";
import { HookSlide } from "./slides/HookSlide";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {postData.slides.map((slide: any, index: number) => {
        const Component =
          slide.type === "COVER"
            ? CoverSlide
            : slide.type === "LIST"
            ? ListSlide
            : HookSlide;

        return (
          <Still
            key={index}
            id={`Slide-${index + 1}`}
            component={Component}
            defaultProps={{ data: slide }}
            width={1080}
            height={1440}
          />
        );
      })}
    </>
  );
};
