import React from 'react';
import {useState, useEffect} from 'react';
import "./Checkout.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

const Checkout = () => {

    const navigate=useNavigate();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
  };

  const handleSubmit = () => {
    
    const data = {
        firstName,
        lastName,
        email,
        address
    }
    navigate(`/Cart/Checkout/Payment/${firstName}/${lastName}/${email}/${address}`);

  };


// const handleSubmit = () => {
//     const data = {
//       firstName,
//       lastName,
//       email,
//       address
      
//     };
  
//     // Assuming `navigate` supports specifying HTTP method and sending data in the body
//     navigate(`/Cart/Checkout/Payment/${data}`, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//   };

  const cart = useSelector((state) => state.cart);
  const [totalBill, setTotalBill] = useState(0);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const calculateTotalBill = () => {
      let total = 0;
      cart.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      setTotalBill(total);
      if(total>10){
        setShippingAmount(0);
      }
      else setShippingAmount(2);
    };

    calculateTotalBill();
  }, [cart]);





  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Checkout</h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <h4>Billing Information</h4>
          <Form onSubmit={handleFormSubmit}>
            
          
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} />

            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" value={lastName} 
              onChange={(e) => setLastName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" value={email} 
              onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" value={address} 
              onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>
          </Form>

          
        </Col>
        <Col md={6}>
        <div className="order-summary-card">
            <h2>Order Summary</h2>
            <table>
                <tbody>
                {cart.cartItems.map((item, index) => (
                    <tr className="table-row-space" key={index}>
                    <td className="px-2">{index + 1}.</td>
                    <td className="px-2 position-relative">
                        <img
                        src={`http://localhost:5002/${item.image}`}
                        alt="Product"
                        style={{ width: "50px", height: "50px" }}
                        />
                        <div className="quantity-circle">{item.quantity}</div>
                    </td>
                    <td className="px-2">{item.title}</td>
                    <td className="px-2">${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        <div className="subtotal-section">
    <div className="section-label">Subtotal:</div>
    <div className="section-amount">${totalBill.toFixed(2)}</div>
  </div>
  <div className="shipping-section ">
    <div className="section-label">Shipping:</div>
    <div className="section-amount">${shippingAmount.toFixed(2)}</div>
  </div>
  <div className="total-section">
  <div className="section-label">Total Bill:</div>
    <div className="section-amount">${(totalBill + shippingAmount).toFixed(2) }</div>
  </div>



        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
