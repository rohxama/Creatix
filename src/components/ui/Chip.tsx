import React from "react";
import { Pressable, type PressableProps, Text } from "react-native";
import { cn } from "@/utils/cn";

interface ChipProps extends PressableProps {
  label: string;
  selected?: boolean;
  variant?: "default" | "outlined";
}

export function Chip({
  label,
  selected = false,
  variant = "default",
  className,
  ...props
}: ChipProps) {
  return (
    <Pressable
      className={cn(
        "rounded-full px-4 py-2",
        variant === "default" && selected
          ? "bg-primary-600"
          : "bg-muted",
        variant === "outlined" && selected
          ? "border-2 border-primary-600"
          : "border border-border",
        className
      )}
      {...props}
    >
      <Text
        className={cn(
          "text-sm font-medium",
          selected ? "text-white" : "text-muted-foreground"
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}