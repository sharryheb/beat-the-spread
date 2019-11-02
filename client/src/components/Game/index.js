import React from "react";
import { Image, Table, Button,  ButtonToolbar } from 'react-bootstrap';
import gamesAPI from "../../utils/gamesAPI";

import "./style.css";

function Game() {
    // GET THE WEEK NUMBER FROM THE <DropdownButton> in the <Schedule> component
    var weekNumber = 9; // hard coded here for testing
    var force = 0;   // 1=force games update, 0=only update games if it's been more than 24 hours since last update
    gamesAPI.updateGames(force)
    .then(function(req, res)
    {
        console.log("calling getGamesForWeek");
        gamesAPI.getGamesForWeek(weekNumber)
        .then(res2 =>
        {
            console.log(res2.data)
        })
        .catch(err2 => console.log(err2));
    })
    .catch((err) =>
    {
        console.log(err);
    });

    // IN THE RETURN BELOW, USE "res.data[0]" TO ACCESS THE GAMES FOR THE DESIRED WEEK
    return (
        <Table striped bordered hover className="gamecard">
            <thead>
                <tr>
                <th>Game Location</th>
                <th>Game Date </th>
                <th>Team 1</th>
                <th>Team 2</th>
                <th>Prediction </th>
                <th>Take a Bet</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Centurylink Field</td>
                <td>Sunday  October 20, 2019</td>
                <td>Seattle Seahawks</td>
                <td>Baltimore Ravens</td>
                <td>In favor of Seahawks</td>
                <td>
                    <ButtonToolbar>
                        <p>Do you agree with this prediction?</p>
                        <Button variant="outline-info">Agree</Button>
                        <Button variant="outline-info">Disagree</Button>
                    </ButtonToolbar>
                </td>
                </tr>
                <tr>
                <td>Seattle, WA</td>
                <td>1:25 pm</td>
                <td><Image src="/images/Seattle-Seahawks-logo.png" fluid id="sea1" /></td>
                <td><Image src="/images/Baltimore-Ravens-logo.png" fluid id="rav1" /></td>
                <td>Seahawks wins by 3 points or more</td>
                <td></td>
                </tr>
            </tbody>
        </Table>
    );
  }

  export default Game;
