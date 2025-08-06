import React, { useEffect, useState, useRef } from 'react';
import './DecodePage10195.css';



/* edit gallery images as needed */
const teamMembers = ['Shanmukh Malyala', 'Ethan Kim', 'Hashini Karthik', 'Nikhil Nataraju', 'Gunjan Verma', 'Altijani Ahmed', 'Aiden Li ✨ROOKIE✨', 'Samarth Vejju', 'Aryan Khowala', 'Ishanvi Golla', 'Samit Sinha', 'Namita Chaudhary', 'Atharva Gupta ✨ROOKIE✨'];
const roles = ['🌟 Captain + 🛠️ Mechanical', '🌟 Captain + 💻 Programming','🌟 Secretary + 💻 Programming + 📷 Marketing', '⭐🛠️ Lead Mechanical', '⭐💻 Lead Programming + 📷 Marketing', '⭐🌐 Lead Outreach', '⭐📷 Lead Marketing', '💻 Programming', '🛠️ Mechanical', '💻 Programming', '🛠️ Mechanical', '🛠️ Mechanical + 📷 Marketing', '🛠️ Mechanical'];
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