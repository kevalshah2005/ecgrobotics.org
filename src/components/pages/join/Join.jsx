import React from "react";
import { FilloutStandardEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import "./Join.css";

const Join = () => {
  return (
    <div className="join-container">
      <h1>Join Our Club</h1>
      <p>Fill out the form below to apply for one of our teams!</p>
      <div style={{ width: "100%" }}>
        <FilloutStandardEmbed
          filloutId="27K2gUBp3Zus"
          dynamicResize
        />
      </div>
    </div>
  );
};

export default Join;
