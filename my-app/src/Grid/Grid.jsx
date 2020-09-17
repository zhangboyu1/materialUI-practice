import React from 'react';
import Grid from '@material-ui/core/Grid';
import Header from './Header'
import Content from './Content'
import Paper from '@material-ui/core/Paper';
import { Button, Typography } from '@material-ui/core';
import { useStyles } from '../StyleLists'
const Grid1 = () => {

    const { secondButtonStyle } = useStyles()
    console.log(secondButtonStyle)
    return (
        <Grid container spacing={5} direction='column'>
            <Grid item >
                <Header />
            </Grid>

            <Grid item container >
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8} >

                    <Content />
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>

            <Grid item xs={12}>
                <Paper>xs=12</Paper>
                {/* 所以所以之所以要修改theme.space 其实也是因为 component中无法直接pass spacing作为props */}
                <Button className={secondButtonStyle} variant='outlined'> This is our second Button</Button>
            </Grid>

        </Grid>
    )
}

export default Grid1;