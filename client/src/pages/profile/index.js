import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Avatar from "../../components/Avatar";

import usersAPI from "../../utils/usersAPI";
import predictionsAPI from "../../utils/predictionsAPI"

import "./style.css";

class Profile extends React.Component
{
    state = {correctCount: 0, incorrectCount: 0, rank: 0};

    componentDidMount()
    {
        var correctCount = 0;
        var incorrectCount = 0;
        var rank = -1;
        var loggedInUser = {
            screenname: (this.props.user && this.props.user.success ? this.props.user.success.screenname : ""),
            avatar: (this.props.user && this.props.user.success ? this.props.user.success.avatar : "")
        }
        usersAPI.getUser(loggedInUser.screenname)
        .then(user =>
        {
            predictionsAPI.getStandings()
            .then(standings =>
            {
                for (var i=0; i < standings.data.length; i++)
                {
                    if (standings.data[i].screenname === loggedInUser.screenname)
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
        console.log(this.props.user);
    }

render()
{
    var loggedInUser = {
            screenname: (this.props.user && this.props.user.success ? this.props.user.success.screenname : ""),
            avatar: (this.props.user && this.props.user.success ? this.props.user.success.avatar : "")
        }
  return (
      <div className="text-center bg-dark rounded w-50 ml-auto mr-auto">
        <Container>
            <Row>
            <Col xs={12}>
                <h3>{loggedInUser.screenname}'s Profile</h3>
            </Col>
        </Row>
            <Row>
            <Col xs={12}>
        <Avatar imageUrl={loggedInUser.avatar} />
        </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <h3>Current Rank: #{this.state.rank}</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <h4 className="text-white">{this.state.correctCount} Correct Predictions</h4>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <h4 className="text-white"> {this.state.incorrectCount} Incorrect Predictions</h4>
            </Col>
        </Row>
    </Container>
      </div>
  );
}
}

export default Profile;
