import React, { useEffect, useState, useRef } from 'react';
import './TeamPage6183.css';
import DecodePage6183 from './DECODE6183/DecodePage6183'; // Correct import
import tiktokLogo from '/assets/TikTokLogo.png';
import instagramLogo from '/assets/InstagramLogo.webp';
import gmailLogo from '/assets/GmailLogo.png';

import outreach1 from '/assets/FTC6183/Outreach1.png';
import outreach2 from '/assets/FTC6183/Outreach2.png';
import outreach3 from '/assets/FTC6183/Outreach3.png';
import outreach4 from '/assets/FTC6183/Outreach4.png';
import outreach5 from '/assets/FTC6183/Outreach6.png';

import teamPhoto from '/assets/FTC6183/Comp1.png';
import teamLogo from '/assets/logo6183.webp';
import DecodeLogo from '/assets/FTC10195/DecodeLogo.webp';

const outreachGallery = [outreach1, outreach2, outreach3, outreach4, outreach5];

const yearData6183 = {
    DECODE: "", // placeholder, can add text if needed
};

const members = [
    { name: "Luke St. Clair", roles: ["Co-Captain", "Mechanical", "Fabrication", "Outreach", "Lead Mechanical"], grade: "Junior", registration: "Returning" },
    { name: "Cheick Amadou", roles: ["Co-Captain", "Programming", "Lead Programming", "Outreach"], grade: "Senior", registration: "Returning" },
    { name: "Xander Martinez", roles: ["Mechanical", "Website Programming", "Fabrication"], grade: "Junior", registration: "Recruited" },
    { name: "Kristian Cook", roles: ["Programming", "Website Programming"], grade: "Sophomore", registration: "Recruited" },
    { name: "Samy Gaire", roles: ["Outreach", "Mechanical"], grade: "Sophomore", registration: "Returning" },
    { name: "Kingston Morgan", roles: ["Programming"], grade: "Senior", registration: "Recruited" },
    { name: "Aryan Ranabhat", roles: ["Mechanical"], grade: "Freshman", registration: "Drafted" },
    { name: "Rudra Patel", roles: ["Outreach", "Mechanical", "Media", "Graphic Design"], grade: "Freshman", registration: "Drafted" },
    { name: "Ernest Hu", roles: ["Mechanical"], grade: "Sophomore", registration: "Switched" },
    { name: "Micah Edwards", roles: ["Outreach", "Graphic Design", "Media", "Mechanical"], grade: "Senior", registration: "Recruited" },
    { name: "Pralove Shah", roles: ["Programming"], grade: "Freshman", registration: "Recruited" },
    { name: "Arden Bankman", roles: ["Mechanical"], grade: "Freshman", registration: "Recruited" },
    { name: "Ronith Budde", roles: ["Mechanical"], grade: "Freshman", registration: "Recruited" },
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

    // Group members by their primary role only (first role)
    const coCaptains = members.filter(m => m.roles[0] === "Co-Captain");
    const mechanical = members.filter(
        m => m.roles[0] === "Mechanical" && !m.roles.includes("Co-Captain")
    );
    const programming = members.filter(
        m => m.roles[0] === "Programming" && !m.roles.includes("Co-Captain")
    );
    const outreach = members.filter(
        m => m.roles[0] === "Outreach" && !m.roles.includes("Co-Captain")
    );

    // Keep a fallback for other roles (media, outreach, etc.)
    const others = members.filter(
        m =>
            !m.roles.includes("Co-Captain") &&
            !m.roles.includes("Mechanical") &&
            !m.roles.includes("Programming") &&
            !m.roles.includes("Outreach")
    );

    return (
        <div className="team6183-page">
            <div className="team6183-team-container" ref={teamContainerRef}>
                <h1>Triple Paradox - FTC 6183</h1>

                {/* Logo */}
                <div className="team6183-logo-container">
                    <img src={teamLogo} alt="Triple Paradox Logo" className="team6183-logo" />
                </div>

                {/* Social Links */}
                <div className="team6183-social-links">
                    <a href="https://www.tiktok.com/@ftc6183" target="_blank" rel="noopener noreferrer">
                        <img src={tiktokLogo} alt="TikTok" />
                    </a>
                    <a href="https://www.instagram.com/ftc6183/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram" />
                    </a>
                    <a href="mailto:ftc6183@ecgrobotics.org">
                        <img src={gmailLogo} alt="Gmail" />
                    </a>
                </div>

                {/* Awards (moved to top) */}
                <section className="team6183-history">
                    <h2>Awards and Achievements</h2>
                    <ul>
                        <li><b>2024-2025: INTO THE DEEP</b>
                            <ul>
                                <li>Ascend Leadership Academy - Saturday Connect Award Winner</li>
                                <li>Salem Academy - Sunday Connect Award Winner</li>
                            </ul>
                        </li>
                        <li><b>2023-2024: CENTERSTAGE</b>
                            <ul>
                                <li>NC FTC Southern Guilford HS Control Award 2nd Place</li>
                                <li>NC FTC Salem Academy Motivate Award Winner</li>
                            </ul>
                        </li>
                        <li><b>2022-2023: POWERPLAY</b>
                            <ul>
                                <li>NC FTC Salem Academy Design Award Winner</li>
                                <li>NC FTC Western MS Motivate 3rd, Design 2nd</li>
                            </ul>
                        </li>
                        <li><b>2021-2022: FREIGHT FRENZY</b>
                            <ul>
                                <li>NC State Championship Finalist Alliance 2nd Pick, Design 2nd</li>
                                <li>NC Qualifier (Elon) Design Award 2nd Place</li>
                            </ul>
                        </li>
                    </ul>
                </section>

                {/* Overview */}
                <section className="team6183-overview centered">
                    <h2>Overview</h2>
                    <p className="overview-text">
                        Welcome to the official team page for FTC 6183 – Triple Paradox.
                        We strive to grow as a team and exemplify the ideals of FIRST and gracious professionalism to the fullest extent. Not only do we focus on making the best robot each season through CAD, mechanical, and programming, but we are always on the lookout for ways to help impact our local and greater community in a positive manner.
                        Our team is looking forward to this upcoming season as a chance to learn new skill sets, teach kids and organizations in our community, and do our very best as a team to have the best season!
                    </p>
                </section>

                {/* Team Photo */}
                <div className="team6183-photo-container">
                    <img src={teamPhoto} alt="Team Picture" className="team6183-team-photo-small" />
                </div>


                {/* Members */}
                <section className="team6183-members">
                    <h2>Team Members</h2>

                    {/* Co-Captains */}
                    <div className="team6183-member-grid co-captains">
                        {coCaptains.map((member, index) => (
                            <div key={index} className="team6183-member-card">
                                <div className="member-portrait">{member.name.charAt(0)}</div>
                                <h3>{member.name}</h3>
                                <p>{member.roles.join(", ")}</p>
                                <p><b>Grade:</b> {member.grade}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mechanical */}
                    <h3>Mechanical</h3>
                    <div className="team6183-member-grid">
                        {mechanical.map((member, index) => (
                            <div key={index} className="team6183-member-card">
                                <div className="member-portrait">{member.name.charAt(0)}</div>
                                <h3>{member.name}</h3>
                                <p>{member.roles.join(", ")}</p>
                                <p><b>Grade:</b> {member.grade}</p>
                            </div>
                        ))}
                    </div>

                    {/* Programming */}
                    <h3>Programming</h3>
                    <div className="team6183-member-grid programming">
                        {programming.map((member, index) => (
                            <div key={index} className="team6183-member-card">
                                <div className="member-portrait">{member.name.charAt(0)}</div>
                                <h3>{member.name}</h3>
                                <p>{member.roles.join(", ")}</p>
                                <p><b>Grade:</b> {member.grade}</p>
                            </div>
                        ))}
                    </div>
                    {/* Outreach / Other Roles */}
                    <h3>Outreach</h3>
                    <div className="team6183-member-grid outreach">
                        {outreach.map((member, index) => (
                            <div key={index} className="team6183-member-card">
                                <div className="member-portrait">{member.name.charAt(0)}</div>
                                <h3>{member.name}</h3>
                                <p>{member.roles.join(", ")}</p>
                                <p><b>Grade:</b> {member.grade}</p>
                            </div>
                        ))}
                    </div>

                </section>
            </div>
            <div className="timeline-container-6183">
                <h2>Season</h2>
                <div className="timeline-6183">
                    <div className="timeline-seasons-6183"> {/* Add this wrapper */}
                        <img
                            src={DecodeLogo}
                            alt="DecodeLogo"
                            className="timeline-seasons-picture-6183"
                        />
                    </div>
                </div>

                <div className="timeline-content-6183">
                    <DecodePage6183 />
                    {yearData6183["DECODE"] && <p>{yearData6183["DECODE"]}</p>}
                </div>
            </div>

        </div>
    );
};

export default TeamPage6183;