import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row, Col } from 'react-bootstrap';

import "./style.css";

function Avatar( props ) {

    return (

    <Container>
        <Row>
            <Col xs={6} md={4}></Col>
          <Col xs={6} md={4}>
            <Image src={props.imageUrl} roundedCircle fluid/>
          </Col>
            <Col xs={6} md={4}></Col>
        </Row>
    </Container>

    );
  }

  export default Avatar;
