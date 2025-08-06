import React, { useEffect, useState, useRef } from 'react';
import './DecodePage10195.css';


import teamLogo from '/assets/FTC10195/NightOwlsWebsiteLogoTemp.png';
import TeamMembers from './TeamMembers10195'; // No curly braces
import RobotPage from './RobotDecode10195';
import Outreach from './Outreach10195';


/* edit gallery images as needed */
const tabs = {
  TEAM: "Team",
  ROBOT: "Robot",
  OUTREACH: "Outreach",
};

const DecodePage10195 = (onClick) => {
 const [selectedTab, setTab] = useState('TEAM');

 const handleClick = (state) => {
  setTab(state);
  };

  return <div className = 'main-10195-decode'>
    <br />
    <br />
    <h1>
    DECODE
    </h1>
    (Febraury 2025 - Present)
    <br />
    <br />
    <br />
    <div className = "tab-container-10195-decode">
      {Object.keys(tabs).map((tab) => (
          <div 
          className = "tab-10195-decode"
            key={tab} 

            onClick={() => setTab(tab)}
          >
             {(() => {
      switch (tab) {
        default:
          return tabs[tab];
      }
    })()}

          </div>
        ))}
    </div>
  {(() => {
      switch (selectedTab) {
        case "ROBOT":
           return   <RobotPage onClick/>;
        case "TEAM":
          return <TeamMembers onClick/>;
          case "OUTREACH":
            return <Outreach onClick/>;
      }
    })()}
    </div>
};

export default DecodePage10195; // Ensure it's a default export