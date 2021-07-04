import React from 'react';
import './style.css';
import { Button, Alert, ListGroup, Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import React, { useState, useEffect } from 'react';

const App = () => (
  <Container fluid>
    <Row>
      <Col>1 of 3</Col>
      <Col xs={6}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);
export default App;
