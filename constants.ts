import { getXPosFromPercentage } from "@/utils/position";
import { Dimensions } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export const FRAME_INTERVAL = 500;

export const PLAYER_WIDTH = 80;
export const PLAYER_START_POS = getXPosFromPercentage(50) - PLAYER_WIDTH / 2;

export const INVADER_GAP = 10;
export const INVADERS_PER_ROW = 5;
export const INVADER_NUM_ROWS = 5;
export const INVADER_WIDTH = windowWidth / INVADERS_PER_ROW - INVADER_GAP;
export const INVADER_HEIGHT = windowHeight / INVADER_NUM_ROWS - INVADER_GAP;
