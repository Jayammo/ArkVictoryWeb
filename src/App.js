import { makeStyles, CssBaseline, Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Pages/Home/Home";

const useStyles = makeStyles((theme) => {
  console.log({ theme });
  return {
    background: {
      zIndex: -2,
      backgroundColor: "#ebebeb",
    },
  };
});

const sections = [
  { title: "Entertainment", url: "/entertainment" },
  { title: "Donations received", url: "/donations" },
  { title: "Certified Counseling Services", url: "/counseling" },
  { title: "Programs:", url: "/programs" },
  { title: "About Us", url: "/about" },
];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Router>
          <Header title="Ark Victory Apostolic Church" sections={sections} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/entertainment">
              <div>Entertainment</div>
            </Route>
            <Route exact path="/donations">
              <div>Donations received</div>
            </Route>
            <Route exact path="/counseling">
              <div>Certified Counseling Services</div>
            </Route>
            <Route exact path="/programs">
              <div>Programs</div>
            </Route>
            <Route exact path="/about">
              <div>About Us</div>
            </Route>
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
