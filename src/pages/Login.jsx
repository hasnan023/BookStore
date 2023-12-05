import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/UserSlice';

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();
    const dispatch = useDispatch();
  
  
const handleLogin = async () => {
        // if (!email) {
        //   window.alert('Email is required.');
        //   return;
        // }
        // if (!password) {
        //   window.alert('Password is required.');
        //   return;
        // } 
        
        const payload = {
            email,
            password
            
          };
          console.log(payload);
        
          await axios.post('https://bookstores-production.up.railway.app/api/user/login', payload, {
            headers: {
              'Content-Type': 'application/json',
            },
          }).then((response) =>{
            localStorage.setItem("userData", JSON.stringify(response.data.user));
            dispatch(login(response.data.user));
            
            window.alert('Login successful');
            console.log(login(response.data.user))
            navigate('/home');
    
          }).catch((err)=>{
            console.error('Login failed');
            window.alert(err);
          }); 
        }
  
  
  
  
  
    return (
    <div className="bg-success" style={{ minHeight: '100vh' }}>
      <Container className="py-5">
        <Container className="bg-light p-4 rounded" style={{ maxWidth: '600px' }}>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="text-center mb-4">
                <h2 className="display-4">Login</h2>
                <p className="lead">Welcome back! Log in to your account.</p>
              </div>

              <Form  onSubmit={(e) => {
                  e.preventDefault(); // Prevents the default form submission behavior
                  handleLogin(); // Call your login function
                }}>


                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Login
                </Button>
              </Form>

              <div className="mt-3 text-center">
                <a href="#">Forgot password?</a>
              </div>

              <div className="mt-4 text-center">
                <p className="mb-0">Don't have an account? <a href="/Signup">Sign up</a></p>
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

export default Login;
