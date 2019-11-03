import React from "react";
import { Table } from 'react-bootstrap';
import GameRow from "../GameRow"
import gamesAPI from "../../utils/gamesAPI";

import "./style.css";

class GameHeader extends React.Component
{
    state = { games: null };

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
                this.setState({ games:res.data[0] });
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
                    <th>Game Time </th>
                    <th>Away Team</th>
                    <th>Home Team</th>
                    <th>The Spread </th>
                    <th>Prediction</th>
                    </tr>
                </thead>

                <tbody>
                {
                    this.state.games.map((game) =>
                    {
                        <GameRow game={game}/>
                    })
                }
                </tbody>
            </Table>
        );
    }
}
export default GameHeader;
