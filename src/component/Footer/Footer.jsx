import React from "react";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      textAlign: 'center',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      marginTop: theme.spacing(2),
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>Footer</div>
  );
};

export default Footer;
