import { useEffect, useState } from "react";
import { FRAME_INTERVAL } from "@/constants";
import { useInvaderGrid } from "@/hooks/useInvaderGrid";

export const useGame = () => {
  const [isGameRunning, setGameRunning] = useState(true);
  const { invaderGrid, setInvaderGrid, isDirectionRight, setIsDirectionRight } =
    useInvaderGrid();

  const checkLoss = () => {
    console.log("CHECKING LOSS");

    if (invaderGrid.slice(-1)[0].some((invader) => invader === true))
      return true;

    return false;
  };

  const moveDownAndSwitchDirection = () => {
    let transformedGrid = invaderGrid;

    for (let i = transformedGrid.length - 1; i >= 0; i--) {
      for (let j = 0; j < transformedGrid[i].length; j++) {
        if (transformedGrid[i][j]) {
          transformedGrid[i + 1][j] = true;
          transformedGrid[i][j] = false;
        }
      }
    }

    setInvaderGrid(transformedGrid);
    setIsDirectionRight(!isDirectionRight);
    console.log("MOVED INVADERS DOWN AND SWITCH");
  };

  const moveInvadersRight = () => {
    let transformedGrid = invaderGrid;

    for (let i = transformedGrid.length - 1; i >= 0; i--) {
      // We've already checked the first and last element
      for (let j = transformedGrid[i].length - 1; j > 0; j--) {
        if (transformedGrid[i][j]) {
          transformedGrid[i][j + 1] = true;
          transformedGrid[i][j] = false;
        }
      }
    }

    setInvaderGrid(transformedGrid);
    console.log("MOVE INVADERS RIGHT");
  };

  const moveInvadersLeft = () => {
    let transformedGrid = invaderGrid;

    for (let i = transformedGrid.length - 1; i >= 0; i--) {
      // We've already checked the first and last element
      for (let j = 1; j < transformedGrid[i].length - 1; j++) {
        if (transformedGrid[i][j]) {
          transformedGrid[i][j - 1] = true;
          transformedGrid[i][j] = false;
        }
      }
    }

    setInvaderGrid(transformedGrid);
    console.log("MOVE INVADERS LEFT");
  };

  const moveInvaders = () => {
    const isWallDetected = invaderGrid.some(
      (row) => row[0] || row.slice(-1)[0]
    );

    if (isWallDetected) {
      moveDownAndSwitchDirection();
    } else {
      isDirectionRight ? moveInvadersRight() : moveInvadersLeft();
    }
  };

  useEffect(() => {
    if (isGameRunning) {
      const frameInterval = setInterval(() => {
        console.log("FRAME");
        if (checkLoss()) {
          console.log("GAME OVER");
          setGameRunning(false);
        } else {
          moveInvaders();
        }
      }, FRAME_INTERVAL);
      return () => clearInterval(frameInterval);
    }
  }, [isGameRunning]);

  return { isGameRunning, setGameRunning, invaderGrid };
};
