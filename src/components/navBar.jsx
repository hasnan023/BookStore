import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';
import { Navbar, Nav, Container, Button, FormControl } from 'react-bootstrap';
import { logout } from '../redux/UserSlice';
import { useDispatch } from 'react-redux';

function NavbarComponent() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('userData');
    navigate('/Login');
  };

  const handleNavbarToggle = () => {
    setNavbarExpanded(!navbarExpanded);
  };

  const handleLogoutAndToggle = () => {
    handleLogout();
    handleNavbarToggle();
  };

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
    <Navbar bg="light" expand="lg" expanded={navbarExpanded} onToggle={handleNavbarToggle}>
      <Container>
        <Link to="/" className="navbar-brand">
          Kitabein
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mx-auto">
            <Link to="/" onClick={handleNavbarToggle} className="nav-link">
              Home
            </Link>
            <Link to="/products" onClick={handleNavbarToggle} className="nav-link">
              Products
            </Link>
            <Link to="/contact" onClick={handleNavbarToggle} className="nav-link">
              Contact
            </Link>
            <Link to="/about" onClick={handleNavbarToggle} className="nav-link">
              About
            </Link>
            <Link to="/Addproduct" onClick={handleNavbarToggle} className="nav-link">
              Add product
            </Link>
            <Link to="/Login" onClick={handleNavbarToggle} className="nav-link">
              Login
            </Link>
          </Nav>

          <Nav className="ms-auto align-items-center">
            <Link to="/cart" onClick={handleNavbarToggle} className="nav-link">
              <ShoppingCartIcon />
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
                  <Button onClick={() => { handleSearch(); handleNavbarToggle(); }}>Search</Button>
                </>
              )}
            </div>

            <Button variant="outline-primary" onClick={handleLogoutAndToggle}>
              <Person2Icon />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
