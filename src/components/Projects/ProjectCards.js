import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" style={{maxHeight: 170}} src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Footer>
          <Button variant="primary" href={props.link} target="_blank">
            <i className="cil-external-link">&nbsp;</i>
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
