import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    // We can make grouped style.... then it would be really useful... for example...
    // This way i think would be much easier for us to config className for the
    //不是很理解为什么生成style 要把theme加进去。::
    loginTextStyle: {
        backgroundColor: 'gray',
        color: "blue",
        fontSize: '40px'
    },

    loginButtonStyle: {
        color: `green`,
    },

    secondButtonStyle: {
        padding: theme.spacing(4),
        textAlign: 'center',
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    }
}));