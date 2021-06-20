import React, { useState } from "react";
import "../styles/PreLoader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "react-loader-spinner";

const Pre = (props) => {
  const [loader, setLoader] = useState(props.load);
  // Total time of loading screen is sum of both timeouts.
  const close = () => {
    setTimeout(() => {
      setLoader(false);
    }, 4000);
  };
  return (
    <div id={loader ? "preloader" : "preloader-none"}>
      <div className='loader'>
        {loader && (
          <Loader
            type='Grid'
            height={120}
            width={120}
            color='#c770f0'
            timeout={3000}
          />
        )}
        {loader && close()}
      </div>
    </div>
  );
};

export default Pre;
