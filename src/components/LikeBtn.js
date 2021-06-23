import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Like = () => {
  const [numLike, updateLike] = useState(0);
  const [likeCounter, upadteCounter] = useState(0);
  const [btnState, upadteBtn] = useState(true);
  const [likeClass, updateClass] = useState("far fa-heart");

  function clickHandler() {
    updateClass("far fa-heart animate-like");
    updateLike(numLike + 1);
    upadteCounter(likeCounter + 1);

    if (likeCounter > 3) {
      upadteBtn(true);
    }
  }

  return (
    <Nav.Item className="like-item">
      <Button className="like-btn" onClick={clickHandler} disabled={btnState}>
        <i className={likeClass} style={{ color: "#fb6fcd" }}></i> {numLike}
      </Button>
    </Nav.Item>
  );
};

export default Like;
