import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {

        // Then we can override this palette props by this....
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ff4422',  //THis is acually to override the primary 
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {  //This is to acually override secondary....
            light: '#0066ff',
            main: '#03344ff',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffcc00',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});


export default theme;