import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';

import laptopImg from '../../assets/about.png';
import Github from '../../components/GithubCalendar';
import particles from '../../components/LineParticle';
import particleParams from '../../components/Particle';
import Techstack from '../../ui/TechstackCard';
import data from '../../utils/constants/TechList.json';
import Aboutcard from './AboutCard';

const About = () => {
  let lang = data.languages,
    tech = data.tech,
    tools = data.tools;

  return (
    <Animate to="1" from="0" attributeName="opacity">
      <Particles params={particles} className="particle" />
      <Container fluid className="about-section">
        <Particles params={particleParams}/>
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
