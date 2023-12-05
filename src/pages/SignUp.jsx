import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const Signup = () => {

const [name,setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      name: name,
    };

    axios
      .post('https://bookstores-production.up.railway.app/api/user/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(data);
        console.log('data entered Successful');
        window.alert(response.data.message);
        setEmail('');
        setPassword('');
        setName('');
        
      })
      .catch((error) => {
        window.alert(error);
      });
  };


  return (
    <div className="bg-success" style={{ minHeight: '100vh' }}>
      <Container className="py-5">
        <Container className="bg-light p-4 rounded" style={{ maxWidth: '600px' }}>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center mb-4">
                <h2 className="display-4">Signup</h2>
                <p className="lead">Register your account and shop</p>
              </div>

              <Form onSubmit={handleSubmit}>

              <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter your full name" value={name}
                onChange={(event) => setName(event.target.value)} required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" 
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" 
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}
                  required />
                </Form.Group>

                <Button variant="primary" type="submit" block >
                  Signup
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <a href="#">Forgot password?</a>
              </div>

              <div className="mt-4 text-center">
                <p className="mb-0">Already Registered? <a href="/Login">Login</a></p>
              </div>

              {/* Example Alert for form validation feedback */}
              <Alert variant="danger" className="mt-3" show={false}>
                Incorrect email or password. Please try again.
              </Alert>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Signup;
