import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';
import { Navbar, Nav, Container, Button, FormControl } from 'react-bootstrap';

function NavbarComponent() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchButtonClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    console.log('Performing search for:', searchQuery);
    // Add your search logic here
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">Kitabein</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/Addproduct" className="nav-link">Add product</Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            <Link to="/cart" className="nav-link">
              <ShoppingCartIcon />
            </Link>
            <Link to="/profile" className="nav-link">
              <Person2Icon />
            </Link>
            <div className="nav-link" onClick={handleSearchButtonClick}>
              <SearchIcon />
              {isSearchVisible && (
                <>
                  <FormControl
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                  <Button onClick={handleSearch}>Search</Button>
                </>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
