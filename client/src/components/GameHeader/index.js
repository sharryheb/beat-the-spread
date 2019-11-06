import React from "react";
import { Table } from 'react-bootstrap';
import GameRow from "../GameRow"


import "./style.css";

const GameHeader = (props) =>
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
                props.games && props.games.length ? (
                    props.games.map((game) => {
                        return <GameRow
                            key={game.id}
                            game={game}
                            prediction={props.predictions[game.id]}
                            handlePrediction={props.handlePrediction} />;
                    }
                )) : <tr><td><h3>Select a Week to Show Games</h3></td></tr>
            }
            </tbody>
        </Table>
    );
}
export default GameHeader;
