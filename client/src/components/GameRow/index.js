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
            <tr className="p0">
            <td>{gameTime}</td>
            <td>
                <div className="d-flex flex-column align-items-center">
                <Image src={this.props.game.awayLogoUrl} className="imgSize" />
                <Image src={this.props.game.awayWordMarkUrl}  className="imgSize" />
                <div className="font-weight-bold">{this.props.game.awayTeamScore}</div>
            </div></td>
            <td><div className="d-flex flex-column align-items-center">
                <Image src={this.props.game.homeLogoUrl}  className="imgSize" />
                <Image src={this.props.game.homeWordMarkUrl}  className="imgSize" />
                <div className="font-weight-bold mb-auto">{this.props.game.homeTeamScore}</div>
            </div></td>
            <td>{favoredTeam} favored by {fixedSpread}
                {
                    (this.props.game.homeTeamScore > 0 || this.props.game.awayTeamScore > 0) ?
                    ((this.props.game.spreadCovered) ?
                        <p className="text-success">Spread Covered</p>
                    :
                        <p className="text-danger">Spread <strong>NOT</strong> Covered</p>)
                    : <p></p>
                }
            </td>
            <td>
                {
                    (this.props.prediction) ?
                        (<div>
                            <p>Your prediction:
                            {this.props.prediction.prediction ?
                            <span className="text-success">Agree</span> :
                            <span className="text-danger">Disagree</span>}
                            </p>

                            {this.props.game.homeTeamScore > 0 || this.props.game.awayTeamScore > 0 ?
                                (<p>Prediction Correct?
                                {this.props.prediction.spreadBeat ?
                                    <span className="text-success">Winner!</span> :
                                    <span className="text-danger">Nope....</span>}
                                </p>) : <p></p>}
                        </div>)
                    :
                    (Date.now() < new Date(this.props.game.gameTime) ?
                    (<ButtonToolbar>
                        <Button
                            variant="outline-info"
                            size="sm"
                            onClick={() => this.props.handlePrediction(this.props.game.id, 1)}
                        >Agree</Button>
                        <Button
                            variant="outline-info"
                            size="sm"
                            onClick={() => this.props.handlePrediction(this.props.game.id, 0)}
                        >Disagree</Button>
                    </ButtonToolbar>)
                    : (<p>The game has started - you cannot make a prediction.</p>)
                    )
                }

            </td>
            </tr>
        );
    }
}
export default GameRow;
