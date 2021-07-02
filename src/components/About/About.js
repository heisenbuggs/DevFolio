import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import particles from "../LineParticle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import data from "./TechList.json";

const About = () => {
  var lang = data.languages,
    tech = data.tech,
    tools = data.tools;

  return (
    <Animate to="1" from="0" attributeName="opacity">
      <Particles params={particles} className="particle" />
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              lg={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              lg={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <p style={{ color: "white" }}>
            "Grades doesn't assure employment, but{" "}
            <strong className="purple">Skills</strong> does."
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {lang.map((item) => (
              <Techstack
                key={item.name}
                iconName={item.iconName}
                hoverIcon={item.hoverIcon}
              />
            ))}
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tech.map((item) => (
              <Techstack
                key={item.name}
                iconName={item.iconName}
                hoverIcon={item.hoverIcon}
              />
            ))}
          </Row>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {tools.map((item) => (
              <Techstack
                key={item.name}
                iconName={item.iconName}
                hoverIcon={item.hoverIcon}
              />
            ))}
          </Row>
          <Github />
        </Container>
      </Container>
    </Animate>
  );
};

export default About;
