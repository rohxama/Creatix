import React from "react";
import { View as RNView, type ViewProps } from "react-native";
import { cn } from "@/utils/cn";

interface CustomViewProps extends ViewProps {
  row?: boolean;
  center?: boolean;
  justify?: "start" | "center" | "end" | "between" | "around";
  gap?: number;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export function View({
  row = false,
  center = false,
  justify,
  gap,
  padding,
  paddingHorizontal,
  paddingVertical,
  className,
  children,
  style,
  ...props
}: CustomViewProps) {
  const justifyClass = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  return (
    <RNView
      className={cn(
        row && "flex-row",
        center && "items-center",
        justify && justifyClass[justify],
        className
      )}
      style={[
        gap !== undefined && { gap },
        padding !== undefined && { padding },
        paddingHorizontal !== undefined && { paddingHorizontal },
        paddingVertical !== undefined && { paddingVertical },
        style,
      ]}
      {...props}
    >
      {children}
    </RNView>
  );
}