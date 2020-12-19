import React from "react";
import HeaderNav from "./component/HeaderNav/HeaderNav";
import Home from './component/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <HeaderNav />
        <Switch>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
