import React from "react";
import { View } from "react-native";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { ScreenContainer } from "@/components/ui/ScreenContainer";

export default function LoginScreen() {
  return (
    <ScreenContainer
      contentContainerClassName="flex-1 justify-center items-center"
    >
      <View className="items-center">
        <Text variant="h1" font="pacifico" color="primary">
          CafeApp
        </Text>
        <Text variant="body" color="muted" className="mt-4 text-center">
          Welcome back! Sign in to continue.
        </Text>

        <View className="mt-8 w-full gap-4">
          <Button onPress={() => {}}>
            Continue with Email
          </Button>
          <Button variant="outline" onPress={() => {}}>
            Continue with Google
          </Button>
        </View>

        <Text variant="caption" color="muted" className="mt-8 text-center">
          By continuing, you agree to our Terms of Service
        </Text>
      </View>
    </ScreenContainer>
  );
}