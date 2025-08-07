import React, { useEffect, useState, useRef } from 'react';
import './IntoTheDeepPage10195.css';


import soar from '/assets/FTC10195/SOAR.png';
import arm from '/assets/FTC10195/Arm1.jpg';


import climbVideo from '/assets/FTC10195/ClimbVideo.mp4';
import slidesVideo from '/assets/FTC10195/SlidesVideo.mp4';

/* edit gallery images as needed */
const subsystems = {
  NONE: "NONE",
  ARM: "ARM",
  SLIDES: "SLIDES",
  CLIMB: "CLIMB"
};

const SOAR10195 = (onClick) => {
 const [selectedSubsystem, setSubsystem] = useState('NONE');
 const [subsystemIsSelected, setSelected] = useState(false);

 const handleClick = (state) => {
  if (state == selectedSubsystem){
    setSubsystem('NONE');
    setSelected (false);
  }
  if (state != 'NONE' && selectedSubsystem != 'NONE'){
    setSubsystem('NONE');
    setSelected (false);
  }else if (state != 'NONE' && selectedSubsystem == 'NONE'){
    setSubsystem(state);
    setSelected (true);
  }
  if (state == 'NONE'){
    setSelected(false);
  }
  };

  return <div className = 'main-10195'>
    <br />
    <br />
    <br />

    <div className = "bot-10195">
         <br />
         <h1>
        SOAR
        </h1>
        {subsystemIsSelected && (
        <div className = "subsystem-info-10195">
            <button
          className = "subsystem-exit-10195" 
          style={{ cursor: 'pointer' }}
          onClick={() =>handleClick('NONE')}>
            X
          </button>
          <h1>
          {selectedSubsystem}
          
          </h1>
            {(() => {
      switch (selectedSubsystem) {
        case "ARM":
           return <div className = "subsystem-grid-10195"> <img src = {arm} className="subsystem-video-10195">
      </img>
           <div className = "subsystem-text-10195">
            <h3>
              Rotation Mechanism
              </h3>
              Our rotation mechanism is meant to allow for greater arm maneuverability. It Allows for arm movement in more than 180 degrees allowing the arm to go forward to pick up pieces and go backwards to score. It is unique because it is one large arm powered by two servos rather than a motor.
               <br />
               <br />
              - Aluminum arm to reduce wobble and increase stability
              <br />
- Belt driven rotation mechanism to reduce strain on servos and increase efficiency 
 <br />
- Replaced weak servo with a higher torque (AXON MAX) to optimize intaking
 <br />
- Included a rotating wrist to allow for easier sample pickup
<br />
<br />
  <h3>
              Claw
              </h3>
              <br />
              Orignally utilized a double roller active intake. However, it was too heavy, leading to support pieces breaking and arm struggling to rotate
and could only intake samples of a narrow range of orientations.
 <br />
  <br />
  To overcome this we created a smaller, faster, lightweight 3D printed grabbing claw with 2 degrees of freedom.
    <br />
 - Lightweight for fast arm rotation
    <br />
- Dual rotation for picking up elements of all orientations
  <br />
- Precise intaking
  <br />
- Substantially better grip
  <br />
        </div> 
        </div> 
        case "SLIDES":
          return <div className = "subsystem-grid-10195">
                <video autoPlay muted loop playsInline className="subsystem-video-10195">
        <source src={slidesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "subsystem-text-10195">
       To be able to reach high, valuable, targets such as the high bucket and high chamber we utilize our vertical slides.
<br />
       <br />
       - Utilizes dual SAR 230s
       <br />
       - Aluminum, lightweight
       <br />
       - Compact
       <br />
       - Utilizes ball bearings within aluminum compartments, allowing for low-friction extension to a certain length.
       <br />
       - Utilizes 350 pound Emma Kites Blue 1mm UHMWPE Micro Cord to allow for greater strength and durability
        </div>
        </div>;
          case "CLIMB":
          return <div className = "subsystem-grid-10195">
                <video autoPlay muted loop playsInline className="subsystem-video-10195">
        <source src={climbVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "subsystem-text-10195">
       
       <br />
Originally Used SAR330s to extend up and latch onto the bar which would then contract to lift up the bot
However, this v1 climb did not work because the sideplates prevented full retraction and interfered with wiring.

To overcome this we needed a completely different climb that wasn't based on a slide system.
 <br />
 <br />
One day, one of our members, Gunjan, asked
 <br />
  <br />
 <h3>
       "What if our robot became batman?"
       </h3>
 <br />
 This gave us our inspiritation to make a grappling hook climb system.
  <br />
   <br />
     -  Uses 2 servos to attach hooks onto bar in order to ensure consistency
       <br />
- Two 89 RPM motors then retract the spool connected to the hooks
<br />
- Robot then “grapples up” the bar
        </div>
            </div>;
      }
    })()}
        </div>
      )}
        <div className = "soar-container-10195">
          
         <img src={soar} alt="soar" className = "soar-10195" />


         <button
         style={{ cursor: 'pointer'}}
          className = "soar-arm-10195" 
          onClick={() =>handleClick('ARM')}>
            
          </button>
          <button
          style={{ cursor: 'pointer'}}
          className = "soar-slides-10195" 
          onClick={() =>handleClick('SLIDES')}>
            
          </button>

        <button
          className = "soar-climb-10195" 
          style={{ cursor: 'pointer' }}
          onClick={() =>handleClick('CLIMB')}>
            
          </button>

         </div>

    </div>
    </div>;
};

export default SOAR10195; // Ensure it's a default export