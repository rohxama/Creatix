import React from "react";
import { Pressable, type PressableProps, ActivityIndicator } from "react-native";
import { Text } from "@/components/ui/Text";
import { cn } from "@/utils/cn";

interface ButtonProps extends PressableProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: string;
}

const buttonVariants = {
  primary: "bg-primary-600 active:bg-primary-700",
  secondary: "bg-secondary-100 active:bg-secondary-200",
  outline: "border border-border bg-transparent active:bg-muted",
  ghost: "bg-transparent active:bg-muted",
  destructive: "bg-destructive active:bg-destructive/90",
};

const buttonTextVariants = {
  primary: "text-white",
  secondary: "text-primary-900",
  outline: "text-foreground",
  ghost: "text-foreground",
  destructive: "text-white",
};

const buttonSizes = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

const buttonTextSizes = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      className={cn(
        "flex-row items-center justify-center rounded-xl",
        buttonVariants[variant],
        buttonSizes[size],
        (disabled || isLoading) && "opacity-50",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? "#ffffff" : "#6b341a"}
        />
      ) : (
        <>
          {leftIcon && <>{leftIcon}</>}
          <Text
            className={cn(
              "font-semibold",
              buttonTextVariants[variant],
              buttonTextSizes[size],
              leftIcon && "ml-2",
              rightIcon && "mr-2"
            )}
          >
            {children}
          </Text>
          {rightIcon && <>{rightIcon}</>}
        </>
      )}
    </Pressable>
  );
}