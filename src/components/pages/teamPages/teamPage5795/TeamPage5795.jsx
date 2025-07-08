import React, { useEffect, useRef } from 'react';
import './TeamPage5795.css';
import youtubeLogo from '/assets/logo5795.webp';
import instagramLogo from '/assets/InstagramLogo.webp';
import GalleryImage1 from '/assets/FTC5795/outreach1.webp';
import GalleryImage2 from '/assets/FTC5795/outreach2.jpg';
import GalleryImage3 from '/assets/FTC5795/outreach3.webp';
import teamPhoto from '/assets/FTC5795/TEAM.webp';
import backgroundVideo from '/assets/FTC5795/IMG_8266.mp4';
import Gallery from '../../../gallery/Gallery';

const TeamPage5795 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  // Team members data
  const teamMembers = [
    { name: "Suhaan Temkar", role: "Team Captain - code ★" },
    { name: "Ishaan Sinha", role: "Lead outreach-mechanical" },
    { name: "Ohm Patel", role: "outreach/build" },
    { name: "Rishi K", role: "Build Lead" },
    { name: "Nick J", role: "Programming Lead" },
    { name: "Nayani Annamalai", role: "Build/Outreach" },
  ];

  return (
    <div className="team5795-container">
      <div className="team5795-video-background">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="team5795-video"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="team5795-video-overlay"></div>
      </div>
      
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
          Based in Greensboro, NC, FTC Team 5795 – Back to the Drawing Board – has been designing, engineering, and competing in robotics since 2012. Over the years, we’ve grown from a group of curious builders to a close-knit team of innovators, coders, tinkerers, and problem-solvers who are passionate about learning and pushing the limits of what’s possible.

We take pride not just in building competitive robots, but in building a community around STEM. Whether it’s mentoring FLL teams, leading outreach initiatives, or collaborating with other robotics programs across the state, we strive to make a lasting impact. Every season is a new opportunity for us to grow, challenge ourselves, and bring creativity and innovation to the FIRST Tech Challenge community.
          </p>
        </section>

        {/* Team Photo Section */}
        <section className="team5795-photo-section">
          <img src={teamPhoto} alt="FTC 5795 Team Photo" className="team5795-team-photo" />
        </section>

        {/* Team Members Section with Robotics Style */}
        <section className="team5795-section team5795-members-section">
          <h2>Our Team</h2>
          <div className="team5795-members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team5795-member-card">
                <div className="team5795-member-name">{member.name}</div>
                <div className="team5795-member-role">
                  <span className="team5795-role-icon">⚙️</span>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="team5795-section">
          <h2>Awards</h2>
          <ul>
            <li>2023-2024: NC State Championship - Control Award</li>
            <li>2022-2023: NC State Championship - Control Award 3rd place </li>
            <li>2021-2022: NC State Championship - Control Award 3rd place</li>
            <li>2020-2021: NC State Championship - Motivate Award</li>
            <li>2019-2020: NC State Championship - Motivate Award</li>
          </ul>
        </section>

        <section className="team5795-section">
          <h2>Outreach</h2>
          <p>
            Our team mentors FLL teams, hosts community events, and actively supports STEM education across the region.
          </p>
        </section>

        <section className="team5795-gallery">
          <Gallery images={[GalleryImage1, GalleryImage2, GalleryImage3]} />
        </section>
      </div>
    </div>
  );
};

export default TeamPage5795;