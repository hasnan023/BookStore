import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo nec purus egestas laoreet.
            </p>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h4>Contact Us</h4>
            <address>
              <p>123 Bookstore Street</p>
              <p>City, Country</p>
              <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
              <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </address>
          </div>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;
