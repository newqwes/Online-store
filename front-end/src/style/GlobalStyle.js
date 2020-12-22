import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}
html {
  font-family: 'Ubuntu', Verdana, sans-serif;
  font-size: 10px;
}
body {
  font-size: 1.5rem;
}
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
`;
export default GlobalStyle;
