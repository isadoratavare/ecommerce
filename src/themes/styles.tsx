import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        padding: 20px 10vw
    }
    ol, ul {
        list-style: none outside none;
    }

    a {
        all:none;
        text-decoration: none;
        color: black;
    }
    
    h1 {
        font-size: 2.5em; 
    }
      
    h2 {
        font-size: 1.875em; 
    }

    `;