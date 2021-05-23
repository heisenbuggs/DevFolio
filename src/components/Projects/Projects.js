import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../styles/Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Animate from "react-smooth";
import Particles from "react-particles-js";
import particles from "../LineParticle";

import graph from "../../assets/Projects/graph.png";
import coursera from "../../assets/Projects/Coursera.png";
import gfg from "../../assets/Projects/Gfg.png";
import codehour from "../../assets/Projects/full-logo.png";
import editor from "../../assets/Projects/codeditor.jpg";
import linkedin from "../../assets/Projects/linkedin.jpg";

const Projects = () => {
  return (
    <Animate to="1" from="0" attributeName="opacity">
      <Particles params={particles} className="particle" />
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            "What you are, will be shown up in your{" "}
            <strong className="purple">Work</strong>."
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={graph}
                isBlog={false}
                title="Graph Visualizer"
                description="Helps you to visualize your Graph with ease and make your learnings faster on a package using Vis-React. Developed using React, Typescript and Bootstrap."
                link="https://github.com/itzprasuk/Graph-Visualizer"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Code.io"
                description="With this online code editor, you can edit ReadMe or HTML, CSS and JavaScript code, and live preview of site instantly. Developed using React, Redux, CSS, JavaScript."
                link="https://code-io.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={codehour}
                isBlog={false}
                title="CodeHour Backend"
                description="About API Powering CodeHour Web and Mobile Application providing API for online competitive coding contests. Developed using NodeJS, ExpressJS and MongoDB."
                link="https://github.com/itzprasuk/CodeHour-Backend"
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            My Recent <strong className="purple">Certifications </strong>
          </h1>
          <p style={{ color: "white" }}>
            "Everyday <strong className="purple">Certify</strong> youself to be
            a better <strong className="purple">YOU</strong>."
          </p>
          <Row style={{ justifyContent: "center" }}>
            <Col md={4} className="blog-card">
              <BlogCard
                imgPath={linkedin}
                link="https://media.geeksforgeeks.org/courses/certificates/573075dc367c62b733ca0069b1dcaba6.pdf"
                title="Become a Django Developer"
                site="linked.com"
              />
            </Col>
            <Col md={4} className="blog-card">
              <BlogCard
                imgPath={gfg}
                link="https://media.geeksforgeeks.org/courses/certificates/d4bca293d97e25e1d85c331160782fc4.pdf"
                title="Data Structures Algorithms"
                site="geeksforgeeks.org"
              />
            </Col>
            <Col md={4} className="blog-card">
              <BlogCard
                imgPath={coursera}
                link="https://www.coursera.org/account/accomplishments/specialization/certificate/EPAR6V5QWCPX"
                title="Full-Stack Development with React"
                site="coursera.org"
              />
            </Col>
            {/* <Col md={4} className="blog-card">
              <BlogCard
                imgPath={gfg}
                link="https://media.geeksforgeeks.org/courses/certificates/573075dc367c62b733ca0069b1dcaba6.pdf"
                title="CS Core Subjects"
                site="geeksforgeeks.org"
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </Animate>
  );
};

export default Projects;
