import React, { useEffect, useState, useRef } from 'react';
import './IntoTheDeepPage10195.css';

import soar from '/assets/FTC10195/SOAR.png';
import bricksboro from '/assets/FTC10195/Bricksboro2.jpg';
import museum from '/assets/FTC10195/ChildrensMuseum1.jpg';
import roboween from '/assets/FTC10195/Roboween1.png';
import India from '/assets/FTC10195/India1.jpeg';
import scout from '/assets/FTC10195/Scout.png';


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
          Attended Bricksboro, a large LEGO event in Greensboro, where we spread information about FIRST
          <br />
We encouraged kids to take an interest in STEM by providing a hands-on experience
 <br />
Reached 2000+ people.
          </div>
           </div>
          
           <h3>
      Miriam P. Brenner Children's Museum
      </h3>
        <div className = "outreach-grid-10195">
      <img src={museum} className = "outreach-picture-10195" alt="childrensMuseum10195" />
        <div className = "outreach-text-container-10195">
          Held multiple exhibitions for interested children and families
          <br />
Gathered contact info from interested parents
<br />
Reached 150+ interested people
          </div>
          </div>

           <h3>
      Roboween
      </h3>
        <div className = "outreach-grid-10195">
      <img src={roboween} className = "outreach-picture-10195" alt="roboween" />
        <div className = "outreach-text-container-10195">
          Attended at a local church, where kids were trick or treating 
          <br />
While they were trick or treating, we gave them some insights about ECG Robotics and what we do as an organization
<br />
Reached over 2000+ people
          </div>
          </div>

           <h3>
       CAD Camp in Gambhiraopet Village, India
      </h3>
        <div className = "outreach-grid-10195">
      <img src={India} className = "outreach-picture-10195" alt="i" />
        <div className = "outreach-text-container-10195">
             Hosted foundational AutoCAD camps at ZPSS School in Telangana, India, for 25+ students
 <br />
 Raised $700+ to help fund 20+ laptops and establish a school computer lab
 <br />
 Secured matching sponsorship from Gilbarco to double community impact
 


 
          </div>
          </div>
                <h3>
       Scouting of America
      </h3>
        <div className = "outreach-grid-10195">
      <img src={scout} className = "outreach-picture-10195" alt="Scout" />
        <div className = "outreach-text-container-10195">
                Introduced STEM and FIRST to girls from the ages of 10-17 years
                 <br />
These girls were able to not only see the robot but use the robot and get hands on experience
 <br />
Reached 60+ interested people


 
          </div>
          </div>

    </div>
     </div>
};

export default Outreach10195; // Ensure it's a default export