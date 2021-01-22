import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import cross from "./../../../assets/cross.jpg";
import ImgCard from "../../Shared/Cards/ImgCard";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: theme.spacing(2),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  let content = ` A one-sentence statement describing the reason an organization or
  program exists and used to help guide decisions about priorities,
  actions, and responsibilities.`;

  return (
    <Grid container>
      <Grid container justify="flex-start" item md={12}>
        <ImgCard image={cross} title={"Mission Statement"} content={content} />
      </Grid>
    </Grid>
  );
};

export default Home;
