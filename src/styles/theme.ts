import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Raleway Variable', sans-serif`,
    body: `'IBM Plex Sans KR', sans-serif`,
  },
  breakpoints: {
    base: "0", // 0px
    sm: "480px", // ~480px. em is a relative unit and is dependant on the font size.
    md: "768px", // ~768px
    lg: "992px", // ~992px
    xl: "1280px", // ~1280px
    "2xl": "1536px", // ~1536px
  },
});

export default theme;
