import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from "../../components/Avatar"
import usersAPI from "../../utils/usersAPI";
import predictionsAPI from "../../utils/predictionsAPI"

import "./style.css";

import Navme from "../../components/Nav";

class Profile extends React.Component
{
    state = {loggedInUser: {screenname: "sharryheb", avatar: "https://www.netclipart.com/pp/m/86-866514_picture-free-stock-seahawks-drawing-cartoon-seattle-seahawks.png"}, correctCount: 0, incorrectCount: 0, rank: 0};

    componentDidMount()
    {
        var correctCount = 0;
        var incorrectCount = 0;
        var rank = -1;
        usersAPI.getUser(this.state.loggedInUser.screenname)
        .then(user =>
        {
            predictionsAPI.getStandings()
            .then(standings =>
            {
                for (var i=0; i < standings.data.length; i++)
                {
                    if (standings.data[i].screenname === this.state.loggedInUser.screenname)
                    {
                        rank = i+1;
                    }
                }
                predictionsAPI.getPredictionsForUser(user.data.screenname)
                .then(userpred =>
                {
                    for (var prediction of userpred.data)
                    {
                        if (prediction.predictionCorrect)
                            correctCount++;
                        else
                            incorrectCount++;
                    }
                    this.setState({user: user.data, rank: rank, correctCount: correctCount, incorrectCount: incorrectCount});
                })
            })
        })
    }

render()
{
  return (
      <div className="Profile text-center">
       {/* <Navme /> */}

        <Container>
            <Row>
            <Col xs={12}>
                <h3>{this.state.loggedInUser.screenname}'s Profile</h3>
            </Col>
        </Row>
            <Row>
            <Col xs={12}>
        <Avatar imageUrl={this.state.loggedInUser.avatar} />
        </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Current Rank: #{this.state.rank}</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <h4>{this.state.correctCount} Correct Predictions</h4>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <h4> {this.state.incorrectCount} Incorrect Predictions</h4>
            </Col>
        </Row>
    </Container>
      </div>
  );
}
}

export default Profile;
