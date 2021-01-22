import React, { Fragment } from "react";
import {
  Container,
  CssBaseline,
  makeStyles,
  Paper,
  Grid,
} from "@material-ui/core";
import HeaderNav from "./component/_HeaderNav/HeaderNav";
import Home from "./component/Pages/Home/Home";
import About from "./component/Pages/About/About";
import Footer from "./component/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  console.log({ theme });
  return {
    background: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      zIndex: 2,
      backgroundColor: "#ebebeb",
      height: "100%",
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
