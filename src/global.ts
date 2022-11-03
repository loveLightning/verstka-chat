import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-family: 'Gilroy', sans-serif;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  p {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    margin: 0;
  }
`;

export default GlobalStyle;