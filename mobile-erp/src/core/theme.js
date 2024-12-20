import { DefaultTheme } from 'react-native-paper'
import { Dimensions } from 'react-native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,



  },
}
export const Colors = {
  primary: "#1DA1F2",        // Bright green for main actions
  secondary: "#1426a9",      // Natural green for accents
  light: "#F2F2F2",          // Soft off-white for light backgrounds
  gray: "#4B4B4B",           // Neutral gray for borders and secondary text
  white: "#f4f4f9",          // Pure white for clean backgrounds or text
  black: "#3b3b3e",          // Dark tone for high-contrast text and elements
  text: "#111827",           // Vibrant red for critical or highlighted text
  error: "#e03f52",          // Bright red for error messages and alerts
  backgroundColor: "#eaeaf6",// Soothing blue for backgrounds related to tech
  colorTiers: "#b29690",
  colorTextTitles: "#FF5733",
  // Warm pastel for tier or status indicators
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle, lineHeight: 55 },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

export const units = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};