import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="join-container">
      <h1>Join Our Club</h1>
      <p>Fill out the form below to apply for one of our teams!</p>
      <div className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc1tk5bMfHobGoysUce0QVUNl9q8XrebggkjVDVh9omuZf8kw/viewform?embedded=true"
          title="Join Form"
        ></iframe>
      </div>
    </div>
  );
};

export default Join;
