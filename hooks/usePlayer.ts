import { useState } from "react";
import { PLAYER_START_POS } from "../constants";

export const usePlayer = () => {
  const [playerPosition, setPlayerPosition] = useState(PLAYER_START_POS);

  return { playerPosition, setPlayerPosition };
};
