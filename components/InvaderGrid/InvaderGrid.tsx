import { View, Text } from "react-native";
import React from "react";
import { useInvaderGrid } from "@/hooks/useInvaderGrid";

export const InvaderGrid = () => {
  const { invaderGrid, setInvaderGrid } = useInvaderGrid();

  return (
    <View>
      {invaderGrid.map((invaderRow, col) => {
        return invaderRow.map((invader, row) => <Text>Invader</Text>);
      })}
    </View>
  );
};
