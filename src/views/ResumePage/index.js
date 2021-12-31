import './Resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {
  Col,
  Container,
  Row,
} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particles from 'react-particles-js';
import Animate from 'react-smooth';

import pdf from '../../assets/Resume_PrasukJain.pdf';
import particles from '../../components/LineParticle';
import particleParams from '../../components/Particle';
import {
  ACHIEVEMENTS,
  WORK_EXPERIENCE,
} from '../../utils/constants/resumeContent';
import Resumecontent from './ResumeContent';

const Resume = () => {
  return (
    <Animate to="1" from="0" attributeName="opacity">
      <Particles params={particles} className="particle" />
      <Container fluid className="resume-section">
        <Particles params={particleParams}/>
        <Container>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="download-btn"
            >
              <i className="fas fa-download">&nbsp;</i>Download Resume
            </Button>
          </Row>
          <Row className="resume">
            <Col md={6} className="resume-left">
              <h3 className="resume-heading">Experience</h3>
              {
                WORK_EXPERIENCE.map((item) => (
                  <Resumecontent
                    key={item.company}
                    title={item.title}
                    institute={item.company}
                    date={item.date}
                    content={item.content}
                  />
                ))
              }
            </Col>
            <Col md={6} className="resume-right">
            <h3 className="resume-heading">Education</h3>
              <Resumecontent
                title="B.Tech. Electronics & Communication"
                date="2018 - Present"
                institute="Shri G.S. Institute of Technology & Science, Indore"
              />
              {/* <Resumecontent
                title="High School"
                date="May 2018"
                institute="New Shanti Niketan Higher Sec. School, Vidisha"
              />
              <Resumecontent
                title="Middle School "
                date="May 2016"
                institute="St. Mary's Convent Sr. Sec. School, Bhopal"
              /> */}
              <h3 className="resume-heading">Achievements</h3>
              <Resumecontent
                title=""
                content={ACHIEVEMENTS}
              />
              <h3 className="resume-heading">Extracurricular Activities</h3>
              <Resumecontent
                title="Campus Ambassdor, GeeksforGeeks"
                content={[
                  "Promoted the activities and coding culture of the company within the campus.",
                  // "Motivated students to write technical articles on GeeksforGeeks’s website and take courses for developing their skills.",
                ]}
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              className="download-btn"
            >
              <i className="fas fa-download">&nbsp;</i>Download Resume
            </Button>
          </Row>
        </Container>
      </Container>
    </Animate>
  );
};

export default Resume;
