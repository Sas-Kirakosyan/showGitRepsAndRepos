import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import Repositories from "./pages/Repositories";
import UserData from "./pages/UserData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/repositories" component={Repositories} exact />
          <Route path="/user" component={UserData} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
