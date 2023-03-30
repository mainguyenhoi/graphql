import { createTheme } from '@mui/material/styles';
import { palette } from '../Constant/theme';
const theme = createTheme({
    palette: {
        primary: {
            main: palette.primary.main,
        },
        secondary: {
            main: palette.primary.main
        }
    },
});
export default theme;