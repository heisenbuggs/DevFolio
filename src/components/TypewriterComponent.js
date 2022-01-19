import React from 'react';

import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "SWE Intern @PhonePe",
          "ex-Intern @Groww",
          "ex-Intern @NoBroker",
          "Full - Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
};

export default Type;
