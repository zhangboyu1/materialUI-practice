import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//Now i want change its style attribute  and add class....

const useStyles = makeStyles(theme => ({

}))
function PaperPractice() {
    const classes = useStyles()
    return (
        <>
            <Paper elevation='5'>
                <Typography>this is my first para</Typography>
            </Paper>
        </>
    );
}

export default PaperPractice;
