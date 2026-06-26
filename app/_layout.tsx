import "../global.css";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCustomFonts } from "@/hooks/useFonts";
import { Loader } from "@/components/ui/Loader";

export default function RootLayout() {
  const { fontsLoaded } = useCustomFonts();

  if (!fontsLoaded) {
    return <Loader fullScreen />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
