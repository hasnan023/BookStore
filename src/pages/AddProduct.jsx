import React, { useState, useEffect } from 'react';
import {button} from  "@mui/material/Button";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import EditModal from '../UIModals/EditModal';  
import axios from "axios";

const ProductPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productId, setProductId] = useState('');


  useEffect(() => {
    // Fetch products data from your backend
    axios.get('http://localhost:5002/api/product') // Update the URL
      .then((response) => {
        setProducts(response.data);
        //updateProducts(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [products]);


  const [showEditModal, setShowEditModal] = useState(false);
 

  const closeEditModal = () => {
    setShowEditModal(false);
    
  };

  const handleEdit = (id) => {
    // Implement the edit logic for the given product ID
    console.log(`Edit product with ID: ${id}`);
    setShowEditModal(true);
    setProductId(id);
    };


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: productName,
      price: productPrice,
      description: productDescription,
      image: productImage,
      category:productCategory
    };
  console.log(data);
    axios
      .post('http://localhost:5002/api/product/addProduct', data ,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        // Handle the response from the server here
        console.log('Product added:', response.data);
        closeModal(); 
        setProductName('');
        setProductPrice(0);
        setProductDescription('');
        setProductImage('');
        setProductCategory('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = (event) => {
  //       setProductImageSrc(event.target.result);
  //     };

  //     reader.readAsDataURL(file);
  //   }
   };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = (id) =>{
    axios.delete(`http://localhost:5002/api/product/${id}`)
    .then((res)=>{
      console.log(res);
      window.alert(res.data.message)
    })
    .catch((error)=>{
      window.alert(error.res.data.message)
    })
  } 
  

  return (
    <div className="container mt-4">
      <div className="text-center">
        <button className="btn btn-primary float-end" onClick={openModal}>
          Add Product
        </button>
      </div>

      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Product</h5>
                <button type="button" className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productPrice">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productPrice"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productDescription">Product Description</label>
                    <textarea
                      className="form-control"
                      id="productDescription"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="productCategory">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productCategory"
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="productImage">Product Image</label>
                    <input
                      className="form-control"
                      type="file"
                      id="productImage"
                      //value={productImage}
                      onChange={handleImageChange}
                    />
                    
                  </div>
                  {productImage && (
        <div>
          <p>Selected Image:</p>
          <p>Name: {productImage.name}</p>
          <p>Type: {productImage.type}</p>
          <p>Size: {productImage.size} bytes</p>
        </div>
      )}
    

                  <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mapping products to cards */}
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mt-3">
            <Card>
              <Card.Img variant="top" src={`http://localhost:5002/${product.image}`} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.category}</Card.Text>
                <Button variant="secondary" onClick={() => handleEdit(product._id)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <EditModal show={showEditModal} onHide={closeEditModal} productId={productId}/>

    </div>
  );
};

export default ProductPage;
