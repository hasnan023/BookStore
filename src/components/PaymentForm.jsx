// Checkout.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { clearCart } from "../redux/CartSlice";
import { useNavigate } from 'react-router-dom';


const Checkout = ({userDetails}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

 const cart = useSelector((state)=>state.cart); 
 const dispatch = useDispatch();
 
 const navigate = useNavigate();

 console.log(cart);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    
    // Use your server endpoint to get the client secret
    const response = await fetch('http://localhost:5002/api/payments/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 1000, currency: 'usd' }), // Adjust amount and currency
    });

    const data = await response.json();
    
    setClientSecret(data.clientSecret);
    console.log(data.clientSecret);  
    // Confirm the payment on the client side
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
      
    });

    if (result.error) {
      console.error(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');

      const orderData = {
         firstName: userDetails.firstName,
         lastName: userDetails.lastName,
         email: userDetails.email,
         address: userDetails.address,
         product: cart.cartItems.map(item=>({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
            productId: item._id
         })),
         totalBill: cart.cartItems.reduce((totalBill,item)=>totalBill+item.price*item.quantity,0),
         paymentMethod: "card",
         status:"processing"

      }
      console.log(orderData);
      axios.post("http://localhost:5002/api/order",orderData)
      .then(()=>{
        window.alert("order placed")
        dispatch(clearCart());
        navigate("/Home");
      }).catch(()=>{
        window.alert("failed")
      })
      
    }
  };
  
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Card Details</Form.Label>
        <CardElement className="form-control" />
      </Form.Group>
      <Button type="submit" disabled={!stripe}>
        Pay
      </Button>
    </Form>
  );
};

export default Checkout;
