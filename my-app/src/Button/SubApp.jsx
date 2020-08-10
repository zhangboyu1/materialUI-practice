import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//Now i want change its style attribute  and add class....

const useStyles = makeStyles(theme => ({

    buttonStyle: {
        backgroundColor: "#2132131",
        [theme.breakpoints.up('sm')]: {
            height: '300px',
            backgroundColor: "#FFFF"
        }
    }
}))
function App() {
    const classes = useStyles()
    return (
        <Button className={classes.buttonStyle}>hello world</Button>
    );
}

export default App;
