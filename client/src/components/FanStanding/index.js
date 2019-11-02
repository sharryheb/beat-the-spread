
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
        <Card className="fs" style={{ width: '40rem' }}>
       
        <Card.Body>
          <Card.Title>Fan Standings Leaderboard</Card.Title>
        </Card.Body>
       <ListGroup>
        {userEls}
      </ListGroup>
      </Card>
    );
  }
}

export default FanStanding;