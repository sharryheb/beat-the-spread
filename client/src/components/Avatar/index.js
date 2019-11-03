import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row, Col } from 'react-bootstrap';

import "./style.css";

function Avatar( props ) {
  const {
    imageUrl,
  } = props;

    return (

    <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={imageUrl} roundedCircle fluid/>
          </Col>
        </Row>
    </Container>

    );
  }

  export default Avatar;
