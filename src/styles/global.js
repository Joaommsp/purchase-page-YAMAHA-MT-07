import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #181818;
    color: #F2F2F2;
    font-family: "Poppins", sans-serif;
  }
`