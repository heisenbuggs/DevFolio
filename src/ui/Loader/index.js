import './Loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import Loader from 'react-loader-spinner';

const CustomLoader = ({ load }) => {
  const [loader, setLoader] = useState(load);
  // Total time of loading screen is sum of both timeouts.
  const close = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };

  return (
    <div id={loader ? "preloader" : "preloader-none"}>
      <div className="loader">
        {loader && (
          <Loader
            type="Grid"
            height={120}
            width={120}
            color="#c770f0"
            timeout={1500}
          />
        )}
        {loader && close()}
      </div>
    </div>
  );
};

export default CustomLoader;
