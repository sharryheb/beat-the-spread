import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";






// import 'bootstrap/dist/css/bootstrap.min.css';
import Navme from "./components/Nav";
import FanStanding from "./components/FanStanding";
import Schedule from "./components/Schedule";


function App() {
  return (
    
     
      <div className="App">
       <Navme />
       <FanStanding />
       <Schedule />
       <p>Here I Am!</p>
      </div>
    
  );
}

export default App;
