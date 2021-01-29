import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "500px",
  },
  CardActionArea: {
    display: "flex",
    minHeight: "169.62px",
    width: "80%",
  },
  card: {
    display: "flex",
    minHeight: "169.62px",
    width: "100%",
  },
  cardDetails: {
    flex: 2,
  },
  cardMedia: {
    flex: 1,
    width: 160,
  },
});

const ImgCard = (props) => {
  const { post } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CardActionArea className={classes.CardActionArea} component="a" href="#">
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={post.image}
            title={post.imageText}
          />
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </div>
  );
};

export default ImgCard;
