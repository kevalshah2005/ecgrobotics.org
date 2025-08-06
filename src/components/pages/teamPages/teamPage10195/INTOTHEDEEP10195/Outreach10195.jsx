import React, { useEffect, useState, useRef } from 'react';
import './IntoTheDeepPage10195.css';

import soar from '/assets/FTC10195/SOAR.png';
import bricksboro from '/assets/FTC10195/Bricksboro2.jpg';
import museum from '/assets/FTC10195/ChildrensMuseum1.jpg';
import roboween from '/assets/FTC10195/Roboween1.png';
import India from '/assets/FTC10195/India1.jpeg';


/* edit gallery images as needed */
const Outreach10195 = (onClick) => {

  return<div>
     <br />
      <br />
      
  <div className = "outreach-container-10195">
    <h1>
        Outreach
        </h1>
    <h3>
      Bricksboro
      </h3>
      <div className = "outreach-grid-10195">
        <img src={bricksboro} className = "outreach-picture-10195" alt="bricksboro10195" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
           </div>
          
           <h3>
      Miriam P. Brenner Children's Museum
      </h3>
        <div className = "outreach-grid-10195">
      <img src={museum} className = "outreach-picture-10195" alt="childrensMuseum10195" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

           <h3>
      Roboween
      </h3>
        <div className = "outreach-grid-10195">
      <img src={roboween} className = "outreach-picture-10195" alt="roboween" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

           <h3>
      CAD Camp in India
      </h3>
        <div className = "outreach-grid-10195">
      <img src={India} className = "outreach-picture-10195" alt="i" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>
   
    </div>
     </div>
};

export default Outreach10195; // Ensure it's a default export