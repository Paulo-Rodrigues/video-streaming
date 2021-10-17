import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: rgb(20, 20, 20);
    color: #e5e5e5;
  }
`;

export default GlobalStyles;
