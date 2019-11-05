import React from "react";
import { Table } from 'react-bootstrap';
import GameRow from "../GameRow"

import "./style.css";

class GameHeader extends React.Component
{
    render ()
    {
        return (
            <Table striped bordered>
                <thead>
                    <tr>
                    <th>Game Time </th>
                    <th>Away Team</th>
                    <th>Home Team</th>
                    <th>The Spread </th>
                    <th>Prediction</th>
                    </tr>
                </thead>

                <tbody>
                {
                    this.props.games && this.props.games.length ? (
                        this.props.games.map(game =>(
                        <GameRow key={game.id} game={game} user={this.props.user} />)
                    )) : <tr><td><h3>Select a Week to Show Games</h3></td></tr>
                }
                </tbody>
            </Table>
        );
    }
}
export default GameHeader;
