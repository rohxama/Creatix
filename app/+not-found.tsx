import React from "react";
import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-4">
        <Text variant="h2" font="bold">
          404
        </Text>
        <Text variant="body" color="muted" className="mt-2">
          This screen doesn't exist.
        </Text>
        <Link href="/" asChild>
          <Button className="mt-4">Go to Home</Button>
        </Link>
      </View>
    </>
  );
}