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

const About = () => {
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
            <Techstack iconName="devicon-cplusplus-line" />
            <Techstack iconName="devicon-javascript-plain" />
            <Techstack iconName="devicon-typescript-plain" />
            <Techstack
              iconName="devicon-python-plain"
              hoverIcon="devicon-python-plain-wordmark"
            />
            <Techstack
              iconName="devicon-html5-plain"
              hoverIcon="devicon-html5-plain-wordmark"
            />
            <Techstack
              iconName="devicon-css3-plain"
              hoverIcon="devicon-css3-plain-wordmark"
            />
            <Techstack
              iconName="devicon-bootstrap-plain"
              hoverIcon="devicon-bootstrap-plain-wordmark"
            />
            <Techstack
              iconName="devicon-jquery-plain"
              hoverIcon="devicon-jquery-plain-wordmark"
            />
            <Techstack
              iconName="devicon-react-original"
              hoverIcon="devicon-react-original-wordmark"
            />
            <Techstack iconName="devicon-redux-original" />
            <Techstack
              iconName="devicon-django-plain"
              hoverIcon="devicon-django-plain-wordmark"
            />
            <Techstack
              iconName="devicon-nodejs-plain"
              hoverIcon="devicon-nodejs-plain-wordmark"
            />
            <Techstack
              iconName="devicon-express-original"
              hoverIcon="devicon-express-original-wordmark"
            />
            <Techstack
              iconName="devicon-mongodb-plain"
              hoverIcon="devicon-mongodb-plain-wordmark"
            />
            <Techstack
              iconName="devicon-mysql-plain"
              hoverIcon="devicon-mysql-plain-wordmark"
            />
          </Row>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Techstack
              iconName="devicon-ubuntu-plain"
              hoverIcon="devicon-ubuntu-plain-wordmark"
            />
            <Techstack
              iconName="devicon-git-plain"
              hoverIcon="devicon-git-plain-wordmark"
            />
            <Techstack iconName="cib-visual-studio-code" />
            <Techstack
              iconName="devicon-github-original"
              hoverIcon="devicon-github-original-wordmark"
            />
            <Techstack iconName="cib-postman" />
            <Techstack
              iconName="devicon-firebase-plain"
              hoverIcon="devicon-firebase-plain-wordmark"
            />
            {/* <Techstack
              iconName="devicon-slack-plain"
              hoverIcon="devicon-slack-plain-wordmark"
            /> */}
          </Row>
          <Github />
        </Container>
      </Container>
    </Animate>
  );
};

export default About;
