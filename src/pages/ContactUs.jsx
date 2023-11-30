import React from 'react';

function ContactUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div className="col-lg-6">
          <h2>Our Location</h2>
          <p>123 Bookstore Street</p>
          <p>City, Country</p>
          <p>Zip Code: 12345</p>

          <h2>Contact Information</h2>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
