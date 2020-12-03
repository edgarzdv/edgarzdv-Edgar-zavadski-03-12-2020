import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./cmps/NavBar/NavBar.js";
import WeatherDetails from "./pages/weatherDetails/WeatherDetails";
import Favorites from "./pages/Favorites/Favorites";
import Modal from "./cmps/Modal/Modal";
import SideBar from "./cmps/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Router >
        <NavBar />
        <Switch>
          <Route path="/favorites" component={Favorites} exact />
          <Route path="/:key?" component={WeatherDetails} />
          <Route path="/" component={WeatherDetails} exact />
        </Switch>
      </Router>
      <Modal />
      <SideBar />
    </div>
  );
}

export default App;
