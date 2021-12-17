import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Tilt from 'react-parallax-tilt';

import doozieLogoImg from '../../assets/doozieLogoImg.png';
import growwLogoImg from '../../assets/growwLogoImg.png';
import nobrokerLogoImg from '../../assets/nobrokerLogoImg.png';
import phonepeLogoImg from '../../assets/phonepeLogoImg.png';

const HomeTwo = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col sm={12} lg={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and like to explore new things and
              challenges everyday....
              <br />
              <br />
              Fluent in Languages like
              <i>
                <b className="purple">
                  {" "}
                  C++, Java, JavaScript and TypeScript.{" "}
                </b>
              </i>
              <br />
              <br />
              My current focus is on&nbsp;
              <i>
                <b className="purple">
                  Full - Stack Development, Data Structures and Algorithms .
                </b>
              </i>
              <br />
              <br />I also apply my passion for developing products with
              <i>
                <b className="purple"> Modern Javascript Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">
                  {" "}
                  React, ExpressJS and React Native .
                </b>
              </i>
            </p>
          </Col>
          <Col md={12} lg={4} className="myAvtar">
            <Tilt>
              <img
                src={phonepeLogoImg}
                className="img-fluid face"
                alt="Phonepe"
                title="PhonePe"
              />
              <img
                src={growwLogoImg}
                className="img-fluid face"
                alt="Groww"
                title="Groww"
              />
              <img
                src={nobrokerLogoImg}
                className="img-fluid face"
                alt="NoBroker"
                title="NoBroker"
              />
              <img
                src={doozieLogoImg}
                className="img-fluid face"
                alt="Doozie"
                title="Doozie"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/thereal.prasuk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/thereal_prasuk"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/prasukjain04/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thereal_prasuk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default HomeTwo;
