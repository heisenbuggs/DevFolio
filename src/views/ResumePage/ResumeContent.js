import React from 'react';

const ResumeContent = (props) => {
  return (
    <div className="resume-item">
      <h4 className={props.title ? "resume-title" : "resume-no-title"}>
        <b>{props.title}</b>
      </h4>
      {props.institute && <h5>{props.institute}</h5>}
      {props.institute && <h6>{props.date}</h6>}
      {props.content && (
        <ul style={{ marginLeft: -15 }}>
          {props.content.map((value, index) => (
            <li key={index}>&#x2747; {value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeContent;
