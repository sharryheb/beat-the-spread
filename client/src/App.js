import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Navme from "./components/Nav";
  import Home from "./pages/home";
  import SignIn from "./pages/SignIn";
  import SignUp from "./pages/SignUp";
  import Profile from "./pages/profile";
  import About from "./pages/about";
  import "./components/Background/style.css";

  function App() {

    return (
      <Router>
        <Navme />
      <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/Profile" component={Profile} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/About" component={About} />
          </Switch>
      </div>
      </Router>
    );
  }

  export default App;
