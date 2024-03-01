import {
  INVADERS_PER_ROW,
  INVADER_NUM_ROWS,
  PADDED_INVADERS_PER_ROW,
} from "@/constants";

export const fillGridNTimes = (numCells: number, grid: boolean[][]) => {
  let n = numCells;
  let filledGrid = grid;

  for (let i = 0; i < INVADER_NUM_ROWS; i++) {
    for (let j = 0; j < INVADERS_PER_ROW; j++) {
      if (n !== 0) {
        filledGrid[i][j] = true;
        n--;
      } else return filledGrid;
    }
  }
};

export const padGridNSpaces = (numSpaces: number, grid: boolean[][]) => {
  let paddedGrid = grid;

  const invaderXPadding = Array.from<boolean>({ length: numSpaces }).fill(
    false
  );
  const invaderTopPadding = Array.from<boolean>({
    length: PADDED_INVADERS_PER_ROW,
  }).fill(false);

  for (let i = 0; i < paddedGrid.length; i++) {
    paddedGrid[i] = [...invaderXPadding, ...paddedGrid[i], ...invaderXPadding];
  }

  return [invaderTopPadding, ...paddedGrid];
};
