import { makeStyles, Theme } from '@material-ui/core';
const useStyle = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiAutocomplete-input': {
            padding: '0px 2px',
        }
    },
}), { name: 'AutoComplete' });
export default useStyle;