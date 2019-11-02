import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import Avatar from "../Avatar";
import "./style.css";

class FanStanding extends React.Component {
  state = {
    users: null,
  };

  componentDidMount () {
    getUsers().then(res => {
      this.setState({
        users:res.data,
      })
    })
  }


  render () {
    const { 
      state
    } = this;

    let userEls = null;
    
    if ( state.users && state.users.length > 0 ) {
      userEls = state.users.map(( user, index ) => {
        return (
          <ListGroupItem key={`${index}-${user.screenname}`}>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <Avatar imageUrl={user.avatar} />
                  </td>
                  <td>

                    <em><strong>{user.screenname}</strong></em>
                    <Card.Text>13 correct predictions <br></br>Favorite Sports Team: Carolina Panthers</Card.Text>
                  </td>
                </tr>
              </tbody>
            </Table>
          </ListGroupItem>
        );
      });
    }
    

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
       <ListGroup>
        {userEls}
      </ListGroup>
      </Card>
    );
  }
}

async function getUsers() {
    try {
        return await axios.get("/api/users");
    }
    catch(err) {
        console.log(err);
    }
}

export default FanStanding;