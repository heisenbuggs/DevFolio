import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../styles/Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../assets/Resume_PrasukJain.pdf";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import particles from "../LineParticle";

const Resume = () => {
  return (
    <Animate to="1" from="0" attributeName="opacity">
      <Particles params={particles} className="particle" />
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Download Resume
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-left">
              <h3 className="resume-heading">Experience</h3>
              <Resumecontent
                title="Software Development Intern"
                institute="Doozie"
                date="June 2020 - August 2020"
                content={[
                  "Developed user-friendly website from scratch using ReactJS and MaterialUI that increased userclicks subsequently customer visits by 30%.",
                  "Fixed bugs and implemented enhancements from existing website that improved web functionality and speed.",
                ]}
              />
              <h3 className="resume-heading">Education</h3>
              <Resumecontent
                title="B.Tech. Electronics & Communication"
                date="2018 - Present"
                institute="Shri G.S. Institute of Technology & Science, Indore"
              />
              <Resumecontent
                title="High School"
                date="May 2018"
                institute="New Shanti Niketan Higher Sec. School, Vidisha"
              />
              <Resumecontent
                title="Middle School "
                date="May 2016"
                institute="St. Mary's Convent Sr. Sec. School, Bhopal"
              />
            </Col>
            <Col md={6} className="resume-right">
              <h3 className="resume-heading">Achievements</h3>
              <Resumecontent
                title=""
                content={[
                  "Level 8 Coder out of 10 among 40000 participants in Uber HackTag’21.",
                  "Secured Global Rank 340 in September Lunchtime’20 held on CodeChef.",
                  "Rated 4 star coder on CodeChef. (Max. Rating : 1831).",
                  "Secured 2nd position in Web-Athon conducted by Progate at Indore-City Level.",
                  "Secured Top 50 Rank in open source projects in GirlScript Summer of Code’20.",
                ]}
              />
              <h3 className="resume-heading">Extracurricular Activities</h3>
              <Resumecontent
                title="Campus Ambassdor, GeeksforGeeks"
                content={[
                  "Promoted the activities and coding culture of the company within the campus.",
                  "Motivated students to write technical articles on GeeksforGeeks’s website and take courses for developing their skills.",
                ]}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button variant="primary" href={pdf} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Download Resume
            </Button>
          </Row>
        </Container>
      </Container>
    </Animate>
  );
};

export default Resume;
