import React from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/Text";
import { ScreenContainer } from "@/components/ui/ScreenContainer";

export default function HomeTab() {
  return (
    <ScreenContainer>
      <View className="flex-1 items-center justify-center">
        <Text variant="h1" font="pacifico" color="primary">
          CafeApp
        </Text>
        <Text variant="body" color="muted" className="mt-4 text-center">
          Welcome to your favorite cafe
        </Text>
      </View>
    </ScreenContainer>
  );
}