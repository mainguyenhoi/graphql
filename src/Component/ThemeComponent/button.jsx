import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: purple[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

const ThemeButton = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Button color="primary" {...props}>{props?.textValue}</Button>
        </ThemeProvider>
    );
}
export default ThemeButton;