import { getXPosFromPercentage } from "./utils/position";

export const FRAME_INTERVAL = 500;

export const PLAYER_WIDTH = 80;
export const PLAYER_INITIAL_POS = getXPosFromPercentage(50) - PLAYER_WIDTH / 2;
