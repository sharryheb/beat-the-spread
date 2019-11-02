import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import Avatar from "../Avatar";
import predictionsAPI from "../../utils/predictionsAPI";

import "./style.css";

async function getFanStandings()
{
    try
    {
        return await predictionsAPI.getStandings();
    }
    catch(err)
    {
        console.log(err);
    }
}

function FanStanding() {

    getFanStandings()
    .then((res) => {
        console.log("************ STANDINGS *************");
        console.log(res.data);
    });

  return (
      // DO SOMETHING WITH getFandStanding() results ("res.data") in your return below...
      // Probably iterate over res.data and show 1 card per person or something....
      // let me know if questions. -- sharry
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
              {/* add avatar and team logo to results */}
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
