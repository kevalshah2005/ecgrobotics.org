import React, { useEffect, useState, useRef } from 'react';
import './TeamPage10195.css';

import exampleGalleryImage from '/assets/731_2019teampic.webp';

import teamLogo from '/assets/FTC10195/NightOwlsTempBanner.png';
import youtubeLogo from '/assets/YoutubeLogo.webp';
import instagramLogo from '/assets/InstagramLogo.webp';
import gmailLogo from '/assets/GmailLogo.webp';
import teamRoster from '/assets/FTC10195/NightOwlsTeamRoster.png';
import childrensMuseum from '/assets/FTC10195/ChildrensMuseum1.jpg';
import childrensMuseum2 from '/assets/FTC10195/ChildrensMuseum2.png';
import childrensMuseum3 from '/assets/FTC10195/ChildrensMuseum3.jpg';
import bricksboro1 from '/assets/FTC10195/Bricksboro1.png';
import bricksboro2 from '/assets/FTC10195/Bricksboro2.png';
import someWhereElse from '/assets/FTC10195/TeamSomewhereElse.jpg';
//team photos!!
import teamPhoto1 from '/assets/FTC10195/TeamAtStates.jpg';
import teamPhoto2 from '/assets/FTC10195/TeamMechNest.jpg';
import teamPhoto3 from '/assets/FTC10195/TeamVictory.jpg';
import teamPhoto4 from '/assets/FTC10195/TeamAtParkingLot.jpg';
import teamPhoto5 from '/assets/FTC10195/TeamOnBench.jpg';

import Gallery from '../../../gallery/Gallery';

/* edit gallery images as needed */
var outreachGallery = [
    childrensMuseum,
    childrensMuseum2,
    childrensMuseum3,
    bricksboro1,
    bricksboro2
];
var galleryImages = [
    teamPhoto1,
    teamPhoto2,
    teamPhoto3,
    teamPhoto4,
    teamPhoto5
];

const TeamPage10195 = () => {
    const teamContainerRef = useRef(null);
    const [galleryWidth, setGalleryWidth] = useState(0);

    useEffect(() => {
        if (teamContainerRef.current) {
            const computedStyle = getComputedStyle(teamContainerRef.current);
            const maxWidth = parseFloat(computedStyle.maxWidth);
            setGalleryWidth(maxWidth);
        }
    }, []);

    console.log(galleryWidth);

    return (
        <div className="team-container" ref={teamContainerRef}>
            <h1 className = "team-logo">
            <img src={teamLogo} alt="TeamLogo" className = "team-logo" />
            </h1>
            <br />
                <br />
            <div className="social-links">
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
            <section className="overview">
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
            <img src={teamRoster} alt="teamRoster" className = "team-roster" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section className="history">
                <h2>Team History</h2>
                <br />
                <p>FTC 10195 has soared through achievements and milestones. Our team has consistently performed well in various competitions, earning numerous awards and recognitions. Here are some of our major awards we've won over the years.</p>
                <br />
                <br />
                <ul>
                    <li><b>2024-2025: INTO THE DEEP</b>
                        <ul>
                            <li>Salem Qualifier - Inspire Award 2nd Place</li>
                            <li>Sanford Qualifier - Inspire Award Winner & Finalist Aliance</li>
                            <li>NC State Championship - Innovate Award 2nd Place</li>
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
            </section>
            <section className="outreach">
                <h2>Outreach</h2>
                <div className="outreach-project">
                    <Gallery 
                        images={outreachGallery} 
                        width = {Math.min(window.innerWidth, galleryWidth) * 0.2}
                        height = {Math.min(window.innerWidth, galleryWidth) * 0.2 * 0.625}
                    />
                </div>
            </section>
            <section className="media">
                <h2>Competitions</h2>
                <Gallery 
                    images={galleryImages} 
                    width = {Math.min(window.innerWidth, galleryWidth) * 0.3}
                    height = {Math.min(window.innerWidth, galleryWidth) * 0.3 * 0.625}
                />
            </section>
        </div>
    );
};

export default TeamPage10195;
