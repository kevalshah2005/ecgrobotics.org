import React, { useEffect, useState, useRef } from 'react';
import './IntoTheDeepPage10195.css';

import soar from '/assets/FTC10195/SOAR.png';
import SOAR from './SOAR10195'; // No curly braces


/* edit gallery images as needed */
const teamMembers = ['Nikhil Nataraju', 'Ethan Kim ✨ROOKIE✨', 'Altijani Ahmed', 'Samarth Veiju ✨ROOKIE✨', 'Shanmukh Malyala','Aryan Khowala', 'Hashini Karthik ✨ROOKIE✨','Ishanvi Golla ✨ROOKIE✨','Samit Sinha ✨ROOKIE✨','Gunjan Verma ✨ROOKIE✨','Namita Chaudhary ✨ROOKIE✨', 'Dev Patel ✨ROOKIE✨', 'Mark Man', 'Sahasra Karthick ✨ROOKIE✨'];
const roles = ['🌟 Captain + 🛠️ Lead Mechanical', '⭐💻 Lead Programming', '⭐🌐 Lead Outreach', '⭐📷 Lead Marketing','🛠️ Mechanical','🛠️ Mechanical','💻 Programming + 📷 Marketing','💻 Programming + 📷 Marketing','🛠️ Mechanical','💻 Programming + 📷 Marketing','🛠️ Mechanical + 📷 Marketing','🛠️ Mechanical','💻 Programming','💻 Programming'];
const TeamMembers10195 = (onClick) => {

  return<div>
     <br />
       <br />
         <br />
           <br />
           <h1>
           Our Team
           </h1>
            <br />
           <br />
   <div className = "team-members-container-10195">
    <div className = "team-members-grid-10195">
      {Object.keys(teamMembers).map((member) => (
          <div 
          className = "member-10195"
            key={member} 
          >
             {(() => {
      switch (member) {
        default:
          return <div >  <p className = "member-maintext-10195">{ teamMembers[member]}</p>  <p className = "member-subtext-10195"> {roles[member] }</p> </div>;
              
          
      }
    })()}

          </div>
        ))}
    </div>
  {(() => {
     
      
    })()}
    </div>
    </div>
};

export default TeamMembers10195; // Ensure it's a default export