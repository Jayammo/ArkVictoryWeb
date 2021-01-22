import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const HeaderNav = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container justify="flex-start" alignItems="center">
            <Grid item xs={4}>
              <Link
                to="/"
                size="medium"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h4" component="h3">
                  Ark Victory Apostolic Church
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/about"
                size="medium"
                fullWidth={true}
              >
                <Typography variant="h6">Church School</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/about"
                size="medium"
                fullWidth={true}
              >
                <Typography variant="h6">Bible Study</Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/about"
                size="medium"
                fullWidth={true}
              >
                <Typography variant="h6">About</Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderNav;
