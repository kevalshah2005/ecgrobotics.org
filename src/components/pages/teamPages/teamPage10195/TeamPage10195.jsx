import React, { useEffect, useState, useRef } from 'react';
import './TeamPage10195.css';

import exampleGalleryImage from '/assets/731_2019teampic.webp';
import IntoTheDeepPage10195 from './INTOTHEDEEP10195/IntoTheDeepPage10195'; // No curly braces
import DecodePage10195 from './DECODE10195/DecodePage10195'; // No curly braces

import teamLogo from '/assets/FTC10195/NightOwlsWebsiteLogoTemp.png';
import IntoTheDeepLogo from '/assets/FTC10195/IntoTheDeepLogo.webp';
import DecodeLogo from '/assets/FTC10195/DecodeLogo.webp';
import AutoSixSamp from '/assets/FTC10195/AutoSixSamp.mp4';
import youtubeLogo from '/assets/YoutubeLogo.webp';
import instagramLogo from '/assets/InstagramLogo.webp';
import gmailLogo from '/assets/GmailLogo.png';
import teamRoster from '/assets/FTC10195/NightOwlsTeamRoster.png';
import someWhereElse from '/assets/FTC10195/TeamSomewhereElse.jpg';
//team photos!!
import teamPhoto1 from '/assets/FTC10195/TeamAtStates.jpg';
import teamPhoto2 from '/assets/FTC10195/TeamMechNest.jpg';
import teamPhoto3 from '/assets/FTC10195/TeamVictory.jpg';
import teamPhoto4 from '/assets/FTC10195/TeamAtParkingLot.jpg';
import teamPhoto5 from '/assets/FTC10195/TeamOnBench.jpg';

import Gallery from '../../../gallery/Gallery';

/* edit gallery images as needed */

const yearData = {
  INTOTHEDEEP: "",
  DECODE: ""
};

const TeamPage10195 = () => {
    const teamContainerRef = useRef(null);
    const [galleryWidth, setGalleryWidth] = useState(0);
    const [activeYear, setActiveYear] = useState('DECODE');

    useEffect(() => {
        if (teamContainerRef.current) {
            const computedStyle = getComputedStyle(teamContainerRef.current);
            const maxWidth = parseFloat(computedStyle.maxWidth);
            setGalleryWidth(maxWidth);
        }
    }, []);

    console.log(galleryWidth);



    return (
          <div>
            <div className="video-background-10195">
      <video autoPlay muted loop playsInline className="video-10195">
        <source src={AutoSixSamp} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-10195"  />
    </div>
        <div className="team-container-10195" ref={teamContainerRef}>
        
            <h1 className = "team-logo-10195">
            <img src={teamLogo} alt="TeamLogo" className = "team-logo-10195" />
            </h1>
            <br />
                <br />
            <div className="social-links-10195">
                <a href="https://www.youtube.com/@ftc10195">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/ftc10195/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                <a href="mailto:ftc10195@ecgrobotics.org" target="_blank" rel="noopener noreferrer">
                    <img src={gmailLogo} alt="Gmail" />
                </a>
                {/* Add more social links as needed */}
            </div>
            <br />
                <br />
            <section className="overview-10195">
                <h2>Overview</h2>
                <p>Welcome to the official team page for FTC 10195 – Night Owls!
We are a powerhouse of innovation, teamwork, and cooperation. As a 10-year veteran team, we’ve spent the past decade sharpening our skills, pushing technological boundaries, and soaring to new heights across the globe.
Much like our nocturnal namesake, we are sharp-eyed, adaptive, and always on the hunt for excellence. Our commitment to FTC, creative problem-solving, and our initiatives have earned us 12+ awards.
With every season, we strive to innovate and dominate the competition while fostering a spirit of collaboration and ingenuity. Whether it’s through precise coding, strategic game play, or designing cutting-edge mechanisms, the Night Owls are always ready to take flight.
Join us as we continue to illuminate the future of robotics!</p>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={teamRoster} alt="teamRoster" className = "team-roster-10195" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="history-10195">
                <br />
                <p>Awards</p>
                <br />
                <br />
                <ul>
                    <li><b>2024-2025: INTO THE DEEP</b>
                        <ul>
                            <li>Salem Qualifier - Inspire Award 2nd Place</li>
                            <li>Sanford Qualifier - Inspire Award Winner & Finalist Aliance</li>
                            <li>NC State Championship - Innovate Award 2nd Place</li>
                            <li>LOKI - Intelligent Integration Award Winner</li>
                        </ul>
                    </li>
                    <li> <b>2023-2024: CENTERSTAGE</b>
                        <ul>
                            <li>Southern Guilford Qualifier - Motivate Award Winner</li>
                            <li>Sanford Qualifier - Connect Award Winner</li>
                            <li>NC State Championship - Motivate Award</li>
                        </ul>
                    </li>
                    <li><b> 2022-2023: POWERPLAY</b>
                        <ul>
                            <li>Smithfield Qualifier - Connect Award Winner</li>
                        </ul>
                    </li>
                     <li><b>2021-2022: Freight Frenzy</b>
                        <ul>
                            <li>Sanford Qualifier - Connect Award Winner</li>
                            <li>Remote 4 Qualifier - Control Award Winner & Inspire Award 3rd Place</li>
                        </ul>
                    </li>
                    <li><b>2020-2021: Ultimate Goal</b>
                        <ul>
                            <li>NC FTC 2 Qualifier - Motivate Award Winner & Inspire Award 3rd Place </li>
                            <li>NC FTC 9 Qualifier - Inspire Award Winner </li>
                        </ul>
                    </li>
                    {/* Add more achievements as needed */}
                </ul>
                <br />
                <br />
                 <img src={teamPhoto3} alt="teamPhoto3" className = "award-picture-10195" />
            </section>
           
           
        </div>

         <div className="team-container-10195" ref={teamContainerRef}>
               <h1>
                    Seasons
                </h1>

            <div className="timeline-container-10195">
                
      <div className="timeline-10195">
        {Object.keys(yearData).map((year) => (
          <div 
            key={year} 

            onClick={() => setActiveYear(year)}
          >
             {(() => {
      switch (year) {
        case "INTOTHEDEEP":
          return  <img src={IntoTheDeepLogo} alt="IntoTheDeepLogo" className = "timeline-seasons-10195" />;
        case "DECODE":
          return <img src={DecodeLogo} alt="DecodeLogo" className = "timeline-seasons-10195" />;
        default:
          return activeYear;
      }
    })()}

          </div>
        ))}
      </div>
      
      {/* Content Area */}
      <div className="timeline-content-10195">
          <h2>
    {(() => {
      switch (activeYear) {
        case "INTOTHEDEEP":
           return <IntoTheDeepPage10195 onClick/>;
          
        case "DECODE":
          return <DecodePage10195 onClick/>;
        default:
          return activeYear;
      }
    })()}

  </h2>
        <p>{
            yearData[activeYear]
        }</p>
      </div>
    </div>
        </div>
        </div>
    );
};

export default TeamPage10195;
