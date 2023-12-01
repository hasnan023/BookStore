import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { NavLink } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch product data based on the ID from the URL params
    // Replace the API endpoint with your actual endpoint
    axios.get(`https://bookstores-production.up.railway.app/api/product/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) {
    // If product is not yet loaded, you can show a loading indicator or message
    return <p>Loading...</p>;
  }

 
 

  const { image, name, description, price, category } = product;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    
  };

  return (
    <Card style={{ width: '40rem', padding: '40px', border: 'none', margin: 'auto', marginTop: '50px' }}>
  {image && <Card.Img variant="top" src={`https://bookstores-production.up.railway.app/${image}`} alt={name} />}
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>{description}</Card.Text>
    <Card.Text>Price: ${price}</Card.Text>
    <div className="cart" onClick={()=> handleAddToCart(product)}>
    <NavLink to="/Cart" className="btn btn-dark" >
              Add to cart
            </NavLink>
            </div>
    <Button variant="danger">
      Add to Wishlist
    </Button>
  </Card.Body>
</Card>

  );
};

export default SingleProduct;
