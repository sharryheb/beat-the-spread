import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

import "./style.css";

import Avatar from "../Avatar";
function FanStanding() {
  return (
      <Card className="fs" style={{ width: '40rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>Fan Standing</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem> <Table>
          <tbody>
            <tr>
              <td>
                <Avatar />
              </td>
              <td>
              
              <i><b>Star123</b></i>
              <Card.Text>14 correct predictions <br></br>Favorite Sports Team: San Francisco 49ers</Card.Text>
              </td>
            </tr>
          </tbody>
          </Table>
            
        </ListGroupItem>
        <ListGroupItem>
          <Table>
          <tbody>
            <tr>
              <td>
                <Avatar />
              </td>
              <td>
               
              <i><b>Sarah Zhou</b></i>
                <Card.Text>13 correct predictions <br></br>Favorite Sports Team: Carolina Panthers</Card.Text>
              </td>
            </tr>
          </tbody>
          </Table>
        </ListGroupItem>
        <ListGroupItem>
        <Table>
          <tbody>
            <tr>
              <td>
                <Avatar />
              </td>
              <td>
               <i><b>The Notorious M.P.J.</b></i>
               <Card.Text>1 correct prediction<br></br>Favorite Sports Team: Seattle Seahawks</Card.Text>
              </td>
            </tr>
          </tbody>
          </Table>
          </ListGroupItem>
      </ListGroup>
      
    </Card>
  );
}

export default FanStanding;