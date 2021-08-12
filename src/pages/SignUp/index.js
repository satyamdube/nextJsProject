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
    Tabs,
    Tab, 
    Modal,
    Home,
    Profile,
    Contact,
  } from "react-bootstrap";
  import Link from 'next/link';
  import React, { useState, Component } from "react";
  
  function SignUp() {
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
              Already a member?<Link href="/SignIn"><a href="">Sign in</a></Link>
              </div>
              <div className="signInMain">
                  <h1>Forgot Password?</h1>
                  <div className="tab-button-info">
                    <button className="active" type="button">For Hospital</button>
                    <button type="button">For Individual</button>
                  </div>
                  <Form onSubmit={loginUser}>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control className="input-new"
                      onChange={(ev) => {
                        setUsername(ev.target.value);
                      }}
                      name="email"
                      type="email"
                      placeholder="Hospital Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control className="input-new"
                      onChange={(ev) => {
                        setUsername(ev.target.value);
                      }}
                      name="Your Name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control className="input-new"
                      onChange={(ev) => {
                        setUsername(ev.target.value);
                      }}
                      name="Contact Number"
                      type="text"
                      placeholder="Contact Number"
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Control className="input-new"
                      onChange={(ev) => {
                        setUsername(ev.target.value);
                      }}
                      name="email"
                      type="email"
                      placeholder="Hospital Email ID"
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
                  <div className="row label-content">
                  <div className="col-sm-12">
                     <label>
                       <input type="checkbox" />Creating an account means you’re okay with our <a href="">Terms of Service, 
                          Privacy Policy,</a> and our default <a href="">Notification Settings</a>.
                     </label>
                   </div>
                  </div>
                  <div className="login-button-div">
                    <Button type="submit" variant="primary" size="lg" block>
                       Create Account
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
  
  export default SignUp;
  