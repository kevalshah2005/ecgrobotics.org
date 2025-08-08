import React, { useEffect, useState, useRef } from 'react';
import './IntoTheDeepPage10195.css';


import teamLogo from '/assets/FTC10195/NightOwlsWebsiteLogoTemp.png';
import soar from '/assets/FTC10195/SOAR.png';
import SOAR from './SOAR10195'; // No curly braces
import TeamMembers from './TeamMembers10195'; // No curly braces
import Outreach from './Outreach10195'; // No curly braces


/* edit gallery images as needed */
const tabs = {
  TEAM: "Team",
  ROBOT: "Robot",
  OUTREACH: "Outreach",
};

const IntoTheDeepPage10195 = (onClick) => {
 const [selectedTab, setTab] = useState('ROBOT');

 const handleClick = (state) => {
  setTab(state);
  };

  return <div className = 'main-10195'>
    <br />
    <br />
    <h1>
    INTO THE DEEP
    </h1>
    (August 2024 - February 2025)
    <br />
    <br />
    <br />
    <div className = "tab-container-10195">
       {Object.keys(tabs).map((tab) => (
          <div 
          className = "tab-10195"
        
            key={tab} 

            onClick={() => setTab(tab)}
            
          >
            
             {(() => {
      switch (tab) {
        case selectedTab:
        return <div className = "tab-10195-selected"> <p> {tabs[tab]} </p> </div>;
        default:
          return <p> {tabs[tab]} </p>;
      }
    })()}

          </div>
        ))}
    </div>
  {(() => {
      switch (selectedTab) {
        case "ROBOT":
           return   <SOAR onClick/>;
        case "TEAM":
          return <TeamMembers onClick/>;
          case "OUTREACH":
            return <Outreach onClick/>;
      }
    })()}
    </div>
};

export default IntoTheDeepPage10195; // Ensure it's a default export