import { SafeAreaView, StyleSheet } from "react-native";
import { useGame } from "./hooks/useGame";
import { Player } from "./components/Player";
import React from "react";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

export default function App() {
  const { isGameRunning, setGameRunning } = useGame();

  return (
    <GestureHandlerRootView style={styles.container}>
      <Player />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
});
