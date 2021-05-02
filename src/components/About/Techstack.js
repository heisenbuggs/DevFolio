import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Techstack = (prop) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <Col
        xs={3}
        md={2}
        className="tech-icons"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {(!hover || !prop.hoverIcon) && <i className={`${prop.iconName} tech-icon-images`}></i>}
        {hover && prop.hoverIcon && <i className={`${prop.hoverIcon} tech-icon-images`}></i>}
      </Col>
    </div>
  );
};

export default Techstack;
