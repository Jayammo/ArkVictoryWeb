import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
  },
});

const Title = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h1">
        Proof of Concept
      </Typography>
    </div>
  );
};

export default Title;
