import {  createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "GT-Eesti";
    src: url("/fonts/GT-Eesti-Pro-Text-Light.woff") format("woff");
    font-weight: 400;
    font-style: normal
  }
  
  @font-face {
    font-family: "GT-Eesti";
    src: url("/fonts/GT-Eesti-Pro-Text-Regular.woff") format("woff");
    font-weight: 500;
    font-style: normal
  }
  
  @font-face {
    font-family: "GT-Eesti";
    src: url("/fonts/GT-Eesti-Pro-Text-Medium.woff") format("woff");
    font-weight: 600;
    font-style: normal
  }
  
  @font-face {
    font-family: "GT-Eesti";
    src: url("/fonts/GT-Eesti-Pro-Text-Bold.woff") format("woff");
    font-weight: 700;
    font-style: normal
  }
  body,p,a,h1,h2,h3,h4,h5,h6,span,strong {
    font-family: 'GT-Eesti';
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }
  .btn {
    border: none;
    background: none;
    
  }


`;