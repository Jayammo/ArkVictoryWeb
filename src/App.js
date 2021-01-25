import { makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Pages/Home/Home";

const useStyles = makeStyles((theme) => {
  console.log({ theme });
  return {
    background: {
      zIndex: 2,
      backgroundColor: "#ebebeb",
      height: "100%",
    },
  };
});

const sections = [
  { title: "Entertainment", url: "#" },
  { title: "Donations received", url: "#" },
  { title: "Certified Counseling Services", url: "#" },
  { title: "Programs:", url: "#" },
  { title: "About Us", url: "#" },
];

function App() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Header title="Ark Victory Apostolic Church" sections={sections} />
      <Home />
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}

export default App;
