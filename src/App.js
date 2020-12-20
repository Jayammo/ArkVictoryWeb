import React, { Fragment } from "react";
import { Container, CssBaseline, makeStyles, Paper } from "@material-ui/core";
import HeaderNav from "./component/_HeaderNav/HeaderNav";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "85%",
      height: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    main: {
      paddingTop: theme.spacing(5),
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container fixed>
        <Paper variant="outlined" square className={classes.root}>
          <Router>
            <HeaderNav />
            <Switch>
              <div className={classes.main}>
                <Route exact path="/about" component={About} />
                <Route exact path="/content" component={Content} />
                <Route exact path="/" component={Home} />
              </div>
            </Switch>
          </Router>
        </Paper>
        <Footer />
      </Container>
    </Fragment>
  );
}

export default App;
