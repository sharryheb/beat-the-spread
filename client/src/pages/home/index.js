import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from "react-router-dom";






import Navme from "../../components/Nav";
import FanStanding from "../../components/FanStanding";
import Schedule from "../../components/Schedule";


function Home() {
  return (


      <div className="Home">
       <Navme />
       <FanStanding />
       <Schedule />
      </div>

  );
}

export default Home;
