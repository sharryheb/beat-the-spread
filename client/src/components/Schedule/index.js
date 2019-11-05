import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, DropdownButton, Dropdown, Card } from 'react-bootstrap';
import gamesAPI from "../../utils/gamesAPI"
import usersAPI from "../../utils/usersAPI"

import "./style.css";
import GameHeader from "../GameHeader";


class Schedule extends React.Component
{
    state = { weeks: null, selectedWeek: null, weekTitle: "Select Week", user: null };
    componentDidMount()
    {
        gamesAPI.getWeeks()
        .then((res =>
        {
            this.setState({weeks: res.data}, this.getGames(this));
        }));

        usersAPI.getUser("sharryheb")
        .then(res =>
        {
            this.setState({user: res.data});
        })
    }

    handleWeekSelect = (weekNumber, event) =>
    {
        event.preventDefault();
        this.setState({selectedWeek: weekNumber, weekTitle: "Week " + weekNumber}, this.getGames(this));
    }

    setGamesState = (games) =>
    {
        this.setState({games})
    }

    getGames = (state) =>
    {
        // SET force = 1 IF YOU WANT TO FORCE THE SPREADS/SCORES OF GAMES TO UPDATE
        var force = 0;  // 0 means ONLY update games if it's been more than 24 hours since last update

        gamesAPI.updateGames(force)
        .then(function()
        {
            gamesAPI.getGamesForWeek(state.state.selectedWeek)
            .then(res =>
            {
                console.log("games for week");
                state.setState({games: res.data[0]});
            })
            .catch(err => console.log(err));
        })
        .catch((err) =>
        {
            console.log(err);
        });
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

            <GameHeader weekNumber={this.state.weekNumber} games={this.state.games} user={this.state.user} />
            </Card>
        );
    }
  }

  export default Schedule;
