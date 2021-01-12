import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import cross from './../../../assets/cross.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: theme.spacing(2),
  },
  media: {
    maxHeight: '400px',
  },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container justify="center" alignItems="center" item md={12} >
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cross}
            title="Content"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Mission Statement
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A one-sentence statement describing the reason an organization or 
            program exists and used to help guide decisions about priorities, actions, and responsibilities.  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
