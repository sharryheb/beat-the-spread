import React from "react";
import { Image, Button,  ButtonToolbar } from 'react-bootstrap';

import "./style.css";

class GameRow extends React.Component
{
    render ()
    {
        var favoredTeam = "";
        var fixedSpread = this.props.game.preGameSpread;
        if (this.props.game.favoredTeamCode === this.props.game.homeTeamCode)
        {
            favoredTeam = this.props.game.homeShortName;
        }
        else
        {
            favoredTeam = this.props.game.awayShortName;
            fixedSpread = fixedSpread * -1;
        }
        var gameTime = new Date(this.props.game.gameTime).toLocaleString();
        return (
            <tr>
            <td>{this.props.game.gameLocation}</td>
            <td>{gameTime}</td>
            <td><div className="d-flex justify-content-center align-items-center flex-column">
                <Image src={this.props.game.awayLogoUrl} className="imgSize" />
                <Image src={this.props.game.awayWordMarkUrl}  className="imgSize" />
            </div></td>
            <td><div className="d-flex justify-content-center align-items-center flex-column">
                <Image src={this.props.game.homeLogoUrl}  className="imgSize" />
                <Image src={this.props.game.homeWordMarkUrl}  className="imgSize" />
            </div></td>
            <td>{favoredTeam} favored by {fixedSpread}</td>
            <td>
                <ButtonToolbar>
                    <Button variant="outline-info">Agree</Button>
                    <Button variant="outline-info">Disagree</Button>
                </ButtonToolbar>
            </td>
            </tr>
        );
    }
}
export default GameRow;
