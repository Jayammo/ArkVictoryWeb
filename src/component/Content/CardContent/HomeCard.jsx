import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import cross from '../../../Images/golden-holy-cross.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    margin: theme.spacing(2),
  },
  media: {
    maxHeight: '140px',
  },
}));

const HomeCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cross}
          title="Content"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
  );
};

export default HomeCard;
