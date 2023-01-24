/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Palette,
  PaletteOptions,
  Theme,
  ThemeOptions
} from "@mui/material/styles";

interface ExtraPalette {
  primary: {
    main: string
  },
  primaryLight: {
    main: string
  },
  primaryDark: {
    main: string
  },
  primaryDarker: {
    main: string
  },
  secondary: {
    main: string
  },
  secondaryDark: {
    main: string
  },
  secondaryLight: {
    main: string
  },
  transfer: {
    main: string
  },
  income: {
    main: string
  },
  outcome: {
    main: string
  },
  creditCard: {
    main: string
  },
  background: {
    main: string
  },
  textColor: {
    main: string
  },
  textLightColor: {
    main: string
  },
}

// interface ExtraTheme {
//   foo: {
//     bar: boolean;
//   };
// }

declare module "@mui/material/styles/createPalette" {
  export interface Palette extends ExtraPalette { }
  export interface PaletteOptions extends ExtraPalette { }
}

declare module "@mui/material/styles" {
  interface Theme extends ExtraTheme { }
  interface ThemeOptions extends ExtraTheme { }
}
