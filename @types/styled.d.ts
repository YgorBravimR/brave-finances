import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      light: {
        primary: string,
        primaryLight: string,
        primaryDark: string,
        primaryDarker: string,
        secondary: string,
        secondaryDark: string,
        secondaryLight: string,
        transfer: string,
        income: string,
        outcome: string,
        creditCard: string,
        background: string,
        textColor: string,
        textLightColor: string,
      },
    }
  }
}
