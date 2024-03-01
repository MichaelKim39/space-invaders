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
