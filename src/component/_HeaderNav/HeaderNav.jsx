import React from "react";
import { makeStyles } from "@material-ui/core";
import Nav from "./Nav";
import Title from "./Title";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
  },
});

const HeaderNav = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Title />
      <Nav />
    </div>
  );
};

export default HeaderNav;
