import React from 'react';
import './style.css';
import {
  Button,
  Alert,
  ListGroup,
  Container,
  Row,
  Col,
  Navbar,
  Nav
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import React, { useState, useEffect } from 'react';

const App = () => (
  <>
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    <Container fluid>
      <Row>
        <Col sm className="lcol">
          1 of 3
        </Col>
        <Col md>
          <pg />
        </Col>
        <Col sm>3 of 3</Col>
      </Row>
    </Container>
  </>
);
const pg = () => {
  <Alert>
    <p>
      2022/2023 Application for Correction of Residential Property Tax
      Assessment (Deadline April 30, 2021)
    </p>
  </Alert>;
};
export default App;
