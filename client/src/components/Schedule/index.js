import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown, Card } from 'react-bootstrap';

import "./style.css";
import Game from "../Game";
function Shedule() {
    return (
        <Card className="window">
        <h3>2019 NFL Regular Season Schedule</h3>
        <DropdownButton id="dropdown-basic-button" title="Choose-the-Week">
            <Dropdown.Item href="#/action-1">Week 8</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Week 9</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Week 10</Dropdown.Item>
        </DropdownButton>
        <Game />
        </Card>

      
    );
  }
  
  export default Shedule;
  