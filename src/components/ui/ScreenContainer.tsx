import React from "react";
import { ScrollView, type ScrollViewProps, RefreshControl } from "react-native";
import { cn } from "@/utils/cn";

interface ScreenContainerProps extends ScrollViewProps {
  children: React.ReactNode;
  padding?: boolean;
  paddingX?: boolean;
  paddingY?: boolean;
  safeArea?: boolean;
  refreshControl?: React.ReactElement<any>;
  refreshing?: boolean;
  onRefresh?: () => void;
  keyboardShouldPersistTaps?: "never" | "always" | "handled";
}

export function ScreenContainer({
  children,
  padding = true,
  paddingX = true,
  paddingY = false,
  safeArea = true,
  refreshControl,
  refreshing,
  onRefresh,
  className,
  contentContainerClassName,
  ...props
}: ScreenContainerProps) {
  const refresh = onRefresh ? (
    <RefreshControl refreshing={refreshing ?? false} onRefresh={onRefresh} />
  ) : undefined;

  return (
    <ScrollView
      className={cn("flex-1 bg-background", className)}
      contentContainerClassName={cn(
        padding && "p-4",
        paddingX && "px-4",
        paddingY && "py-4",
        !padding && !paddingX && !paddingY && "p-0",
        contentContainerClassName
      )}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      refreshControl={refreshControl ?? refresh}
      {...props}
    >
      {children}
    </ScrollView>
  );
}