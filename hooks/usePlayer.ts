import { useState } from "react";
import { PLAYER_INITIAL_POS } from "../constants";

export const usePlayer = () => {
  const [playerPosition, setPlayerPosition] = useState(PLAYER_INITIAL_POS);

  return { playerPosition, setPlayerPosition };
};
