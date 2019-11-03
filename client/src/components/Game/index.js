import React from "react";
import { Image, Table, Button,  ButtonToolbar } from 'react-bootstrap';
import gamesAPI from "../../utils/gamesAPI";

import "./style.css";

class Game extends React.Component
{
    state = {};

    componentDidMount ()
    {
        // GET THE WEEK NUMBER FROM THE <DropdownButton> in the <Schedule> component
        var weekNumber = 9; // hard coded here for testing

        // SET force = 1 IF YOU WANT TO FORCE THE SPREADS/SCORES OF GAMES TO UPDATE
        var force = 0;  // 0 means ONLY update games if it's been more than 24 hours since last update

        gamesAPI.updateGames(force)
        .then(function()
        {
            console.log("calling getGamesForWeek");
            gamesAPI.getGamesForWeek(weekNumber)
            .then(res =>
            {
                // res.data[0] HOLDS THE GAME CARD DATA....
                console.log(res.data[0]);
            })
            .catch(err => console.log(err));
        })
        .catch((err) =>
        {
            console.log("ERROR: ");
            console.log(err);
        });
    }

    render ()
    {
        return (
            <Table striped bordered hover className="gamecard">
                <thead>
                    <tr>
                    <th>Game Location</th>
                    <th>Game Date </th>
                    <th>Away Team</th>
                    <th>Home Team</th>
                    <th>The Spread </th>
                    <th>Prediction</th>
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
}
export default Game;
