// Common constants for the MVP application

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
} as const;

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32
} as const;

export const FONT_WEIGHTS = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700"
} as const;

export const BORDER_RADIUS = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999
} as const;

export const SHADOWS = {
  sm: {
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  md: {
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8
  }
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500
} as const;

export const HIT_SLOP = {
  sm: {top: 8, bottom: 8, left: 8, right: 8},
  md: {top: 12, bottom: 12, left: 12, right: 12},
  lg: {top: 16, bottom: 16, left: 16, right: 16}
} as const;

export const LAYOUT = {
  headerHeight: 60,
  tabBarHeight: 70,
  tabBarHeightIOS: 88,
  statusBarHeight: 24
} as const;

export const BREAKPOINTS = {
  sm: 375,
  md: 768,
  lg: 1024
} as const;
