/* eslint-disable prettier/prettier */
const { colors, fonts } = require("../../config")

export const sharedPreferences = {
  fonts: fonts,
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "992px",
    lg: "1024px",
  },
  borderRadius: "0",
  pageWidth: "100%",
  headerHeight: "100px",
  footerHeight: "100px",
}

export const lightTheme = {
  ...sharedPreferences,
  colors: colors.lightTheme,
}

export const darkTheme = {
  ...sharedPreferences,
  colors: colors.darkTheme,
}
