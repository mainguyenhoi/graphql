import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(() => ({
    mobileNameCity: {
        fontFamily: 'Poppins, sansserif',
        marginBottom: 0,
        '& p': {
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: 400,
            color: '#818090',
        },
        '& h3': {
            fontWeight: 500,
            paddingTop: '5px',
            color: '#212529',

        }
    },
    mobileGroupName: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '10px'
    },
    cityFlightLists: {
        width: '100%'
    }
}));
export default useStyle;