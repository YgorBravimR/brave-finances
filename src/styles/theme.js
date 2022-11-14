import { createTheme } from "@mui/material/styles";

const mybillsMainPurple = "#6514dd";
const mybillsLightBlue = "#2296f3";
const mybillsIncome = "#4caf50";
const mybillsOutcome = "#f44336";
const mybillsCreditCard = "#00796b";

export const theme = createTheme({
  palette: {
    primary: {
      main: mybillsMainPurple,
    },
    common: {
      purple: mybillsMainPurple,
      lightBlue: mybillsLightBlue,
      income: mybillsIncome,
      outcome: mybillsOutcome,
      creditCard: mybillsCreditCard,
    },
  },
  typography: {
    fontFamily: ["Maven Pro", "Source Sans Pro", "sans-serif"].join(","),
    fontSize: 14,
  },
});
export default theme;
