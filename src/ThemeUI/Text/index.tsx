import * as React from 'react';
import TextField from '@mui/material/TextField';
interface ThemeTextFieldProps {
    variant?: 'standard' | 'outlined' | 'filled',
    lable?: string,
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    defaultValue?: string,
    helperText?: string,
}
export default function ThemeTextField(props: ThemeTextFieldProps) {
    return (
        <TextField
            label={props?.lable}
            color={props?.color}
            variant={props?.variant || 'standard'}
            defaultValue={props?.defaultValue}
            helperText={props?.helperText}
        />
    );
}