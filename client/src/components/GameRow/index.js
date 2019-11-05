import React from "react";
import { Image, Button,  ButtonToolbar } from 'react-bootstrap';
import predictionsAPI from "../../utils/predictionsAPI"
import "./style.css";

class GameRow extends React.Component
{
    state = {predictions: null}

    componentDidMount()
    {
        this.displayPredictions();
    }

    displayPredictions()
    {
        var userScreenname = this.props.user.screenname;
        var userPredictions = [];
        predictionsAPI.getPredictionsForUser(userScreenname)
        .then((res) =>
        {
            console.log(res.data);
            for (var game of res.data)
            {
                userPredictions[game.GameId] = {prediction: game.preGamePrediction, beatSpread: game.predictionCorrect}
            }
            console.log("user predictions data: ");
            console.log(userPredictions);
            this.setState({predictions: userPredictions});
        })
    }
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
                    (this.state.predictions) ?
                        (<div><p>Your prediction: {this.state.predictions[this.props.game.GameId]}</p>
                        <p>Prediction Correct? </p></div>)
                    :
                    (<ButtonToolbar>
                        <Button
                            variant="outline-info"
                            size="sm"
                            onClick={this.handlePrediction}
                        >Agree</Button>
                        <Button
                            variant="outline-info"
                            size="sm"
                            onClick={this.handlePrediction}
                        >Disagree</Button>
                    </ButtonToolbar>)
                }

            </td>
            </tr>
        );
    }
}
export default GameRow;
