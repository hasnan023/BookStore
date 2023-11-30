import React from 'react'
import PaymentForm from "../components/PaymentForm"; 
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51OFQAPLpQ8ab3Lqa8jgjwo8CwQlPESRb7WCY35upS87opACxvO7MEucxMAzr7yi0cURGwV9BOBpjGRGDpX0v6PS100pxeAmUGk');



function Payment() {

//  const location = useLocation;
//  const {state} = location;
 const {firstName,lastName,email,address} = useParams();
 
  
  const Data = {
    firstName,
    lastName,
    email,
    address
}
   
    
  return (
    <div>
        <Elements stripe={stripePromise} >
      <PaymentForm userDetails={Data}/>
      </Elements>
    </div>
  )
}

export default Payment
