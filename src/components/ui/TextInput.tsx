import React, { forwardRef } from "react";
import {
  TextInput as RNTextInput,
  type TextInputProps,
  View,
  Text,
} from "react-native";
import { cn } from "@/utils/cn";

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

export const TextInput = forwardRef<RNTextInput, CustomTextInputProps>(
  ({ label, error, leftIcon, rightIcon, containerClassName, className, ...props }, ref) => {
    return (
      <View className={cn("mb-4", containerClassName)}>
        {label && (
          <Text className="mb-2 text-sm font-medium text-foreground">
            {label}
          </Text>
        )}
        <View
          className={cn(
            "flex-row items-center rounded-xl border bg-card px-4 py-3",
            error ? "border-destructive" : "border-border",
            props.editable === false && "opacity-50"
          )}
        >
          {leftIcon && <View className="mr-3">{leftIcon}</View>}
          <RNTextInput
            ref={ref}
            className={cn("flex-1 text-base text-foreground", className)}
            placeholderTextColor="#737373"
            {...props}
          />
          {rightIcon && <View className="ml-3">{rightIcon}</View>}
        </View>
        {error && (
          <Text className="mt-1 text-xs text-destructive">{error}</Text>
        )}
      </View>
    );
  }
);

TextInput.displayName = "TextInput";