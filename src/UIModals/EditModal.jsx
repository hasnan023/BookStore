import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from "axios";

const EditModal = ({ show, onHide, productId }) => {
  const [editedData, setEditedData] = useState();
  const [selectedFile, setSelectedFile] = useState('');
  const [name, setProductName] = useState(' ');
  const [price, setProductPrice] = useState();
  const [category, setProductCategory] = useState('');
  const [description, setProductDescription] = useState(' ');
  const [image,setProductImage] = useState('');
  

useEffect(()=>{
   fetchData(); 
},[productId])
  
  const fetchData = async () => {
    try{  
    const response = await axios.get(`https://bookstores-production.up.railway.app/api/product/${productId}`)
      const Product = response.data;
      
      setProductName(Product.name);
      setProductPrice(Product.price);
      setProductDescription(Product.description);
      setProductCategory(Product.category);
      setProductImage(Product.image?`https://bookstores-production.up.railway.app/${Product.image}`:"");
    }catch(error){

    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      name:name,
      price: price,
      description: description,
      category:category,
      image:selectedFile
    };   
axios.put(`https://bookstores-production.up.railway.app/api/product/${productId}`,data,{
  headers: {
    'Content-Type': 'multipart/form-data',
  }
})   
    .then((response)=> { 
      window.alert(response.data.message);
      fetchData();
      onHide();
    })
    .catch((error)=>{
      window.alert(error)
    });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={(e)=>setProductName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={(e)=>setProductDescription(e.target.value)}
            />
          </Form.Group>
           
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter category"
              name="category"
              value={category}
              onChange={(e)=>setProductCategory(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={(e)=>setProductPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              rows={3}
              placeholder="Enter Image"
              name="image"
              // value={image}
              onChange={(e)=>{
                setSelectedFile(e.target.files[0]);
              setProductImage(URL.createObjectURL(e.target.files[0]));}}
            />
                  {image ? (
                    <>
                      Selected file:
                      <img
                        src= {image}
                        alt="Selected Image"
                        style={{ maxWidth: '50px', maxHeight: '50px' }}
                      />
                    </>
                  ) : (
                    'Choose file'
                  )}
          </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
