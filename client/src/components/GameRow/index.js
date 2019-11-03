import React from "react";
import { Image, Button,  ButtonToolbar } from 'react-bootstrap';

class GameRow extends React.Component
{
    render ()
    {
        return (
            <tr>
            <td>{this.props.gameLocation}</td>
            <td>October 20, 2019 at 1:25pm</td>
            <td>Seattle Seahawks<Image src="/images/Seattle-Seahawks-logo.png" fluid id="sea1" /></td>
            <td>Baltimore Ravens<Image src="/images/Baltimore-Ravens-logo.png" fluid id="rav1" /></td>
            <td>Seahawks favored by 3</td>
            <td>
                <ButtonToolbar>
                    <Button variant="outline-info">Agree</Button>
                    <Button variant="outline-info">Disagree</Button>
                </ButtonToolbar>
            </td>
            </tr>
        );
    }
}
export default GameRow;
