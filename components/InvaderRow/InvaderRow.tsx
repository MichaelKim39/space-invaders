import { View, StyleSheet } from "react-native";
import { INVADER_WIDTH } from "@/constants";
import { getXPosFromPercentage } from "@/utils/position";

export const InvaderRow = () => {
  return <View style={styles.invader} />;
};

const styles = StyleSheet.create({
  invader: {
    position: "absolute",
    left: getXPosFromPercentage(INVADER_WIDTH) - INVADER_WIDTH / 2,

    top: 40,
    height: 50,
    width: 50,
    backgroundColor: "#8df1c9",
    borderRadius: 20,
  },
});
