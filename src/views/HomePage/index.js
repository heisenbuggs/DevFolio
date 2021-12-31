import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';

import homeLogo from '../../assets/main.png';
import Greeting from '../../components/GreetingComponent';
import particles from '../../components/LineParticle.js';
import particleParams from '../../components/Particle';
import Type from '../../components/TypewriterComponent';
import HomeTwo from './HomeTwo';
import Platforms from './Platforms';

const Home = () => {
  return (
    <section className="sect">
      <Animate to="1" from="0" attributeName="opacity">
        <Particles params={particles} className="particle" />
        <Container fluid className="home-section">
          <Particles params={particleParams}/>
          <Container className="home-content">
            <Row>
              <Col md={12} lg={7} className="home-header">
                <Greeting />

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name">{" PRASUK"}</strong>
                  <strong className="main-name surname">{" JAIN."}</strong>
                </h1>

                <Container className="typeContainer">
                  <h6>
                    <Type />
                  </h6>
                </Container>
                <Platforms />
              </Col>

              <Col md={12} lg={5} style={{ paddingBottom: 20, marginTop: 20 }}>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Col>
            </Row>
          </Container>
        </Container>
        <HomeTwo />
      </Animate>
    </section>
  );
};

export default Home;
