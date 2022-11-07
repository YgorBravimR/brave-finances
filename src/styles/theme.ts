import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6514dd",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    common: {},
  },
  typography: {
    fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});
export default theme;
