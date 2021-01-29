import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import {
  Home,
  About,
  Counsel,
  Donation,
  Entertainment,
  Program,
} from "./component/Pages/index";

const useStyles = makeStyles((theme) => {
  console.log({ theme });
  return {
    background: {
      zIndex: -2,
      backgroundColor: "#ebebeb",
    },
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Router>
          <Header title="Ark Victory Apostolic Church" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/entertainment" component={Entertainment} />
            <Route exact path="/donations" component={Donation} />
            <Route exact path="/counseling" component={Counsel} />
            <Route exact path="/programs" component={Program} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </Router>
      </Container>
    </div>
  );
}

export default App;
