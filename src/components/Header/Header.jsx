import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, AppBar, Toolbar} from '@material-ui/core';
import {ThemeProvider,createMuiTheme} from '@material-ui/core'

const theme=createMuiTheme({
    typography:{
       fontFamily:'Arial',
        fontSize:{
           fontSize:"1em"
        }
    }
});
const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor:'beige',
        color:"inherit",
    },

}));


const Header = props => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="sticky" justify="center"
                    className={classes.header}>
                <Toolbar>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h6" color='inherit' >
                            CovidInfo
                        </Typography>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;