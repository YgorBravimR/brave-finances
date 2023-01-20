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
  third: {
    main: string;
  }
  outcome: {
    main: string
  },
  income: {
    main: string
  },
  lightBlue: {
    main: string
  },
  creditCard: {
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
