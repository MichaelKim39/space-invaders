import { INVADERS_PER_ROW, INVADER_NUM_ROWS } from "@/constants";
import { useState } from "react";

export const useInvaderGrid = () => {
  // Grid represented by 2D array of booleans (true implies invader exists)
  const [invaderGrid, setInvaderGrid] = useState(
    Array.from({ length: INVADER_NUM_ROWS }).map(() =>
      Array.from({ length: INVADERS_PER_ROW }).fill(true)
    )
  );

  return { invaderGrid, setInvaderGrid };
};
