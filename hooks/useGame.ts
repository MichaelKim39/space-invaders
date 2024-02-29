import { useEffect, useState } from "react";
import { FRAME_INTERVAL } from "../constants";

export const useGame = () => {
  const [isGameRunning, setGameRunning] = useState(false);

  useEffect(() => {
    if (isGameRunning) {
      const frameInterval = setInterval(() => {
        // console.log("FRAME");
      }, FRAME_INTERVAL);
      return () => clearInterval(frameInterval);
    }
  }, [isGameRunning]);

  return { isGameRunning, setGameRunning };
};
