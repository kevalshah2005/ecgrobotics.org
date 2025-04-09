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

    return (
        <div className="team-container" ref={teamContainerRef}>
            <h1>FTC 5795 - Back to the Drawing Board</h1>
            <div className="social-links">
                <a href="https://youtube.com/FTC731" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://instagram.com/FTC731" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
            </div>
            <section className="overview">
                <h2>Who is FTC 5795?</h2>
                <p>
                    5795 is the third of four FTC teams sponsored by ECG Robotics in Greensboro, NC and was founded in 2013 as a team of freshmen who were interested in exploring the opportunities that FIRST had to offer. As our team name suggests, we are never afraid to go Back to the Drawing Board. Each year brings new robot designs and redesigns, outreach and more outreach, and both long-term and short-term goals.
                </p>
            </section>
            <section className="history">
                <h2>Team History</h2>
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
            <section className="team-members">
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
            <section className="outreach">
                <h2>Outreach</h2>
                <div className="outreach-project">
                    <h3>Robotics Workshop at Local School</h3>
                    <p>We conducted a robotics workshop at a local school to inspire young students to pursue STEM education and careers.</p>
                    <Gallery 
                        images={galleryImages} 
                        width={Math.min(window.innerWidth, galleryWidth) * 0.2}
                        height={Math.min(window.innerWidth, galleryWidth) * 0.2 * 0.625}
                    />
                </div>
                <div className="outreach-project">
                    <h3>Community Clean-Up Drive</h3>
                    <p>Our team organized a community clean-up drive to promote environmental awareness and responsibility.</p>
                    <Gallery 
                        images={galleryImages} 
                        width={Math.min(window.innerWidth, galleryWidth) * 0.2}
                        height={Math.min(window.innerWidth, galleryWidth) * 0.2 * 0.625}
                    />
                </div>
            </section>
            <section className="media">
                <h2>Media Gallery</h2>
                <Gallery 
                    images={galleryImages} 
                    width={Math.min(window.innerWidth, galleryWidth) * 0.3}
                    height={Math.min(window.innerWidth, galleryWidth) * 0.3 * 0.625}
                />
            </section>
        </div>
    );
};

export default TeamPage5795;
