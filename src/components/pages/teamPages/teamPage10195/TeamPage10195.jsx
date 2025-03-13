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
                <a href="https://youtube.com/FTC731" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
                <a href="https://instagram.com/FTC731" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                {/* Add more social links as needed */}
            </div>
            <section className="overview">
                <h2>Overview</h2>
                <p>Welcome to the team page for FTC 731, also known as Wannabee Strange. We are a dedicated team of robotics enthusiasts who strive for excellence in every competition.</p>
            </section>
            <section className="history">
                <h2>Team History</h2>
                <p>FTC 731 has a rich history of achievements and milestones. Our team has consistently performed well in various competitions, earning numerous awards and recognitions.</p>
                <ul>
                    <li>2024-2025: INTO THE DEEP
                        <ul>
                            <li>XYZ Qualifier - XYZ Award</li>
                            <li>XYZ Qualifier - XYZ Award</li>
                        </ul>
                    </li>
                    <li>2024-2025: INTO THE DEEP
                        <ul>
                            <li>XYZ Qualifier - XYZ Award</li>
                            <li>XYZ Qualifier - XYZ Award</li>
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