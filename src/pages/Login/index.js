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
import React, { useState, Component } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event, f) => {
    event.preventDefault();
    console.log(event);
    console.log(f);
    // this.username = event.target.email.value;
    // this.setState({ username: event.target.name.value });

    //  console.log('st',this.State);
  };

  const loginUser = async (event) => {
    event.preventDefault();

    console.log();

    const res = await fetch("https://10.0.0.52/mlr/api/v1/user/register", {
      body: JSON.stringify({
        mlr_login_id: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.clone().json();
    console.log(await res.clone().json());
  };

  return (
    <div>
      {/* <div>Login Form</div> */}
      <div className="outerLoginForm">
        <Container>
          <Row>
            <Col lg="6">
              <Form onSubmit={loginUser}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(ev) => {
                      setUsername(ev.target.value);
                    }}
                    name="email"
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(ev) => {
                      setPassword(ev.target.value);
                    }}
                    name="pass"
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <div className="login-button-div">
                  <Button type="submit" variant="primary" size="lg" block>
                    Sign in
                  </Button>
                </div>
              </Form>
            </Col>

            <Col lg="6">
              <div className="login-image">
                <Image src="doctor.png" rounded fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
