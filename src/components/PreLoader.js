import React, { useState } from "react";
import "../styles/PreLoader.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Pre = (props) => {
  const [loader, setLoader] = useState(props.load);
  const close = () => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  };
  return (
    <div id={loader ? "preloader" : "preloader-none"}>
      {(props.load || loader) && close()}
    </div>
  )
};

export default Pre;
