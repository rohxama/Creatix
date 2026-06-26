import React from "react";
import { View, Pressable } from "react-native";
import { Text } from "@/components/ui/Text";
import { cn } from "@/utils/cn";

interface HeaderProps {
  title: string;
  subtitle?: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
  variant?: "default" | "large";
}

export function Header({
  title,
  subtitle,
  leftAction,
  rightAction,
  variant = "default",
}: HeaderProps) {
  if (variant === "large") {
    return (
      <View className="px-4 pb-4 pt-16">
        {leftAction && <View className="mb-4">{leftAction}</View>}
        <Text variant="h1" font="bold">
          {title}
        </Text>
        {subtitle && (
          <Text variant="body" color="muted" className="mt-1">
            {subtitle}
          </Text>
        )}
      </View>
    );
  }

  return (
    <View className="flex-row items-center justify-between px-4 pb-4 pt-16">
      <View className="flex-1">{leftAction}</View>
      <View className="flex-1 items-center">
        <Text variant="h4" font="semibold" align="center">
          {title}
        </Text>
        {subtitle && (
          <Text variant="caption" color="muted" align="center">
            {subtitle}
          </Text>
        )}
      </View>
      <View className="flex-1 items-end">{rightAction}</View>
    </View>
  );
}