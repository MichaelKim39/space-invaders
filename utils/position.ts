import { INVADERS_PER_ROW, INVADER_NUM_ROWS } from "@/constants";
import { Dimensions } from "react-native";

export const getXPosFromPercentage = (percentage: number) => {
  const windowWidth = Dimensions.get("window").width;
  return windowWidth * (percentage / 100);
};

export const getYPosFromPercentage = (percentage: number) => {
  const windowHeight = Dimensions.get("window").height;
  return windowHeight * (percentage / 100);
};

export const fillGridNTimes = (numCells: number, grid: boolean[][]) => {
  let n = numCells;
  let filledGrid = grid;

  for (let i = 0; i < INVADER_NUM_ROWS; i++) {
    for (let j = 0; j < INVADERS_PER_ROW; j++) {
      if (n !== 0) {
        filledGrid[j][i] = true;
        n--;
      } else return filledGrid;
    }
  }
};
