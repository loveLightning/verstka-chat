import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"


import GilroySemiBoldWoff2 from './fonts/Gilroy-Semibold.woff2'
import GilroySemiBoldWoff from './fonts/Gilroy-Semibold.woff'
import GilroySemiBoldttf from './fonts/Gilroy-Semibold.ttf'

import GilroyMediumWoff2 from './fonts/Gilroy-Medium.woff2'
import GilroyMediumWoff from './fonts/Gilroy-Medium.woff'
import GilroyMediumttf from './fonts/Gilroy-Medium.ttf'

import GilroyBoldWoff2 from './fonts/Gilroy-Bold.woff2'
import GilroyBoldWoff from './fonts/Gilroy-Bold.woff'
import GilroyBoldttf from './fonts/Gilroy-Bold.ttf'

export type ThemeType = {
  theme: typeof theme
}

const GlobalStyle = createGlobalStyle<ThemeType>`
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroySemiBoldWoff2}) format('woff2'),
        url(${GilroySemiBoldWoff}) format('woff'),
        url(${GilroySemiBoldttf}) format('truetype');
    font-style: normal;
    font-weight: 600;
  },
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyMediumWoff2}) format('woff2'),
        url(${GilroyMediumWoff}) format('woff'),
        url(${GilroyMediumttf}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'Gilroy';
    src: url(${GilroyBoldWoff2}) format('woff2'),
        url(${GilroyBoldWoff}) format('woff'),
        url(${GilroyBoldttf}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }

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