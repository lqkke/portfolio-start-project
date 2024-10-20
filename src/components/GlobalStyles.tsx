import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&family=Jost:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap');
    }


`