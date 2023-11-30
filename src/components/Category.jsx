import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';

// const SalesBooks = [
//   { id: 1, title: 'Special Book 1', author: 'Special Author 1', imageUrl: 'image.jpg' },
//   { id: 2, title: 'Special Book 2', author: 'Special Author 2', imageUrl: 'image.jpg' },
//   { id: 3, title: 'Special Book 3', author: 'Special Author 3', imageUrl: 'image.jpg' },
//   // Add more special offer books
// ];

const literatureTypes = ["All",'Fiction', 'Non-fiction', 'Mystery', 'Science Fiction', 'Fantasy'];

function FeaturedBooks() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [featuredBooks, setFeaturedBooks] = useState([]);

  useEffect(() => {
    // Fetch products data from your backend
    axios.get('http://localhost:5002/api/product') // Update the URL
      .then((response) => {
        setFeaturedBooks(response.data);
        console.log(response.data);
        //updateProducts(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredFeaturedBooks = selectedCategory
  ? (selectedCategory === "All"
    ? featuredBooks
    : featuredBooks.filter(book => book.category === selectedCategory)
  )
  : featuredBooks;


  return (
    <div>
      <div className="container mt-4">
        <div className="mt-5 alert-primary fs-5" role="alert">
          {literatureTypes.map((type, index) => (
            <span
              key={index}
              className={`badge ${selectedCategory === type ? 'bg-primary' : 'bg-secondary'} me-3`}
              onClick={() => handleCategorySelect(type)}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="fs-4" style={{ textAlign: "left" }}>Featured Books</h2>
        <div className="row mt-5">
          {filteredFeaturedBooks.map((book) => (
            <div key={book._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <div className="float-center">
                  <img src={`http://localhost:5002/${book.image}`} className="card-img-top w-50 h-50" alt={book.name} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{book.name}</h5>
                  <p className="card-text">Author: {book.description}</p>
                  {/* <a href="/" className="btn btn-primary">
                    Learn More
                  </a>
                   */}

              <NavLink to={`/product/${book._id}`} className="btn btn-dark">
              View
            </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container mt-4">
        <h2 className="fs-4" style={{ textAlign: "left" }}>Special Offer</h2>
        <div className="row mt-5">
          {SalesBooks.map((book) => (
            <div key={book.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card">
                <img src={book.imageUrl} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Author: {book.author}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default FeaturedBooks;
