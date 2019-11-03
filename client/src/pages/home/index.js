import React from "react";
import { Table, Card } from 'react-bootstrap';

import Navme from "../../components/Nav";
import FanStanding from "../../components/FanStanding";
import Schedule from "../../components/Schedule";

import "./style.css";

function Home() {
  return (
      <div className="Home">
       <Navme />
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
       <Schedule />
      </div>
  );
}

export default Home;
