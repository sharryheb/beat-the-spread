import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { /*Image,*/ Table } from 'react-bootstrap';

import "./style.css";

function Game() {
    return (

        <Table className="gamecard">
            {/* <thead>
                <tr>
                <th>Game location</th>
                <th>Game Date</th>
                </tr>
            </thead> */}
            <tbody>
                <tr>
                    <td>Game location</td>
                    <td>Game Date</td>
                </tr>
                <tr>
                    <td>
                        <div className = " ">
                        {/* <Image src="holder.js/100px250" fluid /> */}
                        </div>
                    </td>
                    <td>
                        Team Name 1
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className = " ">
                        {/* <Image src="holder.js/100px250" fluid /> */}
                        </div>
                    </td>
                    <td>
                        Team Name 2
                    </td>
                </tr>
                <tr><td>Prediction</td></tr>
            </tbody>
        </Table>

        // <Container>
        // <Image src="holder.js/50px125" fluid />
        // <Card style={{ width: '18rem'}}>


        //     <ListGroup variant="flush">
        //     <ListGroup.Item>Time</ListGroup.Item>
        //     <ListGroup.Item>Location</ListGroup.Item>
        //     <ListGroup.Item>Prediction</ListGroup.Item>
        //     </ListGroup>
        // </Card>
        // </Container>
    );
  }

  export default Game;
