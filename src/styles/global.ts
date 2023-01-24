import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Maven Pro' , 'sans serif';
    letter-spacing: 0.75px;
  }

  body {
  font-size: 16px;
  scroll-behavior: smooth;
  background: ${({theme}) => theme.colors.light.background};
  color: ${({ theme }) => theme.colors.light.textColor};
  max-width: 100vw;
}

  a {
    text-decoration:none;
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
    line-height: 3rem;
  }

  textarea:focus, input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
  }

  button {
    cursor: pointer;
    outline: none;
  }


  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #2C3E50;
  }
`
