import {
  Image,
  Container,
  Row,
  Col,
  Carousel,
  Accordion,
  Card,
  Button,
  Form,
} from "react-bootstrap";

import { useState, useEffect } from "react";

function Forgot() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   setUsername("abwo");

  return (
    <div>
      {/* <div>Login Form</div> */}
      <div className="outerLoginForm">
        <h1>{username}</h1>
        <Container>
          <Row>
            <Col lg="6">
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      setUsername(ev.target.value);
                    }}
                    type="email"
                    placeholder={username}
                  />
                </Form.Group>
                <div className="login-button-div">
                  <Button variant="primary" size="lg" block>
                    Sign Up
                  </Button>
                </div>
              </Form>
            </Col>

            <Col lg="6">
              <div className="login-image">
                <Image src="doctor1.png" rounded fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Forgot;
