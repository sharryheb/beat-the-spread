import React from "react";
import { Table, Card } from 'react-bootstrap';
import FanStanding from "../../components/FanStanding";
import Schedule from "../../components/Schedule";

import "./style.css";

class Home extends React.Component
{

render()
{
    return (
      <div className="Home m-0 p-0 w-100">
       <Card className="fs">
            <Card.Body className="p-0">
                <Card.Title><h3>Fan Standings Leaderboard</h3></Card.Title>
                    <Table  striped bordered className="mb-0">
                        <thead>
                            <tr>
                                <td></td>
                                <td><h5><strong>Total Points</strong></h5></td>
                                <td><h5><strong>Favorite Team</strong></h5></td>
                            </tr>
                        </thead>
                        <tbody>
                            <FanStanding />
                        </tbody>
                    </Table>
            </Card.Body>
        </Card>
        {((this.props.user && this.props.user.success) ?
            (<Schedule user={this.props.user} />)
        :
            (<h3 className="text-center">Log in to start playing!</h3>))}
      </div>
  );
}
}
export default Home;
