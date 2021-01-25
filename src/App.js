import { makeStyles } from "@material-ui/core";
import React from "react";
import Blog from "./component/blog/Blog";

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

function App() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Blog />
    </div>
  );
}

export default App;
