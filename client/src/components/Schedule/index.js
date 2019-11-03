import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, DropdownButton, Dropdown, Card } from 'react-bootstrap';

import "./style.css";
import GameHeader from "../GameHeader";
function Schedule() {
    return (
        <Card className="window">
        <Table>
            <tbody>
                <tr>
                    <td>
                      <h3>2019 NFL Regular Season Schedule</h3>
                    </td>
                    <td>
                        <DropdownButton id="dropdown-basic-button" title="Choose-the-Week">
                        <Dropdown.Item href="#/action-1">Week 8</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Week 9</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Week 10</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
            </tbody>
        </Table>

        <GameHeader />
        </Card>


    );
  }

  export default Schedule;
