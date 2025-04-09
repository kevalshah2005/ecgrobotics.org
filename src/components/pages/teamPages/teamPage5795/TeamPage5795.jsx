import React, { useEffect, useState, useRef } from 'react';
import './TeamPage5795.css';
import youtubeLogo from '../../../../assets/YoutubeLogo.webp';
import instagramLogo from '../../../../assets/InstagramLogo.webp';
import image1 from '../../../../assets/FTC5795/hardwork.jpg';
import image2 from '../../../../assets/FTC5795/table.jpg';
import image3 from '../../../../assets/5795_working.webp';
import image4 from '../../../../assets/FTC5795/botdemo.jpg';
import image5 from '../../../../assets/FTC5795/ahmed.jpg';
import Gallery from '../../../gallery/Gallery';
import teampic from '../../../../assets/FTC5795/ftc5795teampic.jpg';
import teamlogo from '../../../../assets/FTC5795/5795NewLogoFinal.png';
/* edit gallery images as needed */
var galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5, 
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

    return (
        <div className="team5795-team-container" ref={teamContainerRef}>
            <h1>FTC 5795 - Back to the Drawing Board</h1>
            <div className="team5795-social-links">
                <a href="https://www.youtube.com/@ftc5795" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/ftc5795/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
            </div>
            <div className="team5795-image-container">
            <img 
    src={teampic} 
    alt="Team 5795 Group Photo" 
    style={{
        width: '80%',
        maxWidth: '800px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        marginBottom: '2rem' // <- space
    }}
/>
            </div>
            <section className="team5795-overview">
                <h2>Who is FTC 5795?</h2>
                <p>
                    
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: 0 }}>
    <img 
        src={teamlogo} 
        alt="Team Logo" 
        style={{ 
            width: '300px',  // Image size
            height: 'auto', 
            float: 'left', 
            marginRight: '40px',  // More space between the image and the text
            marginBottom: '20px', // More space below the image
            padding: '15px' // Optional padding around the image
        }} 
    />
    <p style={{ 
        fontSize: '2rem',  // Increased font size for more emphasis
        lineHeight: '1.8',   // Adjusted line height for better readability
        color: 'inherit',    // Keeps the existing color (inherits from parent)
        maxWidth: '800px',   // Optional: Limit text width for better layout
    }}>
        5795 is the third of four FTC teams sponsored by ECG Robotics in Greensboro, NC and was founded in 2013 as a team of freshmen who were interested in exploring the opportunities that FIRST had to offer. As our team name suggests, we are never afraid to go Back to the Drawing Board. Each year brings new robot designs and redesigns, outreach and more outreach, and both long-term and short-term goals.
    </p>
</div>
                
            </section>
            <section className="team5795-history">
                <h2 style={{ marginBottom: '1.5rem' }}>Team History</h2>
                    <ul>
                    <li>2014 BLOCK PARTY! - Control Award at Southern Guilford Qualifier</li>
                    <li>2015 CASCADE EFFECT - 2nd Place Alliance Team</li>
                    <li>2016 FIRST RES-Q
                        <ul>
                            <li>Inspire Award at all qualifiers and state competition</li>
                            <li>Finalist Alliance 2nd Pick at States</li>
                            <li>Winning Alliance 2nd Pick at Southern Super-Regional</li>
                            <li>Advanced to Worlds, placed 30th in Edison Division (Top 2% Overall)</li>
                        </ul>
                    </li>
                    <li>2017 VELOCITY VORTEX
                        <ul>
                            <li>Think Award and Inspire Award at all qualifiers and state competition</li>
                            <li>2nd Place Inspire and 1st Place Rockwell Collins Innovate Award at Super-Regionals</li>
                            <li>Worlds: Promote Award and PTC Design Award Finalist, 13th in division</li>
                        </ul>
                    </li>
                    <li>2024 INTO THE DEEP - Control Award 1st at States</li>
                </ul>
            </section>
            <section className="team5795-member-section">
                <h2>Team Members</h2>
                <ul>
                    <li>Suhaan - Captain & Programming</li>
                    <li>Nick - Programming Lead</li>
                    <li>Rishi - Co-Mechanical Lead</li>
                    <li>Achint - Co-Mechanical Lead</li>
                    <li>Ohm - Mechanical</li>
                    <li>Nayani - Programming</li>
                    <li>Ahmed - Mechanical</li>
                </ul>
            </section>
            <section className="team5795-outreach">
                <h2>Outreach</h2>
                <div className="team5795-outreach-project">
                    <h3>India Initiative</h3>
                    <p>We conducted a 12 week online course to help kids in India learn about mechatronics and programming concepts.</p>
                </div>
            </section>
            <section className="team5795-media">
                <h2>Media Gallery</h2>
                <Gallery 
    images={galleryImages} 
    width={Math.min(window.innerWidth, galleryWidth) * 0.3}
    height={Math.min(window.innerWidth, galleryWidth) * 0.3 * 0.85} // Increased multiplier to make images taller
/>
            </section>
        </div>
    );
};

export default TeamPage5795;
