/**
 * Creatix Cafe Design System - Color Palette
 * 
 * Warm, elegant, welcoming coffee-inspired colors
 * Inspired by Starbucks, Blue Bottle Coffee, Blank Street Coffee
 */

export const palette = {
  // Coffee Browns
  coffee: {
    50: "#faf6f1",
    100: "#f2e8d9",
    200: "#e5ceb0",
    300: "#d5ae80",
    400: "#c89058",
    500: "#bc7a3f",
    600: "#a86334",
    700: "#8c4d2d",
    800: "#73402a",
    900: "#5f3626",
    950: "#351b13",
  },

  // Warm Browns (Primary)
  warmBrown: {
    50: "#fdf8f3",
    100: "#f9edd9",
    200: "#f2d7b0",
    300: "#e9bb7d",
    400: "#df9748",
    500: "#d77c26",
    600: "#c8641c",
    700: "#a64d19",
    800: "#853e1c",
    900: "#6b341a",
    950: "#3a190b",
  },

  // Cream/Ivory
  cream: {
    50: "#fefcf7",
    100: "#fdf6e8",
    200: "#faeccf",
    300: "#f6ddad",
    400: "#f0c87f",
    500: "#eab45c",
    600: "#dc9a37",
    700: "#b87c2b",
    800: "#946329",
    900: "#785126",
    950: "#412a12",
  },

  // Sage Green (Accent)
  sage: {
    50: "#f4f7f4",
    100: "#e4ebe4",
    200: "#c9d7c9",
    300: "#a3b9a3",
    400: "#7a9a7a",
    500: "#5a7d5a",
    600: "#466346",
    700: "#3a5039",
    800: "#30412f",
    900: "#283628",
    950: "#141d14",
  },

  // Terracotta (Warm Accent)
  terracotta: {
    50: "#fdf4f0",
    100: "#fce6db",
    200: "#f9ccb6",
    300: "#f4a885",
    400: "#ed7c4d",
    500: "#e55d2a",
    600: "#d4451f",
    700: "#b0351b",
    800: "#8d2d1c",
    900: "#72281b",
    950: "#3d110b",
  },

  // Neutrals
  neutral: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09",
  },

  // Semantic Colors
  white: "#ffffff",
  black: "#000000",
  transparent: "transparent",
} as const;

export type PaletteColor = keyof typeof palette;
export type PaletteShade = keyof typeof palette.coffee;