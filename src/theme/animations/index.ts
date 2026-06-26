/**
 * Creatix Cafe Design System - Animation Guidelines
 * 
 * Smooth, delightful animations using Reanimated and Moti
 */

import { Easing } from "react-native-reanimated";

// Animation Durations
export const durations = {
  instant: 100,
  fast: 150,
  normal: 250,
  slow: 350,
  slower: 500,
} as const;

// Animation Easings
export const easings = {
  // Standard
  ease: Easing.bezier(0.25, 0.1, 0.25, 1),
  easeIn: Easing.bezier(0.42, 0, 1, 1),
  easeOut: Easing.bezier(0, 0, 0.58, 1),
  easeInOut: Easing.bezier(0.42, 0, 0.58, 1),

  // Bouncy
  bounceIn: Easing.bezier(0.68, -0.55, 0.265, 1.55),
  bounceOut: Easing.bezier(0.68, -0.55, 0.265, 1.55),

  // Elastic
  elastic: Easing.bezier(0.68, -0.55, 0.265, 1.55),

  // Smooth
  smooth: Easing.bezier(0.4, 0, 0.2, 1),
  smoothIn: Easing.bezier(0.4, 0, 1, 1),
  smoothOut: Easing.bezier(0, 0, 0.2, 1),
} as const;

// Animation Spring Configs
export const springs = {
  // Gentle spring
  gentle: {
    damping: 15,
    stiffness: 150,
    mass: 1,
  },

  // Bouncy spring
  bouncy: {
    damping: 12,
    stiffness: 200,
    mass: 0.8,
  },

  // Stiff spring
  stiff: {
    damping: 20,
    stiffness: 300,
    mass: 1,
  },

  // Slow spring
  slow: {
    damping: 20,
    stiffness: 100,
    mass: 1,
  },

  // Quick spring
  quick: {
    damping: 25,
    stiffness: 400,
    mass: 0.8,
  },
} as const;

// Animation Presets
export const animations = {
  // Fade Animations
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: durations.normal,
    easing: easings.easeOut,
  },
  fadeOut: {
    from: { opacity: 1 },
    to: { opacity: 0 },
    duration: durations.normal,
    easing: easings.easeIn,
  },

  // Slide Animations
  slideInRight: {
    from: { transform: [{ translateX: 100 }] },
    to: { transform: [{ translateX: 0 }] },
    duration: durations.normal,
    easing: easings.easeOut,
  },
  slideInLeft: {
    from: { transform: [{ translateX: -100 }] },
    to: { transform: [{ translateX: 0 }] },
    duration: durations.normal,
    easing: easings.easeOut,
  },
  slideInUp: {
    from: { transform: [{ translateY: 100 }] },
    to: { transform: [{ translateY: 0 }] },
    duration: durations.normal,
    easing: easings.easeOut,
  },
  slideInDown: {
    from: { transform: [{ translateY: -100 }] },
    to: { transform: [{ translateY: 0 }] },
    duration: durations.normal,
    easing: easings.easeOut,
  },

  // Scale Animations
  scaleIn: {
    from: { transform: [{ scale: 0.9 }], opacity: 0 },
    to: { transform: [{ scale: 1 }], opacity: 1 },
    duration: durations.normal,
    easing: easings.easeOut,
  },
  scaleOut: {
    from: { transform: [{ scale: 1 }], opacity: 1 },
    to: { transform: [{ scale: 0.9 }], opacity: 0 },
    duration: durations.normal,
    easing: easings.easeIn,
  },

  // Bounce Animation
  bounce: {
    from: { transform: [{ scale: 1 }] },
    0.5: { transform: [{ scale: 1.1 }] },
    to: { transform: [{ scale: 1 }] },
    duration: durations.slower,
    easing: easings.bounceOut,
  },

  // Shake Animation
  shake: {
    0: { transform: [{ translateX: 0 }] },
    0.1: { transform: [{ translateX: -5 }] },
    0.2: { transform: [{ translateX: 5 }] },
    0.3: { transform: [{ translateX: -5 }] },
    0.4: { transform: [{ translateX: 5 }] },
    0.5: { transform: [{ translateX: 0 }] },
    duration: durations.slower,
  },

  // Pulse Animation
  pulse: {
    0: { opacity: 1 },
    0.5: { opacity: 0.5 },
    1: { opacity: 1 },
    duration: durations.slower,
  },

  // Skeleton Loading
  shimmer: {
    0: { opacity: 0.5 },
    0.5: { opacity: 1 },
    1: { opacity: 0.5 },
    duration: durations.slower,
  },
} as const;

// Screen Transition Configurations
export const screenTransitions = {
  // Default slide from right
  slideFromRight: {
    gestureDirection: "horizontal",
    transitionSpec: {
      open: {
        animation: "timing",
        config: {
          duration: durations.normal,
          easing: easings.easeOut,
        },
      },
      close: {
        animation: "timing",
        config: {
          duration: durations.normal,
          easing: easings.easeIn,
        },
      },
    },
    cardStyleInterpolator: ({ current, next, layouts }: any) => ({
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    }),
  },

  // Slide from bottom (for modals)
  slideFromBottom: {
    gestureDirection: "vertical",
    transitionSpec: {
      open: {
        animation: "timing",
        config: {
          duration: durations.slow,
          easing: easings.easeOut,
        },
      },
      close: {
        animation: "timing",
        config: {
          duration: durations.normal,
          easing: easings.easeIn,
        },
      },
    },
    cardStyleInterpolator: ({ current, layouts }: any) => ({
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    }),
  },

  // Fade through
  fadeThrough: {
    transitionSpec: {
      open: {
        animation: "timing",
        config: {
          duration: durations.normal,
          easing: easings.easeInOut,
        },
      },
      close: {
        animation: "timing",
        config: {
          duration: durations.normal,
          easing: easings.easeInOut,
        },
      },
    },
    cardStyleInterpolator: ({ current, next }: any) => ({
      cardStyle: {
        opacity: current.progress,
      },
      overlayStyle: {
        opacity: next
          ? next.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            })
          : 0,
      },
    }),
  },

  // Scale (for modals)
  scale: {
    transitionSpec: {
      open: {
        animation: "timing",
        config: {
          duration: durations.normal,
          easing: easings.easeOut,
        },
      },
      close: {
        animation: "timing",
        config: {
          duration: durations.fast,
          easing: easings.easeIn,
        },
      },
    },
    cardStyleInterpolator: ({ current }: any) => ({
      cardStyle: {
        opacity: current.progress,
        transform: [
          {
            scale: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0.9, 1],
            }),
          },
        ],
      },
    }),
  },
} as const;

// Pull-to-Refresh Configuration
export const pullToRefresh = {
  threshold: 80,
  spring: springs.gentle,
  durations: {
    refresh: durations.slower,
    hide: durations.normal,
  },
} as const;

export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
export type Spring = keyof typeof springs;
export type Animation = keyof typeof animations;
export type ScreenTransition = keyof typeof screenTransitions;