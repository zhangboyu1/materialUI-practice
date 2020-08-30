import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/**** */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
/**** */

import AppsIcon from '@material-ui/icons/Apps';
import NavigateNextTwoToneIcon from '@material-ui/icons/NavigateNextTwoTone';
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';


// Make style and pass into it...

const Header = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton >
                        <MenuIcon />
                    </IconButton>
                    <Typography >This is our header...... </Typography>
                    <AppsIcon />

                    <ArrowBackIosTwoToneIcon />
                    <AppsIcon />
                    <ArrowForwardIosTwoToneIcon />
                    {/* <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div> */}
                </Toolbar>
            </AppBar>
        </>

    )
}

export default Header;