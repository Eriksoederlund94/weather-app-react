import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-size: 16px;
  scrollbar-color: #9bcd6a;
  font-family: 'Lato', sans-serif;
  background: #108dc7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ef8e38, #108dc7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ef8e38, #108dc7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

`;

export default GlobalStyle;
