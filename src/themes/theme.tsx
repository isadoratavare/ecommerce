import { ThemeProvider } from 'styled-components';

interface Props {
    children?: React.ReactNode;
}

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];

const primary = "#0AAF60";
const secondary = "#F3AA39";
const background = "#F3F6F4"
const dark = "#171717";
const light = "#FFFFFF";

const theme = {
    fontSizes,
    fonts: {
        primary: 'Poppins',
        secondary: 'Roboto',
    },
    colors: {
        primary,
        secondary,
        dark,
        light,
        background
    }
}

export type ThemeType = typeof theme;

export const Theme: React.FC<Props> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};