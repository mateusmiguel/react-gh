import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* { 
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  font-weight: 400;
}

`;

export default Global;
