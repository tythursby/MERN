import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NewPlace from "./views/NewPlace";
import Users from "./views/Users";
import UserPlaces from "./views/UserPlaces";
import WithNavbar from "./components/navigation/WithNavbar";

const WithRouter = () => {
  return (
    <Router>
      <WithNavbar />
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default WithRouter;
