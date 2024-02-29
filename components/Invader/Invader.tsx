import { View, StyleSheet } from "react-native";
import { getXPosFromPercentage } from "@/utils/position";
import { INVADER_WIDTH } from "@/constants";

export const Invader = () => {
  return <View style={styles.invader} />;
};

const styles = StyleSheet.create({
  invader: {
    position: "absolute",
    top: 40,
    height: INVADER_WIDTH,
    width: INVADER_WIDTH,
    backgroundColor: "#8df1c9",
    borderRadius: 20,
  },
});
