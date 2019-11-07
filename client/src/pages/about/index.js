import React from "react";
import "./style.css";

function About() {
  return (
      <div className="p-2 w-50 d-flex flex-wrap ml-auto mr-auto bg-dark rounded">
        <h2 className="align-self-center"> About Us</h2>
        <p className="text-white">Beat the Spread is an online football betting site that allows fans to gather, bet, and have fun! Take your game-watching experience to another level by seeing if you are a true fan who can predict a winning team!</p>
        <p className="text-white">The Goal : Earn points by correctly predicting which NFL teams will beat the point spread. Use real NFL point spreads in this faux gambling game.</p>
      </div>
  );
}

export default About;
