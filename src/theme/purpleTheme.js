import { createTheme } from '@mui/material';
import { red, blue } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        },
        warning: {
            main: blue[100]
        },
        warning_content: {
            main: blue[700]
        },
        warning_text: {
            main: blue[800]
        }
    }
})
