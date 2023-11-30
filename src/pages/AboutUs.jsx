import React from 'react';

function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <h1 className="display-4 mb-4" style={{textAlign:'center'}}>About Us</h1>
          <p className="lead">
            Welcome to our book community! We are passionate about books and reading. Our mission is to provide book enthusiasts with a platform to discover, discuss, and explore the world of literature.
          </p>

          <h2>Our Team</h2>
          <p>
            We are a dedicated team of bookworms, writers, and tech enthusiasts who share a common love for books. Meet our core team members:
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>John Doe</strong> - Founder and CEO</li>
            <li className="list-group-item"><strong>Jane Smith</strong> - Head of Content</li>
            <li className="list-group-item"><strong>Michael Johnson</strong> - Lead Developer</li>
            <li className="list-group-item"><strong>Susan Lee</strong> - Book Reviewer</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <img
            src="image.jpg"
            alt="Team"
            className="img-fluid rounded-circle mt-5"
          />
        </div>
      </div>

      
    </div>
  );
}

export default AboutUs;
