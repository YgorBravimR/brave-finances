import { createTheme } from '@mui/material/styles';

// const white = "#FFFFFF";
const background = '#fafafa';
const mybillsPrimary = '#0c0c0c';
const mybillsSecondary = '#e8bd70';
const mybillsThird = '#edd185';
const mybillsLightBlue = '#2296f3';
const mybillsIncomeGreen = '#4caf50';
const mybillsOutcomeRed = '#f44336';
const mybillsCreditCardGreen = '#00796b';
const text = '#121212';
const textLight = '#757575';

export const theme = createTheme({
  palette: {
    primary: {
      main: mybillsPrimary,
    },
    secondary: {
      main: mybillsSecondary
    },
    third: {
      main: mybillsThird
    },
    outcome: {
      main: mybillsOutcomeRed
    },
    income: {
      main: mybillsIncomeGreen
    },
    creditCard: {
      main: mybillsCreditCardGreen
    },
    lightBlue: {
      main: mybillsLightBlue
    },
    background:{
      default: background
    }

  },
  typography: {
    fontFamily: ['Maven Pro', 'Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 14,
  },
});
export default theme;
