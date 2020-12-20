import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "85%",
        backgroundColor: theme.palette.background.primary,
        overflow: 'hidden',
        position: 'fixed',
        bottom: 0,
      },
}));

const Footer = (props) => {
    const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Typography variant="h6">Footer</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
