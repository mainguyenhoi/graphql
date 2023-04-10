import { makeStyles, Theme } from '@material-ui/core';
const useStyle = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiInputBase-root': {
            height: '44px'
        },
    },
}), { name: 'Datepicker' });
export default useStyle;