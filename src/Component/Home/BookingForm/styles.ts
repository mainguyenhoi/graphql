import { Theme } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(
    (theme: Theme) => ({
        root: {
            width: '100%',
            margin: 5,
            padding: 5,
          
        },
    }),
    { name: 'BookingForm' }
);

export default useStyle;
