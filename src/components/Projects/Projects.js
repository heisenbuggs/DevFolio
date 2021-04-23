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
import youtube from "../../assets/Projects/youtube.png";
import codehour from "../../assets/Projects/full-logo.png";

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
            <strong className="purple">Work</strong>.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={graph}
                isBlog={false}
                title="Graph Visualizer"
                description="Helps you to visualize your Graph with ease and make your learnings faster. Developed using React, Typescript and Bootstrap."
                link="https://github.com/itzprasuk/Graph-Visualizer"
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

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={youtube}
                isBlog={false}
                title="TrailShow"
                description="Netflix based website to view trailers of latest movies and web-shows. Developed using React, Bootstrap and React-YouTube."
              />
            </Col>
          </Row>
          <h1 className="project-heading">
            My Recent <strong className="purple">Certifications </strong>
          </h1>
          <p style={{ color: "white" }}>
            "Everyday <strong className="purple">Certify</strong> youself to be a
            better <strong className="purple">YOU</strong>."
          </p>
          <Row style={{ justifyContent: "center" }}>
            <Col md={4} className="blog-card">
              <BlogCard
                imgPath={coursera}
                link=""
                title="Full-Stack Development with React"
                site="coursera.org"
              />
            </Col>
            <Col md={4} className="blog-card">
              <BlogCard
                imgPath={gfg}
                link=""
                title="Data Structures and Algorithms"
                site="geeksforgeeks.org"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </Animate>
  );
};

export default Projects;
