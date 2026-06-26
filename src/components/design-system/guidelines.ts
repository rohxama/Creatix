/**
 * Creatix Cafe Design System - Design Rules & Principles
 */

export const designRules = {
  spacing: {
    baseUnit: 4,
    minTouchTarget: 44,
    recommendedTouchTarget: 48,
    minInteractiveGap: 8,
    recommendedInteractiveGap: 12,
  },
  typography: {
    maxLineLength: 60,
    minFontSize: 10,
    maxFontSize: 48,
    pacificoUsage: ["display", "logo"],
    bodyWeight: "400",
    headingWeight: "700",
  },
  colors: {
    minContrastRatio: 4.5,
    largeTextContrastRatio: 3,
    avoidPureBlack: true,
    semanticColors: ["success", "warning", "error", "info"],
  },
  layout: {
    pagePadding: 20,
    sectionSpacing: 32,
    cardPadding: 16,
    cardRadius: 16,
    buttonRadius: 12,
    inputRadius: 12,
  },
  animation: {
    microDuration: 150,
    pageDuration: 250,
    modalDuration: 350,
    respectReducedMotion: true,
  },
  accessibility: {
    requireLabels: true,
    dynamicFonts: true,
    highContrast: true,
    screenReader: true,
    minTouchTarget: 44,
  },
  responsive: {
    breakpoints: {
      smallPhone: 320,
      largePhone: 414,
      tablet: 768,
      largeTablet: 1024,
    },
    maxContentWidth: 480,
  },
} as const;

export const designPrinciples = {
  warmth: {
    description: "Create a warm, welcoming feeling through color and typography",
    implementation: [
      "Use warm brown and cream color palette",
      "Apply rounded corners to all components",
      "Use soft shadows for depth",
      "Create cozy, inviting layouts",
    ],
  },
  elegance: {
    description: "Maintain elegance through minimal, clean design",
    implementation: [
      "Use generous white space",
      "Keep layouts simple and uncluttered",
      "Use consistent spacing and typography",
      "Avoid unnecessary decorative elements",
    ],
  },
  simplicity: {
    description: "Keep the interface simple and intuitive",
    implementation: [
      "Use clear visual hierarchy",
      "Minimize cognitive load",
      "Provide clear call-to-actions",
      "Use familiar patterns",
    ],
  },
  consistency: {
    description: "Maintain consistency across all screens",
    implementation: [
      "Use design tokens for all values",
      "Follow the component library",
      "Maintain consistent spacing",
      "Use consistent typography scale",
    ],
  },
  accessibility: {
    description: "Make the app accessible to all users",
    implementation: [
      "Support dynamic font sizes",
      "Ensure sufficient color contrast",
      "Provide accessibility labels",
      "Support screen readers",
    ],
  },
} as const;

export const uiRules = {
  general: [
    "Always use design tokens for colors, spacing, and typography",
    "Never use hardcoded values",
    "Follow the component library",
    "Test on multiple screen sizes",
    "Support both light and dark modes",
  ],
  buttons: [
    "Always use semantic button variants",
    "Ensure minimum touch target size (48px)",
    "Provide loading states for async actions",
    "Use proper disabled states",
  ],
  inputs: [
    "Always provide labels or placeholders",
    "Show clear error states",
    "Use proper keyboard types",
    "Support auto-fill and auto-correct",
  ],
  cards: [
    "Use consistent padding and radius",
    "Provide clear visual hierarchy",
    "Use proper image aspect ratios",
    "Add interaction states (pressed, hover)",
  ],
  navigation: [
    "Use clear visual indicators for active states",
    "Provide back navigation",
    "Use proper transitions between screens",
    "Maintain consistent navigation patterns",
  ],
} as const;

export const bestPractices = {
  development: [
    "Use TypeScript for type safety",
    "Follow the feature-first folder structure",
    "Implement proper error handling",
    "Use proper testing strategies",
  ],
  design: [
    "Use design tokens for all values",
    "Follow the typography scale",
    "Use consistent spacing",
    "Maintain visual hierarchy",
    "Support both light and dark modes",
  ],
  performance: [
    "Use lazy loading for screens",
    "Implement proper image caching",
    "Use FlatList for long lists",
    "Optimize animations for performance",
  ],
  accessibility: [
    "Provide accessibility labels",
    "Support dynamic font sizes",
    "Ensure sufficient color contrast",
    "Support screen readers",
  ],
} as const;