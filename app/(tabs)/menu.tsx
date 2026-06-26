import React from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/Text";
import { ScreenContainer } from "@/components/ui/ScreenContainer";

export default function MenuTab() {
  return (
    <ScreenContainer>
      <View className="flex-1 items-center justify-center">
        <Text variant="h3" font="semibold">
          Menu
        </Text>
        <Text variant="body" color="muted" className="mt-2">
          Browse our delicious offerings
        </Text>
      </View>
    </ScreenContainer>
  );
}