import React from "react";
import { Table, DropdownButton, Dropdown, Card } from 'react-bootstrap';
import GameHeader from "../GameHeader";

import gamesAPI from "../../utils/gamesAPI"
import usersAPI from "../../utils/usersAPI"
import predictionsAPI from "../../utils/predictionsAPI"

import "./style.css";

class Schedule extends React.Component
{
    state = { weeks: null, selectedWeek: null, weekTitle: "Select Week", user: null, games: null, predictions: null };

    componentDidMount()
    {
        var loggedInUser = {
            screenname: (this.props.user && this.props.user.success ? this.props.user.success.screenname : ""),
            avatar: (this.props.user && this.props.user.success ? this.props.user.success.avatar : "")
        }

        gamesAPI.getWeeks()
        .then((res =>
        {
            this.setState({weeks: res.data}, this.getGames);
        }));

        usersAPI.getUser(loggedInUser.screenname)
        .then(res =>
        {
            this.setState({user: res.data}, () => this.getPredictions(res.data));
        })
    }

    handleWeekSelect = (weekNumber, event) =>
    {
        event.preventDefault();
        this.setState({selectedWeek: weekNumber, weekTitle: "Week " + weekNumber}, this.getGames);
    }

    getGames = () =>
    {
        // SET force = 1 IF YOU WANT TO FORCE THE SPREADS/SCORES OF GAMES TO UPDATE
        var force = 1;  // 0 means ONLY update games if it's been more than 24 hours since last update
        gamesAPI.updateGames(force)
        .then((req, res) =>
        {
            gamesAPI.getGamesForWeek(this.state.selectedWeek)
            .then(res =>
            {
                this.setState({games: res.data[0]});
            })
            .catch(err => console.log(err));
        })
        .catch((err) =>
        {
            console.log(err);
        });
    }

    getPredictions(user)
    {
        var userScreenname = user.screenname;
        var userPredictions = [];
        predictionsAPI.getPredictionsForUser(userScreenname)
        .then((res) =>
        {
            for (var game of res.data)
            {
                userPredictions[game.GameId] = {prediction: game.preGamePrediction, spreadBeat: game.predictionCorrect}
            }
            this.setState({predictions: userPredictions});
        })
    }

    handlePrediction = (gameId, prediction) =>
    {
        var predictionObj = {
            UserScreenname: this.state.user.screenname,
            preGamePrediction: prediction,
            GameId: gameId
        }
        predictionsAPI.savePrediction(predictionObj)
        .then(() => {this.getPredictions(this.state.user)})
        .catch(err => console.log(err));
    }

    render()
    {
        return (
            <Card className="window">
            <Table>
                <tbody>
                    <tr>
                        <td>
                            <h3>2019 NFL Regular Season Schedule</h3>
                        </td>
                        <td>
                            <DropdownButton id="week-select-btn" title={this.state.weekTitle}>
                            {
                                this.state.weeks && this.state.weeks.length ? (
                                    this.state.weeks.map(week =>
                                    (<Dropdown.Item eventKey={week.weekNumber} key={week.weekNumber} onSelect={this.handleWeekSelect}>Week {week.weekNumber}</Dropdown.Item>)
                                )) : <Dropdown.Item value="">INVALID</Dropdown.Item>
                            }
                            </DropdownButton>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <GameHeader weekNumber={this.state.selectedWeek} games={this.state.games} predictions={this.state.predictions} handlePrediction={this.handlePrediction} />
            </Card>
        );
    }
  }

  export default Schedule;
