// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4c73a2',
        },
        secondary: {
            main: '#ff6f61',
        },
        background: {
            default: '#f4f4f4',
        },
        text: {
            primary: '#333',
        },
    },
    typography: {
        button: {
            textTransform: "uppercase",
        },
    },
});

export default theme;
