import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles({
    // We can make grouped style.... then it would be really useful... for example...
    // This way i think would be much easier for us to config className for the
    loginTextStyle: {
        backgroundColor: 'gray',
        color: "blue",
        fontSize: '40px'
    },

    loginButtonStyle: {
        color: `green`,

    }
});