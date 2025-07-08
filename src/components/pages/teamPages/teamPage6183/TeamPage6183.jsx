import React, { useEffect, useState, useRef } from 'react';
import './TeamPage6183.css';
import tiktokLogo from '/assets/TikTokLogo.png';
import instagramLogo from '/assets/InstagramLogo.webp';
import gmailLogo from '/assets/GmailLogo.png';
import Gallery from '../../../gallery/Gallery';

import outreach1 from '/assets/FTC6183/Outreach1.png';
import outreach2 from '/assets/FTC6183/Outreach2.png';
import outreach3 from '/assets/FTC6183/Outreach3.png';
import outreach4 from '/assets/FTC6183/Outreach4.png';
import outreach5 from '/assets/FTC6183/Outreach6.png';

import comp1 from '/assets/FTC6183/Comp1.png';

/* edit gallery images as needed */
var outreachGallery = [
    outreach1,
    outreach2,
    outreach3,
    outreach4,
    outreach5
];

const TeamPage6183 = () => {
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
        <div className="team6183-team-container" ref={teamContainerRef}>
            <h1>FTC 6183 - Thunderducks</h1>
            <div className="team6183-social-links">
                <a href="https://www.tiktok.com/@ftc6183" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokLogo} alt="TikTok" />
                </a>
                <a href="https://www.instagram.com/ftc6183/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                <a href="mailto:ftc6183@ecgrobotics.org" target="_blank" rel="noopener noreferrer">
                    <img src={gmailLogo} alt="Gmail" />
                </a>
                {/* Add more social links as needed */}
            </div>
            <section className="team6183-overview">
                <h2>Overview</h2>
                <p> Welcome to the official team page for FTC 6183 – Thunder Ducks!
                We strive to grow as a team and exemplify the ideals of FIRST and gracious professionalism to the fullest extent. Not only do we focus on making the best robot each season through CAD, mechanical, and programming, but we are always on the lookout for ways to help impact our local and greater community in a positive manner. 
                Our team is looking forward to this upcoming season as a chance to learn new skill sets, teach kids and organizations in our community, and do our very best as a team to have the best season!
                    <br/>
                </p>
            </section>
            <img src={comp1} alt="Team Picture" className="team6183-team-photo" />
            <br/>
            <br/>
            <section className="team6183-history">
                <h2>Awards and Achievements</h2>
                <br/>
                <br/>
                <ul>
                    <li> <b> 2024-2025: INTO THE DEEP </b>
                        <ul>
                            <li>Ascend Leadership Academy-Saturday Connect Award Winner</li>
                            <li>Salem Academy-Sunday Connect Award Winner</li>
                        </ul>
                    </li>
                    <li> <b> 2023-2024: CENTERSTAGE </b>
                        <ul>
                            <li>NC FTC Southern Guilford High School Control Award 2nd Place </li>
                            <li>NC FTC Salem Academy Motivate Award Winner</li>
                        </ul>
                    </li>
                    <li> <b> 2022-2023: POWERPLAY </b>
                        <ul>
                            <li>NC FTC Salem Academy and College Design Award Winner</li>
                            <li>NC FTC Western MS Motivate Award 3rd Place, Design Award 2nd Place</li>
                        </ul>
                    </li>
                    <li> <b> 2021-2022: Freight Frenzy </b>
                        <ul>
                            <li>North Carolina State Championship Finalist Alliance 2nd Pick, Design Award 2nd Place</li>
                            <li>NC Qualifier (Elon) Design Award 2nd Place</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <section className="team6183-outreach">
                <h2>Outreach</h2>
                <div className="team6183-outreach-project">
                    <Gallery 
                        images={outreachGallery} 
                        width={Math.min(window.innerWidth, galleryWidth) * 0.3}
                        height={Math.min(window.innerWidth, galleryWidth) * 0.3 * 0.625}
                    />
                </div>
                {/* Add more outreach projects as needed */}
            </section>
        </div>
    );
};

export default TeamPage6183;