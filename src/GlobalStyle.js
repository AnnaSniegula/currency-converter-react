import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        margin: 0 auto;
        line-height: 1.5;
        text-align: center;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
`;