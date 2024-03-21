import { SpanToggleSeeMore } from "./span_toggle_see_more";

export const SpanSeeMore = ({ text }: { text: string }) => {
  const overflow_limit = 150;

  if (text.length <= overflow_limit) {
    return text;
  }

  return <SpanToggleSeeMore text={text} overflow_limit={overflow_limit} />;
};
