import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { ActivityView } from "../views/ActivityView";

const Routes = () => (
  <Router>
    <Switch>
      <Route component={ActivityView} />
    </Switch>
  </Router>
);

export default Routes;
