import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Home.css";
import homeLogo from "../../assets/main.png";
import Particle from "../Particle";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import particles from "../LineParticle";
import HomeTwo from "./HomeTwo";
import Type from "./Type";
import Platforms from "./Platforms";
import Greeting from "./Greeting";

const Home = () => {
  return (
    <section className="sect">
      <Animate to="1" from="0" attributeName="opacity">
        <Particles params={particles} className="particle" />
        <Container fluid className="home-section">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col lg={7} className="home-header">
                <Greeting />

                <h1 className="heading-name">
                  I'm
                  <strong className="main-name">{" PRASUK"}</strong>
                  <strong className="main-name surname">{" JAIN."}</strong>
                </h1>

                <Container className="typeContainer">
                  <h6><Type /></h6>
                </Container>
                <Platforms />
              </Col>

              <Col lg={5} style={{ paddingBottom: 20 }}>
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
