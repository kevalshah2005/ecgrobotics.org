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
          Attended Bricksboro, a large LEGO event in Greensboro, where we spread information about FIRST
          <br />
We encouraged kids to take an interest in STEM by providing a hands-on experience
 <br />
Reached 2000+ people.
<br />
Visited 10+ times
          </div>
          </div>

           <h3>
      General Greene STEM Fair
      </h3>
        <div className = "outreach-grid-10195">
      <img src={greene} className = "outreach-picture-10195" alt="greene" />
        <div className = "outreach-text-container-10195">
         Participated in General Greene’s STEM Fair, where we introduced elementary students to robotics through fun, hands-on activities
         <br />
Sparked curiosity in STEM and FIRST programs
<br />
Interacted with 400+ students and parents
<br />
          </div>
          </div>



        <h3>
            Triad Hindu Temple Food & Cultural Festival
      </h3>
        <div className = "outreach-grid-10195">
      <img src={foodFest} className = "outreach-picture-10195" alt="foodFest" />
        <div className = "outreach-text-container-10195">
          Attended at a local Hindu temple, where we set up a stall showcasing our catapult bot and allowed them to play robot cornhole
          <br />
While we were there we  we gave them some insights about ECG Robotics and what we do as an organization
<br />
Reached 1000+ people
<br />
          </div>
          </div>

           <h3>
            Greensboro Korean Festival
      </h3>
        <div className = "outreach-grid-10195">
      <img src={koreanFest} className = "outreach-picture-10195" alt="koreanFest" />
        <div className = "outreach-text-container-10195">
         Attended the Korean Festival to engage with the community and promote STEM education
         <br />
Showcased our robots and shared information about FIRST with families and students of all ages
<br />
Reached 10,000+ attendees
<br />
          </div>
          </div>

             <h3>
            Honda STEM Fair
      </h3>
        <div className = "outreach-grid-10195">
      <img src={honda} className = "outreach-picture-10195" alt="honda" />
        <div className = "outreach-text-container-10195">
          Showcased our robots at the Honda STEM Fair to inspire interest in engineering and technology
          <br />
Connected with families and young learners, emphasizing the value of STEM and FIRST
<br />
Reached 500+ attendees.
<br />
          </div>
          </div>

            <h3>
            High Point Public Library STEM Club
      </h3>
        <div className = "outreach-grid-10195">
      <img src={highPoint} className = "outreach-picture-10195" alt="highPoint" />
        <div className = "outreach-text-container-10195">
          Hosted Ottobots, an activity where kids get to build, drive, and customize an FTC bot.
          <br />
          Kids learned basic mechanical concepts and, more importantly, got to have a hands on experience building a bot
          <br />
          Worked with the library one day for two weeks for two months
          </div>
          </div>
                <h3>
            UNCG Summer Dream Camp
      </h3>
        <div className = "outreach-grid-10195">
      <img src={UNCG} className = "outreach-picture-10195" alt="uncg" />
        <div className = "outreach-text-container-10195">
          Presented basic robotics concepts and what the different pieces of hardware do
          <br />
          After presenting we demonstrated our competition robot
          <br />
          After demonstrating we allowed the kids to use our outreach bot and play Robot Soccer
          </div>
          </div>
          
         <h3>
            YMCA Summer Camp Genius Lab Week
      </h3>
        <div className = "outreach-grid-10195">
      <img src={YMCA} className = "outreach-picture-10195" alt="ymca" />
        <div className = "outreach-text-container-10195">
                 Hosted Ottobots, an activity where kids get to build, drive, and customize an FTC bot.
          <br />
          Kids learned basic mechanical concepts and, more importantly, got to have a hands on experience building a bot
          <br />
          Worked with the Alexander Spears YMCA during their Summer camp's STEM themed Genius Lab Week.
          </div>
          </div>

            <h3>
            CAD Camp at Samut Sakhon Burana School in Thailand
      </h3>
        <div className = "outreach-grid-10195">
      <img src={thailand} className = "outreach-picture-10195" alt="Thailand" />
        <div className = "outreach-text-container-10195">
          Hosted an in-depth Onshape tutorial, showcasing real-world applications of CAD
<br />
Introduced FIRST and mechanical concepts to 30 students
<br />
Expanded multilingual curriculum to serve learners across language barriers
<br />
Part of our the Five Rings Initiative
<br />
          </div>
          </div>

      


   
    </div>
     </div>
};

export default Outreach10195; // Ensure it's a default export