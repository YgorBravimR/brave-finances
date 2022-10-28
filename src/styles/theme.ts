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
});
export default theme;
