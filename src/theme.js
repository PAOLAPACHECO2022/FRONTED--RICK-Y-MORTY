import { theme } from "@chakra-ui/core";
// Adding custom colors
const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1d4044",
      800: "#234e52",
      700: "#285e61",
    },
  },
};
export default customTheme;


