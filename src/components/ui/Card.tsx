import React from "react";
import { View, type ViewProps, Pressable, type PressableProps } from "react-native";
import { cn } from "@/utils/cn";

interface CardProps extends ViewProps {
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  as?: typeof View | typeof Pressable;
}

const cardVariants = {
  default: "bg-card",
  elevated: "bg-card shadow-md",
  outlined: "bg-card border border-border",
};

const cardPadding = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export function Card({
  variant = "default",
  padding = "md",
  className,
  children,
  ...props
}: CardProps & { onPress?: PressableProps["onPress"] }) {
  return (
    <View
      className={cn(
        "rounded-2xl",
        cardVariants[variant],
        cardPadding[padding],
        className
      )}
      {...props}
    >
      {children}
    </View>
  );
}