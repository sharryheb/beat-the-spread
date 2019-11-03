import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import Avatar from "../Avatar";
import "./style.css";


import predictionsAPI from '../../utils/predictionsAPI';
const { getStandings } = predictionsAPI;


class FanStanding extends React.Component {
  state = {
    users: null,
  };

  componentDidMount () {
    const response = getStandings();
    Promise.resolve(response)
      .then(res => {
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
                    <Card.Text>
                      {user.totalCorrect} correct predictions <br />
                      Favorite Sports Team: {user.FullName}
                    </Card.Text>
                    <Avatar imageUrl={user.logoUrl} />
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
          <Card.Title>Fan Standings Leaderboard</Card.Title>
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

export default FanStanding;
