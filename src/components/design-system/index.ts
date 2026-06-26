/**
 * Creatix Cafe Design System - Component Design Guidelines
 * 
 * Detailed specifications for all reusable components
 * This is a reference file for design decisions
 */

// =============================================================================
// BUTTONS
// =============================================================================

export const buttonDesign = {
  sizes: {
    sm: { height: 36, paddingHorizontal: 16, paddingVertical: 8 },
    md: { height: 48, paddingHorizontal: 24, paddingVertical: 12 },
    lg: { height: 52, paddingHorizontal: 32, paddingVertical: 16 },
  },
  borderRadius: 12,
  minWidth: 48,
  minHeight: 48,
} as const;

// =============================================================================
// INPUTS
// =============================================================================

export const inputDesign = {
  sizes: {
    sm: { height: 36, paddingHorizontal: 12 },
    md: { height: 48, paddingHorizontal: 16 },
    lg: { height: 52, paddingHorizontal: 20 },
  },
  borderRadius: 12,
  borderWidth: 1,
} as const;

// =============================================================================
// CARDS
// =============================================================================

export const cardDesign = {
  sizes: {
    sm: { padding: 12, borderRadius: 12 },
    md: { padding: 16, borderRadius: 16 },
    lg: { padding: 24, borderRadius: 20 },
  },
  shadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
} as const;

// =============================================================================
// CHIPS
// =============================================================================

export const chipDesign = {
  sizes: {
    sm: { height: 28, paddingHorizontal: 12 },
    md: { height: 36, paddingHorizontal: 16 },
    lg: { height: 44, paddingHorizontal: 20 },
  },
  borderRadius: 9999,
} as const;

// =============================================================================
// BADGES
// =============================================================================

export const badgeDesign = {
  sizes: {
    sm: { minWidth: 16, height: 16, paddingHorizontal: 4 },
    md: { minWidth: 20, height: 20, paddingHorizontal: 8 },
    lg: { minWidth: 24, height: 24, paddingHorizontal: 12 },
  },
  borderRadius: 9999,
} as const;

// =============================================================================
// NAVIGATION
// =============================================================================

export const navigationDesign = {
  bottomNav: { height: 64, paddingBottom: 8, paddingTop: 8 },
  topBar: { height: 56, paddingHorizontal: 16 },
  profileAvatar: { sm: 32, md: 40, lg: 56, xl: 80 },
} as const;

// =============================================================================
// BOTTOM SHEET
// =============================================================================

export const bottomSheetDesign = {
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  handleWidth: 40,
  handleHeight: 4,
} as const;

// =============================================================================
// MODAL
// =============================================================================

export const modalDesign = {
  borderRadius: 20,
  maxWidth: 400,
  width: "90%",
  padding: 24,
} as const;

// =============================================================================
// TOUCH TARGETS (ACCESSIBILITY)
// =============================================================================

export const touchTargets = {
  minimum: 44,
  recommended: 48,
  button: 48,
  icon: 44,
  input: 48,
  tab: 48,
  listItem: 56,
  fab: 56,
} as const;