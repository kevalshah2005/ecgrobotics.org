import React, { useEffect, useState, useRef } from 'react';
import './TeamPage10195.css';
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
            <h1>FTC 10195 - Night Owls</h1>
            <div className="social-links">
                <a href="https://www.youtube.com/@ftc10195">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://www.instagram.com/ftc10195/?hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                {/* Add more social links as needed */}
            </div>
            <section className="overview">
                <h2>Overview</h2>
                <p>Welcome to the official team page for FTC 10195 – Night Owls!
We are a powerhouse of innovation, teamwork, and cooperation. As a 10-year veteran team, we’ve spent the past decade sharpening our skills, pushing technological boundaries, and soaring to new heights across the globe.
Much like our nocturnal namesake, we are sharp-eyed, adaptive, and always on the hunt for excellence. Our commitment to FTC, creative problem-solving, and our initiatives have earned us 12+ awards.
With every season, we strive to innovate and dominate the competition while fostering a spirit of collaboration and ingenuity. Whether it’s through precise coding, strategic game play, or designing cutting-edge mechanisms, the Night Owls are always ready to take flight.
Join us as we continue to illuminate the future of robotics!</p>
            </section>
            <section className="history">
                <h2>Team History</h2>
                <p>FTC 10195 has soared through achievements and milestones. Our team has consistently performed well in various competitions, earning numerous awards and recognitions. Here are some of our major awards we've won over the years.</p>
                <ul>
                    <li>2024-2025: INTO THE DEEP
                        <ul>
                            <li>Salem Qualifier - Inspire Award 2nd Place</li>
                            <li>Sanford Qualifier - Inspire Award Winner & Finalist Aliance</li>
                        </ul>
                    </li>
                    <li>2023-2024: CENTERSTAGE
                        <ul>
                            <li>Southern Guilford Qualifier - Motivate Award Winner</li>
                            <li>Sanford Qualifier - Connect Award Winner</li>
                            <li>NC State Championship - Motivate Award</li>
                        </ul>
                    </li>
                    <li>2022-2023: POWERPLAY
                        <ul>
                            <li>Smithfield Qualifier - Connect Award Winner</li>
                        </ul>
                    </li>
                     <li>2021-2022: Freight Frenzy
                        <ul>
                            <li>Sanford Qualifier - Connect Award Winner</li>
                            <li>Remote 4 Qualifier - Control Award Winner & Inspire Award 3rd Place</li>
                        </ul>
                    </li>
                    <li>2020-2021: Ultimate Goal
                        <ul>
                            <li>NC FTC 2 Qualifier - Motivate Award Winner & Inspire Award 3rd Place </li>
                            <li>NC FTC 9 Qualifier - Inspire Award Winner </li>
                        </ul>
                    </li>
                    {/* Add more achievements as needed */}
                </ul>
            </section>
            <section className="outreach">
                <h2>Outreach</h2>
                <div className="outreach-project">
                    <h3>Robotics Workshop at Local School</h3>
                    <p>We conducted a robotics workshop at a local school to inspire young students to pursue STEM education and careers.</p>
                    <Gallery 
                        images={galleryImages} 
                        width = {Math.min(window.innerWidth, galleryWidth) * 0.2}
                        height = {Math.min(window.innerWidth, galleryWidth) * 0.2 * 0.625}
                    />
                </div>
                <div className="outreach-project">
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
            <section className="media">
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

export default TeamPage10195;
