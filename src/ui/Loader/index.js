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
    }, 3000);
  };

  return (
    <div id={loader ? "preloader" : "preloader-none"}>
      <div className="loader">
        {loader && (
          <>
            <Loader
              type="Grid"
              height={120}
              width={120}
              color="#c770f0"
              className="loaderSvg"
            />
          <div id="inTurnFadingTextG">
            <div id="inTurnFadingTextG_1" className="inTurnFadingTextG">P</div>
            <div id="inTurnFadingTextG_2" className="inTurnFadingTextG">r</div>
            <div id="inTurnFadingTextG_3" className="inTurnFadingTextG">a</div>
            <div id="inTurnFadingTextG_4" className="inTurnFadingTextG">s</div>
            <div id="inTurnFadingTextG_5" className="inTurnFadingTextG">u</div>
            <div id="inTurnFadingTextG_6" className="inTurnFadingTextG">k</div>
            <div id="inTurnFadingTextG_7" className="inTurnFadingTextG">J</div>
            <div id="inTurnFadingTextG_8" className="inTurnFadingTextG">a</div>
            <div id="inTurnFadingTextG_9" className="inTurnFadingTextG">i</div>
            <div id="inTurnFadingTextG_10" className="inTurnFadingTextG">n</div>
          </div>
          </>
        )}
        {loader && close()}
      </div>
    </div>
  );
};

export default CustomLoader;
