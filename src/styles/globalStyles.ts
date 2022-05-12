import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.bg2};
  color: ${({ theme }) => theme.text};
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.4rem;

}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%
  }
  @media(max-width: 720px) {
    font-size: 87.5%
  }
}

html {
  scroll-behavior: smooth;
}


h1, h2, h3, h4, h5, h6, a, ul{
  margin: 0;
  padding: 0;
  color: inherit;
}

button {
  cursor: pointer;
}

`;
