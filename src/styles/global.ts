import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    scroll-behavior: smooth;
    background-color: ${(props) => props.theme.colors.light.bodyColor};
    font-family: ${({ theme }) => theme.fonts.font.body};

  }

  *, *::before, *::after {
    box-sizing: border-box;
  }


  a {
    text-decoration:none;
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;

  }


  &::-webkit-scrollbar {
    width: 3px;
  }

  `
