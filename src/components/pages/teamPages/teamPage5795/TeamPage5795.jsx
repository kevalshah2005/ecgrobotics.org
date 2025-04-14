import React, { useEffect, useState, useRef } from 'react';
import './TeamPage5795.css';
import youtubeLogo from '../../../../assets/logo5795.webp';
import instagramLogo from '../../../../assets/instagramLogo.webp';
import exampleGalleryImage from '../../../../assets/731_2019teampic.webp';
import Gallery from '../../../gallery/Gallery';

const TeamPage5795 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="team5795-container" ref={containerRef}>
      <div className="team5795-content">
        <header className="team5795-header">
          <img src={youtubeLogo} alt="FTC 5795 Logo" className="team5795-logo" />
          <h1>FTC 5795 - Back to the Drawing Board</h1>
          <div className="team5795-socials">
            <a href="https://www.instagram.com/ftc5795/" target="_blank" rel="noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </div>
        </header>

        <section className="team5795-section">
          <h2>About Us</h2>
          <p>
            Based in Greensboro, NC, we’ve been designing, engineering, and competing since 2012.
            We’re passionate about robotics, collaboration, and bringing innovation to the FIRST community.
          </p>
        </section>

        <section className="team5795-section">
          <h2>Outreach</h2>
          <p>
            Our team mentors FLL teams, hosts community events, and actively supports STEM education across the region.
          </p>
        </section>

        <section className="team5795-section">
          <h2>Awards</h2>
          <ul>
            <li>2023-2024: NC State Championship Finalists</li>
            <li>2022-2023: Inspire Award - Guilford Qualifier</li>
            <li>2021-2022: Winning Alliance Captain - NC Regionals</li>
            <li>2020-2021: Think Award - Virtual League</li>
            <li>2019-2020: Motivate Award - Regionals</li>
            <li>And many more...</li>
          </ul>
        </section>

        <section className="team5795-gallery">
          <h2>Gallery</h2>
          <Gallery images={[exampleGalleryImage]} />
        </section>
      </div>
    </div>
  );
};

export default TeamPage5795;