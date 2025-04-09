import React, { useEffect, useState, useRef } from 'react';
import './TeamPage5795.css';
import youtubeLogo from '../../../../assets/logo731.webp';
import instagramLogo from '../../../../assets/logo731.webp';
import exampleGalleryImage from '../../../../assets/731_2019teampic.webp';
import Gallery from '../../../gallery/Gallery';

/* edit gallery images as needed */
var galleryImages = [
    exampleGalleryImage,
    exampleGalleryImage,
    exampleGalleryImage,
    exampleGalleryImage,
    exampleGalleryImage
];

const TeamPage5795 = () => {
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
        <div className="team5795-team-container" ref={teamContainerRef}> //make this into team5795-team-container
            <h1>FTC 5795 - Back to the Drawing Board</h1>
            <div className="social-links">
                <a href="https://www.youtube.com/@ftc5795" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/ftc5795/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                {/* Add more social links as needed */}
            </div>
            <section className="team5795-overview">
                <h2>Overview</h2>
                <p>Welcome to the team page for FTC 5795, also known as Back to the Drawing Board! We are a dedicated team of robotics enthusiasts who strive for excellence in every competition for the past 10 years. 
                    We strive to give both members and the community an experience of robotics from every angle--CAD, design, mechanical, program, and outreach. But we also try to make a greater impact on out community both
                locally and internationally, expanding the lessons of FIRST anywhere we can. Our team is looking forward to this upcoming season as a chance to learn new skill sets, teach kids and organizations in our community, and do our very best as a team to have the best season!</p>
            </section>
            <section className="team5795-history">
                <h2>Team History</h2>
                <p>FTC 5795 has a rich history of achievements and milestones. Our team has consistently performed well in various competitions, earning numerous awards and recognitions.</p>
                <ul>
                    <li>2024-2025: INTO THE DEEP
                        <ul>
                            <li>North Carolina Championship - Control award</li>
                            <li>Southern Guilford High School- Think award<li>
                        </ul>
                    </li>
                    <li>2024-2025: INTO THE DEEP
                        <ul>
                            <li>XYZ Qualifier - XYZ Award</li>
                            <li>Southern Guilford High School- Think award </li>
                        </ul>
                    </li>
                    <li>2024-2025: INTO THE DEEP
                        <ul>
                            <li>XYZ Qualifier - XYZ Award</li>
                            <li>XYZ Qualifier - XYZ Award</li>
                        </ul>
                    </li>
                    {/* Add more achievements as needed */}
                </ul>
            </section>
            <section className="team5795-outreach">
                <h2>Outreach</h2>
                <div className="team5795-outreach-project">
                    <h3>Robotics Workshop at Local School</h3>
                    <p>We conducted a robotics workshop at a local school to inspire young students to pursue STEM education and careers.</p>
                    <Gallery 
                        images={galleryImages} 
                        width = {Math.min(window.innerWidth, galleryWidth) * 0.2}
                        height = {Math.min(window.innerWidth, galleryWidth) * 0.2 * 0.625}
                    />
                </div>
                <div className="team5795-outreach-project">
                    <h3>Community Clean-Up Drive</h3>
                    <p>Our team organized a community clean-up drive to promote environmental awareness and responsibility.</p>
                    <Gallery 
                        images={galleryImages} 
                        width = {Math.min(window.innerWidth, galleryWidth) * 0.2}
                        height = {Math.min(window.innerWidth, galleryWidth) * 0.2 * 0.625}
                    />
                </div>
                {/* Add more outreach projects as needed */}
            </section>
            <section className="team5795-media">
                <h2>Media Gallery</h2>
                <Gallery 
                    images={galleryImages} 
                    width = {Math.min(window.innerWidth, galleryWidth) * 0.3}
                    height = {Math.min(window.innerWidth, galleryWidth) * 0.3 * 0.625}
                />
            </section>
        </div>
    );
};

export default TeamPage5795;
