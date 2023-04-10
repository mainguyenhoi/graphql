import { makeStyles, Theme } from '@material-ui/core';
import { devices } from '../../Constant/theme';
const useStyle = makeStyles((theme: Theme) => ({
    root: {
        fontSize: 14,
        width: '100%',
        paddingBottom: '12px',
        [theme.breakpoints.up(devices.tablets.max)]: {
            width: '25%'
        },
      
    },
    flightBox: {
        width: '90%'
    }

}), { name: 'FlightBox' });
export default useStyle;