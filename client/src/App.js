import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Cookies from 'universal-cookie';

  import Navme from "./components/Nav";
  import Home from "./pages/home";
  import SignIn from "./pages/SignIn";
  import SignUp from "./pages/SignUp";
  import Profile from "./pages/profile";
  import About from "./pages/about";

const cookies = new Cookies();
// Use this to get object of user data
    var userCookie = cookies.get('logInSuccessOrErrorMsg');
    var userLoggedIn =  (userCookie && userCookie.success) ? true : false;

class App extends React.Component
{
    state = {userCookie: userCookie, userLoggedIn: userLoggedIn};
render()
{
    return (

      <Router>
        <Navme user={userLoggedIn ? userCookie : null} />
      <div>
        <Switch>

            <Route exact path="/" render={(routeProps) => (<Home {...routeProps} user={userLoggedIn ? userCookie : null} />)} />
            <Route exact path="/SignIn" render={(routeProps) => (<SignIn {...routeProps} user={userLoggedIn ? userCookie : null} />)} />
            <Route exact path="/Profile" render={(routeProps) => (<Profile {...routeProps} user={userLoggedIn ? userCookie : null} />)} />
            <Route exact path="/SignUp" render={(routeProps) => (<SignUp {...routeProps} user={userLoggedIn ? userCookie : null} />)} />
            <Route exact path="/About" render={(routeProps) => (<About {...routeProps} user={userLoggedIn ? userCookie : null} />)} />
          </Switch>
      </div>
      </Router>
    );
  }
}
  export default App;
