import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Dashboard from "../pages/Dashboard";
import Pets from "../pages/Pets";
import PetView from "../pages/PetView";
import Shelters from "../pages/Shelters";
import ShelterView from "../pages/ShelterView";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/admin" component={Dashboard}></Route>
      <Route path="/pets" component={Pets}></Route>
      <Route path="/petview" component={PetView}></Route>
      <Route path="/shelters" component={Shelters}></Route>
      <Route path="/shelterview" component={ShelterView}></Route>
    </Switch>
  </Router>
);
export default Routes;
