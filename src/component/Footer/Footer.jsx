import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    marginTop: theme.spacing(1),
    position: "fixed",
    left: 0,
    bottom: 0,
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  return <div className={classes.root}>Footer</div>;
};

export default Footer;
