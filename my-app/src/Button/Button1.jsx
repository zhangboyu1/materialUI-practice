import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { useStyles } from '../StyleLists'

function Button1() {



    // const classes = useStyles()
    const { loginTextStyle, loginButtonStyle } = useStyles()
    return (
        <>
            <Typography className={loginTextStyle} variant='h2' >hello there</Typography>
            <Button className={loginButtonStyle} variant='outlined' > This is our first Button</Button>
        </>
    )
}

export default Button1;
