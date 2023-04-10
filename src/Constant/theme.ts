import { purple } from '@mui/material/colors';

export const palette = {
    primary: {
        // Purple and green play nicely together.
        main: purple[500],
    },
    secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
    },
};

export const fonts = {
    primary: {
        light: 'Poppins, sans-serif',
        bold: 'Roboto, sans-serif',
    }
}

export const devices ={
    mobile:{
        max: 480,
        min: 320,
    },
    tablets:{
        max: 768,
        min: 481,
    },
    screenSmall:{
        max: 1024,
        min: 769,
    },
    largeScreen:{
        min: 1025,
    }
}

