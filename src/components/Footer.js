import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#services">Our Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Get in Touch</h5>
            <p>Email: <a href="mailto:support@example.com">support@example.com</a></p>
            <p>Phone: <a href="tel:+11234567890">+1 123 456 7890</a></p>
            <div className="social-icons">
              <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">About Us</h5>
            <p>
              We are dedicated to delivering innovative solutions and high-quality services
              that meet your expectations. Let’s build a brighter future together.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <p className="text-center">
          © {new Date().getFullYear()} Your Company. All rights reserved. | 
          <a href="#privacy" className="footer-bottom-link"> Privacy Policy</a> | 
          <a href="#terms" className="footer-bottom-link"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};
