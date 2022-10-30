import { createGlobalStyle } from "styled-components";
import "./Gilroy-Semibold.woff2"
import "./Gilroy-Semibold.woff"
import "./Gilroy-Semibold.ttf"

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto Condensed';
    src: url('./Gilroy-Semibold.woff2') format('woff2'),
        url('./Gilroy-Semibold.woff') format('woff'),
        url('./Gilroy-Semibold.ttf') format('woff');
  }
`;

export default FontStyles;