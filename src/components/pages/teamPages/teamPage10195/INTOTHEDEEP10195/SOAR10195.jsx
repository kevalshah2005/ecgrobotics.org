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
  }else{
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
        eeee
        </div> 
        </div> 
        case "SLIDES":
          return <div className = "subsystem-grid-10195">
                <video autoPlay muted loop playsInline className="subsystem-video-10195">
        <source src={slidesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "subsystem-text-10195">
        eeee
        </div>
        </div>;
          case "CLIMB":
          return <div className = "subsystem-grid-10195">
                <video autoPlay muted loop playsInline className="subsystem-video-10195">
        <source src={climbVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "subsystem-text-10195">
        eeee
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