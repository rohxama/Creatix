/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // Colors - Light Mode (CSS Variables)
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          light: "hsl(var(--secondary-light))",
          dark: "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--secondary-foreground))",
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          light: "hsl(var(--accent-light))",
          dark: "hsl(var(--accent-dark))",
          foreground: "hsl(var(--accent-foreground))",
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

        // Coffee Colors
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

        // Cream Colors
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

        // Terracotta Colors
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

        // Background Colors
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          tertiary: "hsl(var(--background-tertiary))",
        },

        // Surface Colors
        surface: {
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
          sunken: "hsl(var(--surface-sunken))",
        },

        // Card Colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          border: "hsl(var(--card-border))",
        },

        // Border Colors
        border: {
          DEFAULT: "hsl(var(--border))",
          light: "hsl(var(--border-light))",
          dark: "hsl(var(--border-dark))",
          focus: "hsl(var(--border-focus))",
        },

        // Text Colors
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          tertiary: "hsl(var(--text-tertiary))",
          inverse: "hsl(var(--text-inverse))",
          disabled: "hsl(var(--text-disabled))",
          link: "hsl(var(--text-link))",
        },

        // Foreground
        foreground: "hsl(var(--foreground))",

        // Muted
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Input Colors
        input: {
          DEFAULT: "hsl(var(--input))",
          border: "hsl(var(--input-border))",
          "border-focus": "hsl(var(--input-border-focus))",
          "border-error": "hsl(var(--input-border-error))",
          "border-success": "hsl(var(--input-border-success))",
          placeholder: "hsl(var(--input-placeholder))",
        },

        // Tab Bar
        tabBar: {
          DEFAULT: "hsl(var(--tab-bar))",
          border: "hsl(var(--tab-bar-border))",
          active: "hsl(var(--tab-bar-active))",
          inactive: "hsl(var(--tab-bar-inactive))",
        },

        // Semantic Colors
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          light: "hsl(var(--success-light))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          light: "hsl(var(--warning-light))",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          light: "hsl(var(--error-light))",
          foreground: "hsl(var(--error-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          light: "hsl(var(--info-light))",
          foreground: "hsl(var(--info-foreground))",
        },

        // Overlay
        overlay: {
          DEFAULT: "hsl(var(--overlay))",
          light: "hsl(var(--overlay-light))",
          dark: "hsl(var(--overlay-dark))",
        },
      },

      // Typography
      fontFamily: {
        sans: ["Poppins_400Regular", "Poppins_500Medium", "Poppins_600SemiBold", "Poppins_700Bold"],
        pacifico: ["Pacifico_400Regular"],
        poppins: {
          light: ["Poppins_300Light"],
          regular: ["Poppins_400Regular"],
          medium: ["Poppins_500Medium"],
          semiBold: ["Poppins_600SemiBold"],
          bold: ["Poppins_700Bold"],
        },
      },

      fontSize: {
        // Display (Pacifico)
        "display-lg": ["48px", { lineHeight: "57.6px", letterSpacing: "-0.05em" }],
        "display-md": ["40px", { lineHeight: "48px", letterSpacing: "-0.05em" }],
        "display-sm": ["32px", { lineHeight: "38.4px", letterSpacing: "-0.025em" }],

        // Headings (Poppins Bold)
        "h1": ["32px", { lineHeight: "38.4px", letterSpacing: "-0.025em" }],
        "h2": ["28px", { lineHeight: "33.6px", letterSpacing: "-0.025em" }],
        "h3": ["24px", { lineHeight: "31.2px", letterSpacing: "0" }],
        "h4": ["20px", { lineHeight: "26px", letterSpacing: "0" }],

        // Titles (Poppins SemiBold)
        "title-lg": ["18px", { lineHeight: "23.4px", letterSpacing: "0" }],
        "title-md": ["16px", { lineHeight: "20.8px", letterSpacing: "0" }],
        "title-sm": ["14px", { lineHeight: "18.2px", letterSpacing: "0" }],

        // Subtitles (Poppins Medium)
        "subtitle-lg": ["16px", { lineHeight: "24px", letterSpacing: "0" }],
        "subtitle-md": ["14px", { lineHeight: "21px", letterSpacing: "0" }],
        "subtitle-sm": ["12px", { lineHeight: "18px", letterSpacing: "0.025em" }],

        // Body (Poppins Regular)
        "body-lg": ["16px", { lineHeight: "24px", letterSpacing: "0" }],
        "body-md": ["14px", { lineHeight: "21px", letterSpacing: "0" }],
        "body-sm": ["12px", { lineHeight: "18px", letterSpacing: "0.025em" }],

        // Caption (Poppins Regular)
        "caption-lg": ["12px", { lineHeight: "18px", letterSpacing: "0.025em" }],
        "caption-md": ["11px", { lineHeight: "16.5px", letterSpacing: "0.025em" }],
        "caption-sm": ["10px", { lineHeight: "15px", letterSpacing: "0.05em" }],

        // Button (Poppins SemiBold)
        "button-lg": ["16px", { lineHeight: "19.2px", letterSpacing: "0.025em" }],
        "button-md": ["14px", { lineHeight: "16.8px", letterSpacing: "0.025em" }],
        "button-sm": ["12px", { lineHeight: "14.4px", letterSpacing: "0.05em" }],

        // Label (Poppins Medium)
        "label-lg": ["14px", { lineHeight: "21px", letterSpacing: "0.025em" }],
        "label-md": ["12px", { lineHeight: "18px", letterSpacing: "0.025em" }],
        "label-sm": ["10px", { lineHeight: "15px", letterSpacing: "0.05em" }],
      },

      // Spacing
      spacing: {
        0: "0px",
        0.5: "2px",
        1: "4px",
        1.5: "6px",
        2: "8px",
        2.5: "10px",
        3: "12px",
        3.5: "14px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        14: "56px",
        16: "64px",
        20: "80px",
        24: "96px",
        28: "112px",
        32: "128px",
        36: "144px",
        40: "160px",
        44: "176px",
        48: "192px",
        52: "208px",
        56: "224px",
        60: "240px",
        64: "256px",
        72: "288px",
        80: "320px",
        96: "384px",
      },

      // Border Radius
      borderRadius: {
        none: "0px",
        sm: "6px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        full: "9999px",
      },

      // Shadows
      boxShadow: {
        "card": "0 2px 8px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 4px 12px rgba(0, 0, 0, 0.12)",
        "card-pressed": "0 1px 4px rgba(0, 0, 0, 0.05)",
        "button": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "button-hover": "0 4px 8px rgba(0, 0, 0, 0.15)",
        "button-pressed": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "fab": "0 4px 12px rgba(0, 0, 0, 0.2)",
        "fab-hover": "0 8px 16px rgba(0, 0, 0, 0.25)",
        "bottom-sheet": "0 -4px 16px rgba(0, 0, 0, 0.15)",
        "modal": "0 16px 32px rgba(0, 0, 0, 0.25)",
        "input": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "input-focus": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "chip": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "header": "0 2px 4px rgba(0, 0, 0, 0.08)",
      },

      // Animation
      transitionDuration: {
        instant: "100ms",
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
        slower: "500ms",
      },

      // Touch Targets (Accessibility)
      minWidth: {
        touch: "44px",
        "touch-lg": "48px",
      },
      minHeight: {
        touch: "44px",
        "touch-lg": "48px",
      },
    },
  },
  plugins: [],
};