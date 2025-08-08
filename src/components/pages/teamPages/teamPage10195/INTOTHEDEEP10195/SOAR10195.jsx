import React, { useEffect, useState, useRef } from 'react';
import './IntoTheDeepPage10195.css';


import soar from '/assets/FTC10195/SOAR.png';
import camera from '/assets/FTC10195/Camera1.png';
import camera2 from '/assets/FTC10195/Camera2.png';
import camera3 from '/assets/FTC10195/Camera3.png';
import camera4 from '/assets/FTC10195/Camera4.png';
import camera5 from '/assets/FTC10195/Camera5.png';
import auto1 from '/assets/FTC10195/Auto1.png';
import defense from '/assets/FTC10195/Defense1.png';

import arm from '/assets/FTC10195/Arm1.jpg';


import climbVideo from '/assets/FTC10195/ClimbVideo.mp4';
import autoVideo from '/assets/FTC10195/AutoFiveSpec.mp4';
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
    setSubsystem('NONE');
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
         <h2>
        Click on a highlighted part of a bot to learn more!
        </h2>
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
    <br />
              Extendo
              </h3>

Allows for greater reach into the submersible + quicker scoring into the high basket
  <br />
  - Made of aluminum
    <br />
    - Utilizes SAR 320 Slides
     <br />
    - Utilizes a linkage system + an AXON to extend the slides

  <h3>
    <br />
              Claw
              </h3>
              Originally utilized a double roller active intake. However, it was too heavy, leading to support pieces breaking and arm struggling to rotate
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
        return;
        case "SLIDES":
          return <div className = "subsystem-grid-10195">
                <video autoPlay muted loop playsInline className="subsystem-video-10195">
        <source src={slidesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "subsystem-text-10195">
         <h3>
       High Basket + High Chamber
       </h3>
       <br />
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
       - Two 435 RPM Motors for greater torque
       <br />
       - Utilizes 350 pound Emma Kites Blue 1mm UHMWPE Micro Cord to allow for greater strength and durability
<br />
<br />
         <h3>
       Modular with the Rotation Mechanism
       </h3>
        <br />
       Allows entire arm to be raised, allowing the same arm that intakes to be used for scoring

        </div>
        </div>;
          case "CLIMB":
          return <div className = "subsystem-grid-10195">
                <video autoPlay muted loop playsInline className="subsystem-video-10195">
        <source src={climbVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "subsystem-text-10195">
       
 <h3>
       Level 2 Ascent about 5 - 6 seconds
       </h3>
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
       
 <h3>
        PROGRAMMING
        </h3>
          <br />
          <br />
    <h2>
           Camera Vision
      </h2>
        <div className = "outreach-grid-10195">
      <img src={camera} className = "code-picture-10195" alt="cam1" />
        <div className = "code-text-10195">
          <h2>
          To overcome the randomness of the submersible, we use a webcam that can automatically detect samples, move the robot to them, and rotate the claw to the correct angle. Our custom vision pipeline uses a four-step process to achieve this.
        </h2>
          </div>
          </div>

  <div className = "outreach-grid-10195">
      <img src={camera2} className = "code-picture-10195" alt="cam2" />
        <div className = "code-text-10195">
           <h2>
            #1: Detecting Samples
            </h2>
            We use a color blob locator and cluster colored pixels to form ‘blobs’, then filter them by size to identify valid targets.
        
          </div>
          </div>

           <div className = "outreach-grid-10195">
      <img src={camera3} className = "code-picture-10195" alt="cam3" />
        <div className = "code-text-10195">
           <h2>
            #2: Selecting a target
            </h2>
           Using the centroid formula shown, we calculate each sample’s distance from the camera center and select the closest one for the robot to approach.
        
          </div>
          </div>

<div className = "outreach-grid-10195">
          <img src={camera4} className = "code-picture-10195" alt="cam4" />
        <div className = "code-text-10195">
           <h2>
            #3: Moving
            </h2>
         
With the target identified, we calculate the y-error and x-error from the sample and the camera center. We then use a PID controller to convert the x-error and y-error into vectors that the drivetrain can use. We repeat this until the distance from the camera center and the sample is within tolerance.
        
          </div>
          </div>

          <div className = "outreach-grid-10195">
          <img src={camera5} className = "code-picture-10195" alt="cam5" />
        <div className = "code-text-10195">
           <h2>
            #4: Rotating
            </h2>
         
The system identifies one long side of the sample’s rectangular outline to calculate its angle. Then it converts that angle into a servo position that the claw can rotate to.     
          </div>
          </div>
  <h2>
           Autonomous 
      </h2>
#1 OPR in NC, #142 in World, 98th percentile
       <div className = "outreach-grid-10195">
          <img src={auto1} className = "code-picture-10195" alt="autoSamp" />
        <div className = "code-text-10195">
           <h2>
            Six Sample Autonomous (96 Points)
            </h2>
            Utilizes gamepad inputs prior to autonomous to select two samples for the robot to grab from the submersible. Driver uses the dpad to control direction (x inches up/down, y inches left/right), left trigger to select the color of the sample, and left/right bumper to select which cycle it is in (5th or 6th)
           <br />
            <a href="https://www.youtube.com/shorts/R2aEgA65bRc">
            Click here to watch
            </a>
          </div>
          </div>


 <div className = "outreach-grid-10195">
  
        <div className = "code-text-10195">
           <h2>
            Five Specimen + Park Autonomous (103 Points)
            </h2>
            First iteration was a 4 specimen autonomous. The 4 Specimen autonomous utilized the robots drivetrain to push pieces to the human player. However, we realized our robot was too slow at strafing so we changed the method to retrive pieces. Instead of pushing we decided to use the arm to grab and deposit pieces to the human player. Due to this we were able to make a 5 specimen autonomous and still have time to park.
            <br />
             <a href="https://www.youtube.com/watch?v=b8_jd_vLNhU">
            Click here to watch
            </a>
          </div>
          </div>

  <h2>
           Tele Op 
      </h2>
       #704 in World, 90th percentile
<div className = "outreach-grid-10195">
  
        <div className = "code-text-10195">
           <h2>
            14 Sample + Climb (127 Points in TeleOp + 96 in Auto = 223 Points Total)
            </h2>
              During State Championships, we relied on using a secondary driver to control the rotation of the claw. It worked but was not efficient and our best tele op for sample was 8. After utilizing camera vision and adding other efficiencies, such as extending the arm for basket scoring, we were able to increase our sample tele op to 14 samples.
             <br />
             <a href="https://www.youtube.com/watch?v=AqtvNAsqsFQ">
            Click here to watch
            </a>
          </div>
          </div>



          <div className = "outreach-grid-10195">
  
        <div className = "code-text-10195">
           <h2>
            8 Spec + 1 Samp + Climb (103 Points in TeleOp + 103 in Auto = 206 Points Total)
            </h2>
              We prefered to do 8 specimen and then 1 sample rather than 9 specimen because we found that sometimes doing 9 specimen would not leave us consistently enough time left to climb. If we are low on time then it is easy to score a sample in the time in between, but scoring a specimen means going back to the human player and cycling. Unfortunatly we do not have a video.
             <br />
          </div>
          </div>

           <div className = "outreach-grid-10195">
          <img src={defense} className = "code-picture-10195" alt="Defense1" />
        <div className = "code-text-10195">
           <h2>
           Bot on Bot interactions
            </h2>
            After state championship we realized specimen scoring was partially vulnernable to blocking. To counteract bots from pushing around ours, we added a PID locking mechanism + a "foot" which is a servo that extends a break pad to anchor the robot to the ground. With these features our robot is unable to be pushed around by other bots. Especially useful during the Carolina Premier Event to block opponents from scoring Pearls.
           <br />
          </div>
          </div>

    </div>
    </div>;
};

export default SOAR10195; // Ensure it's a default export