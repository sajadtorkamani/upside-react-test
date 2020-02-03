import { createGlobalStyle } from 'styled-components';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    background: #f6f6f6;
    font-family: 'Roboto', sans-serif;
    font-weight: ${typography.fontWeights.robotoLight};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${typography.fontWeights.robotoLight};
  }
  
  h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  p {
    margin-bottom: 15px;
  }
  
  a {
    //color: inherit;
  }
`;

export default GlobalStyle;
