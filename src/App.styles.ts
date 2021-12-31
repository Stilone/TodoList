import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  * {
    @font-face {
      font-family: 'Montserrat', sans-serif;
      src: url('/fonts/Montserrat-Regular.ttf') format('ttf');
      font-weight: 400;
    }
    @font-face {
      font-family: 'Montserrat', sans-serif;
      src: url('/fonts/Montserrat-SemiBold.ttf') format('ttf');
      font-weight: 600;
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #FFFFFF;
    span, label {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
    }
  }
`;