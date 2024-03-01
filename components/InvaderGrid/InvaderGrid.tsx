import { View, Text } from "react-native";
import React from "react";
import { useInvaderGrid } from "@/hooks/useInvaderGrid";
import { Invader } from "@/components/Invader/";

export const InvaderGrid = () => {
  const { invaderGrid, setInvaderGrid } = useInvaderGrid();

  return (
    <View>
      {invaderGrid.map((invaderRow, row) => {
        return invaderRow.map(
          (invader, col) => invader && <Invader col={col} row={row} />
        );
      })}
    </View>
  );
};
