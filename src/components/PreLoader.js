import React from "react";
import "../styles/PreLoader.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
