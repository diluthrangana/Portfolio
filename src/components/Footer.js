import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col md={4} className="footer-section">
            <h5>About Us</h5>
            <p>
              We are committed to delivering top-notch services tailored to your needs. 
              Join us to experience quality and innovation.
            </p>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5>Contact Us</h5>
            <p>Email: support@example.com</p>
            <p>Phone: +1 123 456 7890</p>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <hr />
        <p className="text-center">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};
