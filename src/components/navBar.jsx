

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { Icon } from '@mui/material';




function Navbar() {

    const [isSearchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchButtonClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    // Perform search based on the searchQuery
    console.log('Performing search for:', searchQuery);
    // You can add your search logic here
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">Kitabein</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            {/* Add more navigation items as needed */}
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <Link to="/cart" className="nav-link">
          <ShoppingCartIcon/>
          </Link>
          <Link to="/profile" className="nav-link-m4" style={{marginLeft:"2rem"}}><Person2Icon/>
          
          </Link>
          
          <div to="/search" className="nav-link-m4" onClick={handleSearchButtonClick} 
          
          style={{marginLeft:"2rem"}}><SearchIcon/>
          {isSearchVisible && (
        <>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </>
      )}
    
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

