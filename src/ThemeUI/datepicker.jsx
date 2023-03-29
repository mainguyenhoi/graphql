import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { isMobile } from "react-device-detect";
import useStyle from './style';
const ThemeDatePicker = (props) => {
    const [value, setValue] = React.useState(null);
    const classes = useStyle();
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className={classes.root}>
                {
                    isMobile ? <MobileDatePicker
                        {...props}
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}

                        renderInput={(params) => <TextField {...params} />}
                    /> : <DesktopDatePicker
                        {...props}
                        value={value}
                        minDate={dayjs('2017-01-01')}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                }
            </div>

        </LocalizationProvider>
    );
}
export default ThemeDatePicker;