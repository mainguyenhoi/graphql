import React from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControl } from "@mui/material";
const ThemeSelect = (props: any) => {

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