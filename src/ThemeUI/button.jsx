import * as React from 'react';
import Button from '@mui/material/Button';
import { palette } from '../Constant/theme';

const ThemeButton = (props) => {
    return (
            <Button color={props?.color ? props.color: palette.primary.main} {...props}>{props?.textValue}</Button>
    );
}
export default ThemeButton;