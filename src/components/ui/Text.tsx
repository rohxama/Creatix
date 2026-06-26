import React from "react";
import { Text as RNText, type TextProps } from "react-native";
import { cn } from "@/utils/cn";

interface CustomTextProps extends TextProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "bodySmall" | "caption" | "label";
  color?: "primary" | "secondary" | "muted" | "accent" | "destructive" | "foreground";
  font?: "regular" | "medium" | "semibold" | "bold" | "pacifico";
  align?: "left" | "center" | "right";
}

const textVariants = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  body: "text-base",
  bodySmall: "text-sm",
  caption: "text-xs",
  label: "text-sm",
};

const textColors = {
  primary: "text-primary-900",
  secondary: "text-secondary-600",
  muted: "text-muted-foreground",
  accent: "text-accent-600",
  destructive: "text-destructive",
  foreground: "text-foreground",
};

const textFonts = {
  regular: "font-sans",
  medium: "font-sans font-medium",
  semibold: "font-sans font-semibold",
  bold: "font-sans font-bold",
  pacifico: "font-pacifico",
};

export function Text({
  variant = "body",
  color = "foreground",
  font = "regular",
  align,
  className,
  children,
  ...props
}: CustomTextProps) {
  return (
    <RNText
      className={cn(
        textVariants[variant],
        textColors[color],
        textFonts[font],
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      {...props}
    >
      {children}
    </RNText>
  );
}