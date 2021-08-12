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
  import Link from 'next/link';
  import React, { useState, Component } from "react";
  
  function ForgotPassword() {
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
              <span className="backArrowPassword"><Link href="/SignIn"><img src="back.png" /></Link></span>
              <div className="topSignUpMenber">
                  Not a member? <Link href="/SignUp"><a>Sign up now</a></Link>
              </div>
              <div className="signInMain">
                  <h1>Forgot Password?</h1>
                  <p>Enter the email address you used when you joined and we’ll 
                   send you instructions to reset your password.</p>

                   <p> For security reasons, we do NOT store your password. 
                    So rest assured that we will never send your password via email.</p>
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
                  
                  <div className="login-button-div">
                    <Button type="submit" variant="primary" size="lg" block>
                      Submit
                    </Button>
                  </div>
                </Form>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ForgotPassword;
  