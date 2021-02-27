import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, AppBar, Toolbar, Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor:'lightgreen',
        color:"inherit",

    },
    title: {
        flexGrow:1
    }

}));


const Header = props => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="sticky" justify="center"
                    className={classes.header}>
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color='inherit' >
                       CovidInfo
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;