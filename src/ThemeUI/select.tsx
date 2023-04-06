import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl, InputLabel } from "@mui/material";
const ThemeSelect = (props: any) => {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [option, setOption] = React.useState('');

    const handleChange = (event: any) => {
        setOption(String(event.target.value));
    };

    const options = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: '100%' }}>
                <Select
                    value={option}
                    onChange={handleChange}
                    {...props}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            value={option}

                        >
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    );
}

export default ThemeSelect;