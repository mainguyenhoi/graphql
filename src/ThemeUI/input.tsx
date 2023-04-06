import * as React from 'react';
import { Input } from '@mui/material';
import { ThemeProvider } from '@material-ui/styles';
import theme from './config';
const ThemeInput = (props: any) => {
    return (
        <ThemeProvider theme={theme}>
            <Input color={props?.color ? props.color : 'primary'} {...props}></Input>
        </ThemeProvider>
    );
}
export default ThemeInput;