"use client";
import { useState } from "react";

export const SpanToggleSeeMore = ({
  text,
  overflow_limit,
}: {
  text: string;
  overflow_limit: number;
}) => {
  const [seeMore, setSeeMore] = useState(false);

  const toggle = () => {
    setSeeMore(!seeMore);
  };

  return (
    <span onClick={toggle}>
      {!seeMore ? (
        <>
          {`${text.substring(0, overflow_limit)}... `}
          <b>see more</b>
        </>
      ) : (
        text
      )}
    </span>
  );
};
