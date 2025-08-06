import React, { useEffect, useState, useRef } from 'react';
import './DecodePage10195.css';

import soar from '/assets/FTC10195/SOAR.png';
import museum from '/assets/FTC10195/ChildrensMuseum2.jpg';
import greene from '/assets/FTC10195/GeneralGreene1.jpg';
import foodFest from '/assets/FTC10195/FoodFest1.jpg';
import koreanFest from '/assets/FTC10195/KoreanFest1.jpg';
import honda from '/assets/FTC10195/Honda1.jpg';
import highPoint from '/assets/FTC10195/HighPoint1.jpg';
import UNCG from '/assets/FTC10195/UNCG1.jpg';
import YMCA from '/assets/FTC10195/YMCA1.jpg';
import thailand from '/assets/FTC10195/Thailand1.jpg';

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
      Miriam P. Brenner Children's Museum
      </h3>
        <div className = "outreach-grid-10195">
      <img src={museum} className = "outreach-picture-10195" alt="childrensMuseum10195" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

           <h3>
      General Greene STEM Fair
      </h3>
        <div className = "outreach-grid-10195">
      <img src={greene} className = "outreach-picture-10195" alt="greene" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>



        <h3>
            Triad Hindu Temple Food & Cultural Festival
      </h3>
        <div className = "outreach-grid-10195">
      <img src={foodFest} className = "outreach-picture-10195" alt="foodFest" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

           <h3>
            Greensboro Korean Festival
      </h3>
        <div className = "outreach-grid-10195">
      <img src={koreanFest} className = "outreach-picture-10195" alt="koreanFest" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

             <h3>
            Honda STEM Fair
      </h3>
        <div className = "outreach-grid-10195">
      <img src={honda} className = "outreach-picture-10195" alt="honda" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

            <h3>
            High Point Public Library STEM Club
      </h3>
        <div className = "outreach-grid-10195">
      <img src={highPoint} className = "outreach-picture-10195" alt="highPoint" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>
                <h3>
            UNCG Summer Dream Camp
      </h3>
        <div className = "outreach-grid-10195">
      <img src={UNCG} className = "outreach-picture-10195" alt="uncg" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>
          
         <h3>
            YMCA Summer Camp Genius Lab Week
      </h3>
        <div className = "outreach-grid-10195">
      <img src={YMCA} className = "outreach-picture-10195" alt="ymca" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

            <h3>
            CAD Camp in Thailand
      </h3>
        <div className = "outreach-grid-10195">
      <img src={thailand} className = "outreach-picture-10195" alt="Thailand" />
        <div className = "outreach-text-container-10195">
          eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
          </div>
          </div>

      


   
    </div>
     </div>
};

export default Outreach10195; // Ensure it's a default export