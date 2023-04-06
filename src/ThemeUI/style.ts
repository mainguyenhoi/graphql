import { makeStyles, Theme } from '@material-ui/core';
import { devices } from '../Constant/theme';
const useStyle = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiInputBase-root': {
            height: '44px'
        },
        [theme.breakpoints.down(devices.mobile.max)]: {
            '& .flight_Search_boxed': {
                '& input': {
                    fontSize: 14
                }
            }
        },
    },
    flightBox: {
        width: '90%'
    }

}));
export default useStyle;