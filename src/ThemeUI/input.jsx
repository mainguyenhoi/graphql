import * as React from 'react';
import { palette } from '../Constant/theme';
import { Input } from '@mui/material';

const ThemeInput = (props) => {
    return (
        <Input color={props?.color ? props.color : palette.primary.main} {...props}>{props?.textValue}</Input>
    );
}
export default ThemeInput;