import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

  import Home from "./pages/home";
  import SignIn from "./pages/SignIn";
  import SignUp from "./pages/SignUp";
  import Profile from "./pages/profile";
  import About from "./pages/about";

  //import sharry from "./sharryScratchpad";

  function App() {

        //   // call NFL API to get updated spreads/scores
        //   sharry.updateSpreads();

          // get all User data from the DB
          //sharry.loadUsers();

        //  // create a new User
        //   var userData =
        //     {
        //         screenname: "someCoolDude",
        //         email: "somecooldude@someemail.com",
        //         password: "somecooldudepw",
        //         avatar: "https://previews.123rf.com/images/anatolir/anatolir1710/anatolir171000760/88197335-man-avatar-icon-simple-illustration-of-man-avatar-vector-icon-for-any-web-design.jpg",
        //         favoriteTeamCode: "DEN"
        //     }
        //  sharry.saveUser(userData);

        //   // get all Team data from the DB
        //   sharry.loadTeams();

        //   // get all Game data from the DB
        //   sharry.loadGames();

        //  // calculates everyone's prediction wins/losses and returns
        //  // all Prediction data plus associated User and Game data
        //  sharry.calculatePredictionResults();

        //  // create a new Prediction for an existing User
        //   var predictionData =
        //     {
        //         GameId: 16,
        //         UserScreenname: "sarahzhou",
        //         preGamePrediction: 1,
        //         deadline: Date.now()
        //     }
        //  sharry.savePrediction(predictionData);

    return (
      <Router>
      <div>
        {/* <Nav/> */}
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
