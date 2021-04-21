import React from "react";
import Home from "./Screens/Home";
import NotFound from "./Screens/PageNotFound/NotFound";
import History from "./history";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/query/:search" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
