import { StyleSheet } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useGame } from "@/hooks/useGame";
import { Player } from "@/components/Player";
import { InvaderGrid } from "./components/InvaderGrid";

export default function App() {
  const { isGameRunning, setGameRunning, invaderGrid } = useGame();

  return (
    <GestureHandlerRootView style={styles.container}>
      <InvaderGrid invaderGrid={invaderGrid} />
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
