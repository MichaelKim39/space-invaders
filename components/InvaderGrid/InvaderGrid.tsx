import { View, Text } from "react-native";
import React from "react";
import { useInvaderGrid } from "@/hooks/useInvaderGrid";
import { Invader } from "@/components/Invader/";

type InvaderGridProps = {
  invaderGrid: boolean[][];
};

export const InvaderGrid = ({ invaderGrid }: InvaderGridProps) => {
  return (
    <View>
      {invaderGrid.map((invaderRow, row) => {
        return (
          <View key={`invader-row-${row}`}>
            {invaderRow.map(
              (invader, col) =>
                invader && (
                  <Invader col={col} row={row} key={`invader-col-${col}`} />
                )
            )}
          </View>
        );
      })}
    </View>
  );
};
