import { DefaultTheme } from 'react-native-paper'
import { Dimensions } from 'react-native';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,



  },
}
export const Colors = {
  primary: "#A47864",        // Brun chaud pour les actions principales
  secondary: "#6B9080",      // Vert sauge apaisant pour les accents
  light: "#F6F5F3",          // Blanc cassé subtil pour les arrière-plans légers
  gray: "#8D8D92",           // Gris doux pour les bordures et textes secondaires
  white: "#FFFFFF",          // Blanc pur pour le texte et les arrière-plans clairs
  black: "#2D2D34",          // Noir charbon pour les textes à fort contraste
  text: "#4F4A4B",           // Gris anthracite pour le texte principal
  error: "#D64550",          // Rouge terre cuite pour les erreurs et alertes
  backgroundColor: "#ECEBE7",// Beige doux pour les arrière-plans
  colorTiers: "#C7B198",     // Brun clair pour des tons neutres élégants
  colorTextTitles: "#E07A5F",// Orange terre cuite pour mettre en valeur les titres
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