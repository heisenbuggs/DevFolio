import React from "react";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import heart from "../Assets/heart_shape.png";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            Developed with{" "}
            <img src={heart} alt="heart-logo" className="heart" /> by Prasuk
            Jain
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} PJ</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/thereal.prasuk/"
                style={{ color: "white" }}
              >
                <i class="fab fa-facebook-f fa-lg"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/thereal_prasuk"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/prasukjain04/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/thereal_prasuk/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;