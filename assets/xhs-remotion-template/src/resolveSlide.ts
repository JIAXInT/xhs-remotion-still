import { CoverSlide } from "./slides/CoverSlide";
import { ListSlide } from "./slides/ListSlide";
import { HookSlide } from "./slides/HookSlide";
import { QuoteSlide } from "./slides/QuoteSlide";
import { StepsSlide } from "./slides/StepsSlide";
import { CompareSlide } from "./slides/CompareSlide";
import { SimpleTextSlide } from "./slides/SimpleTextSlide";
import { PointsSlide } from "./slides/PointsSlide";

const REGISTRY: Record<string, any> = {
  COVER: CoverSlide,
  LIST: ListSlide,
  HOOK: HookSlide,
  QUOTE: QuoteSlide,
  STEPS: StepsSlide,
  COMPARE: CompareSlide,
  POINTS: PointsSlide,
  SIMPLE: SimpleTextSlide
};

export const resolveSlideComponent = (slide: any) => {
  const explicit = slide.type && slide.type !== "AUTO" ? REGISTRY[slide.type] : null;
  if (explicit) return explicit;

  // Auto matching rules (by content fields)
  if (slide.metrics && Array.isArray(slide.title)) return CoverSlide;
  if (slide.cards) return HookSlide;
  if (slide.left && slide.right) return CompareSlide;
  if (slide.steps) return StepsSlide;
  if (slide.quote) return QuoteSlide;
  if (slide.items && (slide.summary?.highlight || slide.summary?.desc)) return PointsSlide;
  if (slide.items) return ListSlide;
  return SimpleTextSlide;
};
