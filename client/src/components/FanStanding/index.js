import React from 'react';
import { Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
          users:res.data
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
            <tr key={user.screenname}>
                <td>
                    <div className="d-flex align-items-center">
                        <Image src={user.avatar} className="avatarSize mr-3"/>
                        <p><strong><em>{user.screenname}</em></strong></p>
                    </div>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        {user.totalCorrect}
                    </div>
                </td>
                <td>
                    <div className="d-flex align-items-center">
                        <Image src={user.logoUrl} className="imgSize" />
                        <Image src={user.logoWordUrl} className="imgSize" />
                    </div>
                </td>
            </tr>
        );
      });
    }

    return (userEls);
  }
}

export default FanStanding;
