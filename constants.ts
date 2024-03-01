import { getXPosFromPercentage } from "@/utils/position";
import { Dimensions } from "react-native";
import { fillGridNTimes, padGridNSpaces } from "@/utils/grid";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const FRAME_INTERVAL = 2000;

export const PLAYER_WIDTH = 80;
export const PLAYER_START_POS = getXPosFromPercentage(50) - PLAYER_WIDTH / 2;

export const INVADER_GAP = 10;
export const INVADERS_PER_ROW = 5;
export const INVADER_NUM_ROWS = 5;
export const INVADER_PADDING = 2;
export const PADDED_INVADERS_PER_ROW = INVADERS_PER_ROW + INVADER_PADDING * 2;
export const PADDED_INVADER_NUM_ROWS = INVADER_NUM_ROWS + 1;
export const INVADER_NUM = 10;
export const INVADER_WIDTH =
  windowWidth / PADDED_INVADERS_PER_ROW - INVADER_GAP;
export const INVADER_HEIGHT =
  windowHeight / PADDED_INVADER_NUM_ROWS - INVADER_GAP;

const EMPTY_INVADERS_GRID = Array.from<boolean>({
  length: INVADER_NUM_ROWS,
}).map(() => Array.from<boolean>({ length: INVADERS_PER_ROW }).fill(false));

export const INITIAL_INVADERS_GRID = padGridNSpaces(
  INVADER_PADDING,
  fillGridNTimes(INVADER_NUM, EMPTY_INVADERS_GRID)
);
