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
  
  function SignIn() {
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
        <div className="signIn-Outer">
          <div className="outer-left-image">
            <div className="logo-data-outer">
                <h1>Logo</h1>
                <p>Case Management System Reports <br></br> with Compliance manager</p>
            </div>
          </div>
          <div className="login-and-sign-up-part">
              <div className="topSignUpMenber">
                  Not a member? <a href="">Sign Up</a>
              </div>
              <div className="signInMain">
                  <h1>Sign in to Platform</h1>
                  <Form onSubmit={loginUser}>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control className="input-new"
                      onChange={(ev) => {
                        setUsername(ev.target.value);
                      }}
                      name="email"
                      type="email"
                      placeholder="Email ID/Mobile Number"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword" className="relative-data">
                    <Form.Control className="input-new"
                      onChange={(ev) => {
                        setPassword(ev.target.value);
                      }}
                      name="pass"
                      type="password"
                      placeholder="Password"
                    />
                    <span className="input-group-append"><i class="feather-eye"></i></span>
                  </Form.Group>
                  <div className="form-check p-0">
                  <div className="row">
                  <div className="col-sm-8">
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                   </div>
                   <div className="col-sm-4">
                   <a className="password" href="">Forgot Password?</a>
                   </div>
                  </div>
                  </div>
                  <div className="login-button-div">
                    <Button type="submit" variant="primary" size="lg" block>
                      Sign in
                    </Button>
                  </div>
                  <div className="hr-inf">
                    <hr class="hr-text"></hr>
                    <span class="or-data">Or</span>
                  </div>
                  <div className="social-icon">
                      <div className="google-social"><a href=""><img src="google.png"></img>Sign in with google account</a></div>
                      <div className="linkdin"><img src="linkdin.png"></img></div>
                  </div>
                </Form>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignIn;
  