import { INITIAL_INVADERS_GRID } from "@/constants";
import { useState } from "react";

export const useInvaderGrid = () => {
  // Grid represented by 2D array of booleans (true implies invader exists)
  const [isDirectionRight, setIsDirectionRight] = useState(true);
  const [invaderGrid, setInvaderGrid] = useState(INITIAL_INVADERS_GRID);

  return { invaderGrid, setInvaderGrid, isDirectionRight, setIsDirectionRight };
};
