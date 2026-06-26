import React from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/Text";
import { ScreenContainer } from "@/components/ui/ScreenContainer";

export default function ProfileTab() {
  return (
    <ScreenContainer>
      <View className="flex-1 items-center justify-center">
        <Text variant="h3" font="semibold">
          Profile
        </Text>
        <Text variant="body" color="muted" className="mt-2">
          Manage your account
        </Text>
      </View>
    </ScreenContainer>
  );
}