import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

import "./style.css";

import Avatar from "../Avatar";

function FanStanding() {
    return (
        <Card className="fs" style={{ width: '40rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><Card.Link href="#">Star 123</Card.Link>
              <Card.Text>14 correct predictions <br></br>Favorite Sports Team: San Francisco 49ers</Card.Text>
          </ListGroupItem>
          <ListGroupItem><Avatar />Sarah Zhou</ListGroupItem>
          <ListGroupItem>The Notorious M.P.J.</ListGroupItem>
        </ListGroup>
        
      </Card>
    );
  }
  
  export default FanStanding;