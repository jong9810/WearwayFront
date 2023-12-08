import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
   }
   a {
       text-decoration: none;
   }
   input {
       outline: none;
   }
   .App {
     display: block;
     min-height: 100%;
     width: 100%;
     min-width: 1560px;
   }
`

export default GlobalStyles;