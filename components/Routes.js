import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./Home.js";
import Search from "./Search.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="search" component={Search} title="Search" />
    </Scene>
  </Router>
);
export default Routes;
