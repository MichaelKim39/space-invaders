import React from "react";
import { StyleSheet, View } from "react-native";
import { PLAYER_INITIAL_POS, PLAYER_WIDTH } from "../../constants";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export const Player = () => {
  const playerPosition = useSharedValue(PLAYER_INITIAL_POS);

  const panGestureEvent = Gesture.Pan().onUpdate((e) => {
    playerPosition.value = e.absoluteX - PLAYER_WIDTH / 2;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: playerPosition.value }],
  }));

  return (
    <GestureDetector gesture={panGestureEvent}>
      <Animated.View style={[styles.player, animatedStyle]} />
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  player: {
    position: "absolute",
    bottom: 40,
    height: 30,
    width: PLAYER_WIDTH,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
});
