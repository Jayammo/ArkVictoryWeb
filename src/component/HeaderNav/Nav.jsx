import React from "react";
import { Typography, Grid, makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root:{
        width: '100%'
    },
});

const Nav = (props) => {
    const classes = useStyles();

    return ( 
        <div className={classes.root} >
            <Grid container direction="row" justify="space-evenly" alignItems="center">
                <Grid item>
                    <Link to='/'> Home</Link>
                </Grid>
                <Grid item>
                    <Link to='/content'> Content</Link>
                </Grid>
                <Grid item>
                    <Link to='/about'> About</Link>
                </Grid>
            </Grid>        
        </div>
     );
}
 
export default Nav;