import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { HomeCard } from "../Content/index";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  media: {
    height: 140,
  },
});

const Home = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" item md={12} >
        <HomeCard />
      </Grid>
    </Grid>
  );
};

export default Home;
