import React from "react";
import Card from "react-bootstrap/Card";

import "bootstrap/dist/css/bootstrap.min.css";

const AboutCard = () => {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className='purple'>Prasuk Jain </span>
            from <span className='purple'> Bhopal, India.</span>
            <br />
            {
              "I am a third year undergraduate pursuing B.Tech. in Electronics & Communication in SGSITS, Indore ."
            }
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Playing Synthesizer
            </li>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Reading Novels
            </li>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Playing Games
            </li>
            <li className='about-activity'>
              <i className='far fa-hand-point-right'></i> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that makes a difference!"{" "}
          </p>
          <footer className='blockquote-footer'>Prasuk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
