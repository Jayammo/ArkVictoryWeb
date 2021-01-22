import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: theme.spacing(2),
  },
  media: {
    maxHeight: "200px",
    width: "200px",
  },
}));

const ImgCard = (props) => {
  const { image, content, title } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <img className={classes.media} src={image} alt="Logo" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImgCard;
