import React from "react";
import { AppBar, Toolbar, Typography, Grid, makeStyles, Button } from '@material-ui/core';
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
        <AppBar position="static" color='primary'>
          <Toolbar variant="dense">
            <Grid container justify="center" alignItems="center">
                <Grid item xs={3}>
                <Button component={Link} to='/' size="medium" fullWidth={true}>
                    <Typography variant='h5'> Home</Typography>
                </Button>
                </Grid>
                <Grid item xs={3}>
                <Button component={Link} to='/about' size="medium" fullWidth={true}>
                    <Typography variant='h5'>Church School</Typography>
                </Button>
                </Grid>
                <Grid item xs={3}>
                <Button component={Link} to='/about' size="medium" fullWidth={true}>
                    <Typography variant='h5'>Bible Study</Typography>
                </Button>
                </Grid>
                <Grid item xs={3}>
                <Button component={Link} to='/about' size="medium" fullWidth={true}>
                    <Typography variant='h5'>About</Typography>
                </Button>
                </Grid>
            </Grid>
            </Toolbar>
            </AppBar>        
        </div>
     );
}
 
export default Nav;