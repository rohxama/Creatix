import React from "react";
import { ActivityIndicator, View, Text } from "react-native";
import { cn } from "@/utils/cn";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "small" as const,
  md: "large" as const,
  lg: "large" as const,
};

export function Loader({
  size = "md",
  color = "#6b341a",
  text,
  fullScreen = false,
  className,
}: LoaderProps) {
  if (fullScreen) {
    return (
      <View
        className={cn(
          "flex-1 items-center justify-center bg-background",
          className
        )}
      >
        <ActivityIndicator size={sizeMap[size]} color={color} />
        {text && (
          <Text className="mt-4 text-sm text-muted-foreground">{text}</Text>
        )}
      </View>
    );
  }

  return (
    <View className={cn("items-center justify-center py-4", className)}>
      <ActivityIndicator size={sizeMap[size]} color={color} />
      {text && (
        <Text className="mt-2 text-sm text-muted-foreground">{text}</Text>
      )}
    </View>
  );
}