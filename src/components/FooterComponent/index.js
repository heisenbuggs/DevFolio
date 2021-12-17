import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Particles from 'react-particles-js';
import Animate from 'react-smooth/lib/Animate';

import heartIcon from '../../assets/heart_shape.png';
import socialLinks from '../../utils/constants/footerSocialLinks';
import particles from '../LineParticle';
import particleParams from '../Particle';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Animate to="1" from="0" attributeName="opacity">
      <Particles params={particles} className="particle" />
      <Container fluid className="footer">
        <Particles params={particleParams} />
        <Row>
          <Col md="12" className="quote">
            <h6>
              " THOSE WHO CAN'T REMEMBER THE PAST ARE CONDEMNED TO REPEAT IT. "
            </h6>
          </Col>
          <Col md="12" className="quote-author blockquote-footer">
            Dynamic Programming
          </Col>
        </Row>
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} PJ</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>
              Developed with{" "}
              <img src={heartIcon} alt="heartIcon-logo" className="heartIcon" /> by Prasuk
              Jain
            </h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              {socialLinks.map((obj, index) => (
                <li className="social-icons">
                <a
                  href={obj.link}
                  style={{ color: "white" }}
                >
                  <i class={obj.icon}></i>
                </a>
              </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Animate>
  );
};

export default Footer;
