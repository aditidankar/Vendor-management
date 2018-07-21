import React, { Component } from 'react';
import vendor from '../vendor.jpg';
import { Button, Form, FormGroup, FormControl, Col, ControlLabel, Checkbox} from 'react-bootstrap';
import { Container, Row, Footer } from 'mdbreact';
import {Link} from 'react-router-dom'

class Login extends Component {
render() {  
  return (
    <div>
    <div className="header">
    </div>
      <div className="Login">
      <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col>
      <Button type="submit" className="submitbutton"> <Link to='/UserLogin'>Log In </Link>
            </Button>
            
      <Button type="submit" className="forgotbutton"> <Link to='/Forgot Password'>Forgot Password </Link>
            </Button>
            </Col>
            </FormGroup>
            </Form>
      </div>
      </div>
      )
}
}

export default Login
