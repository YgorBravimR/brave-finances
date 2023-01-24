import { createTheme } from '@mui/material/styles';

export const defaultTheme = {
  colors: {
    light: {
      primary: '#026773',
      primaryLight: '#3CA6A6',
      primaryDark: '#024959',
      primaryDarker: '#012E40',
      secondary: '#F2E3D5',
      secondaryDark: '#B3A79D',
      secondaryLight: '#FFEFE0',
      transfer: '#2296f3',
      income: '#4caf50',
      outcome: '#f44336',
      creditCard: '#F2B13F',
      background: '#fafafa',
      textColor: '#121212',
      textLightColor: '#757575',
    },
  },
};

const createPaletteColor = (defaultTheme: any) => {
  const colorLight = defaultTheme.colors.light

  const themeObj: any = {}

  Object.keys(colorLight).forEach((item) => {
    themeObj[item] = {
      main: colorLight[item]
    }
  });

  return themeObj
}

export const theme = createTheme({
  palette: createPaletteColor(defaultTheme),
  typography: {
    fontFamily: ['Maven Pro', 'Source Sans Pro', 'sans-serif'].join(','),
    fontSize: 14,
  },
});
export default theme;
