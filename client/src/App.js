import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";




  import Home from "./pages/home";
  // import SignIn from "./pages/SignIn";
  // import SignUp from "./pages/SignUp";
  // import Profile from "./pages/profile";
  import About from "./pages/about";
  
  
  function App() {
    return (
      <Router>
      <div>
        {/* <Nav/> */}
        <Switch>
               
            <Route exact path="/" component={Home} />
            {/*<Route exact path="/SignIn" component={SignIn} />
            <Route exact path="/Profile" component={Profile} />
    <Route exact path="/SignUp" component={SignUp} />*/}
            <Route exact path="/About" component={About} />
    
    
          </Switch>
      </div>
      </Router>
    );
  }
  
  export default App;
    