import { View, StyleSheet } from "react-native";
import { INVADER_GAP, INVADER_HEIGHT, INVADER_WIDTH } from "@/constants";

type InvaderProps = {
  col: number;
  row: number;
};

export const Invader = ({ col, row }: InvaderProps) => {
  // console.log(
  //   Math.floor(INVADER_WIDTH * col),
  //   Math.floor(INVADER_HEIGHT * row)
  // );

  return (
    !Number.isNaN(INVADER_HEIGHT) &&
    !Number.isNaN(INVADER_WIDTH) && (
      <View
        key={`${row}+${col}`}
        style={{
          ...styles.invader,
          top: Math.floor(
            INVADER_GAP / 2 + (INVADER_HEIGHT + INVADER_GAP) * row
          ),
          left: Math.floor(
            INVADER_GAP / 2 + (INVADER_WIDTH + INVADER_GAP) * col
          ),
        }}
      />
    )
  );
};

const styles = StyleSheet.create({
  invader: {
    position: "absolute",
    height: INVADER_HEIGHT,
    width: INVADER_WIDTH,
    backgroundColor: "#8df1c9",
    borderRadius: 20,
  },
});
