import React from 'react';
import './TeamPage5795.css';
import teamLogo from '/assets/logo5795.webp';
import instagramLogo from '/assets/InstagramLogo.webp';
import youtubeLogo from '/assets/YoutubeLogo.webp';
import tiktokLogo from '/assets/TikTokLogo.png';
import GalleryImage1 from '/assets/FTC5795/outreach1.jpg';
import GalleryImage2 from '/assets/FTC5795/outreach2.webp';
import GalleryImage3 from '/assets/FTC5795/outreach3.webp';
import GalleryImage4 from '/assets/FTC5795/outreach4.webp';
import teamBanner from '/assets/FTC5795/teambanner.webp';
import qualifierPhoto from '/assets/FTC5795/qualifier.webp';
import statesPhoto from '/assets/FTC5795/states.webp';
import Gallery from '../../../gallery/Gallery';

import pencilDrawing from '/assets/FTC5795/pencildrawing.png';
import trafficConeDrawing from '/assets/FTC5795/trafficconedrawing.png';
import gearDrawing from '/assets/FTC5795/geardrawing.png';
import computerDrawing from '/assets/FTC5795/computerdrawing.png';
import cameraDrawing from '/assets/FTC5795/cameradrawing.png';
import airplaneDrawing from '/assets/FTC5795/airplane drawing.png';
import starDrawing from '/assets/FTC5795/stardrawing.png';
import trophyDrawing from '/assets/FTC5795/trophydrawing.png';
import magnifyingGlassDrawing from '/assets/FTC5795/magnifyingglass.png';
import hatDrawing from '/assets/FTC5795/hatdrawing.png';
import robotDrawing from '/assets/FTC5795/robotdrawing.png';
import basketballDrawing from '/assets/FTC5795/basketballdrawing.png';

const Doodle = ({ src, className = '' }) => (
  <img src={src} alt="" className={`doodle ${className}`} aria-hidden="true" />
);

const TeamPage5795 = () => {
  const iconFor = (text) => {
    if (text.includes('captain')) return starDrawing;
    if (text.includes('outreach')) return airplaneDrawing;
    if (text.includes('website') || text.includes('programming')) return computerDrawing;
    if (text.includes('marketing') || text.includes('media') || text.includes('graphic')) return cameraDrawing;
    if (text.includes('mechanical') || text.includes('fabrication')) return gearDrawing;
    return null;
  };

  const getIcon = (roles) => {
    return iconFor(roles[0].toLowerCase()) || iconFor(roles.join(' ').toLowerCase()) || gearDrawing;
  };

  const teamMembers = [
    { name: "Sanjay Raj Ravi", roles: ["Captain", "Mechanical"], isNew: false },
    { name: "Achint Ahuja", roles: ["Lead Mechanical", "Mechanical"], isNew: false },
    { name: "Yousif Hassenein", roles: ["Mechanical", "Marketing"], isNew: false },
    { name: "Nayani Annamalai", roles: ["Lead Programming", "Programming"], isNew: false },
    { name: "Shravya Shah", roles: ["Lead Local Outreach", "Outreach", "Programming"], isNew: false },
    { name: "Bharadwaj Parnarathi", roles: ["Mechanical", "Programming"], isNew: false },
    { name: "Shree Pambar", roles: ["Lead Marketing", "Mechanical"], isNew: false },
    { name: "Dev Parikh", roles: ["Outreach", "Media", "Graphic Design"], isNew: false },
    { name: "Ananya Soundar", roles: ["Lead Global Outreach", "Outreach", "Programming"], isNew: false },
    { name: "Bharath Raj Ravi", roles: ["Website Programming", "Programming"], isNew: true },
    { name: "Ayaan Sinha", roles: ["Mechanical", "Graphic Design"], isNew: true },
    { name: "Obiri Akwaboa", roles: ["Mechanical"], isNew: true },
    { name: "Pratham Gupta", roles: ["Mechanical", "Fabrication"], isNew: true },
    { name: "Vishant Azhaguvel", roles: ["Mechanical"], isNew: true },
  ];

  const newMemberCount = teamMembers.filter(m => m.isNew).length;

  const coaches = [
    { name: "Hitesh", role: "Coach — Outreach Advisor" },
    { name: "Karthik", role: "Coach — Mechanical & Marketing Advisor" },
  ];

  const awards = [
    "2025-2026: NC State Championship - Sustain Award (1st Place)",
    "2024-2025: NC State Championship - Control Award (1st Place)",
    "2023-2024: NC State Championship - Control Award",
    "2022-2023: NC State Championship - Control Award (3rd Place)",
    "2021-2022: NC State Championship - Control Award (3rd Place)",
    "2020-2021: NC State Championship - Motivate Award",
    "2019-2020: NC State Championship - Motivate Award",
  ];

  const outreachStats = [
    { value: "6,500+", label: "People Impacted Locally & Globally" },
    { value: "625,000+", label: "People Reached Across 7 Countries" },
    { value: "31", label: "Outreach Events & Presentations" },
    { value: "10", label: "FLL & FTC Teams Mentored" },
    { value: "140", label: "Girls Reached at Our STEM Camps" },
  ];

  const outreachHours = [
    { label: "Girls STEM Camps", hours: 205, color: "#3987e5" },
    { label: "Community Events", hours: 134, color: "#d95926" },
    { label: "Mentorships", hours: 126, color: "#199e70" },
    { label: "Marketing", hours: 73, color: "#c98500" },
    { label: "Global Initiatives", hours: 48, color: "#d55181" },
    { label: "Library Series", hours: 44, color: "#008300" },
  ];

  const totalHours = outreachHours.reduce((sum, item) => sum + item.hours, 0);

  let cumulativePercent = 0;
  const conicStops = outreachHours.map(item => {
    const start = cumulativePercent;
    const percent = (item.hours / totalHours) * 100;
    cumulativePercent += percent;
    return `${item.color} ${start}% ${cumulativePercent}%`;
  }).join(', ');

  return (
    <div className="team5795-container">
      <div className="team5795-content">
        <header className="team5795-header">
          <Doodle src={trafficConeDrawing} className="doodle-header-cone" />
          <img src={teamLogo} alt="FTC 5795 Logo" className="team5795-logo" />
          <h1>FTC 5795 - Back to the Drawing Board</h1>
          <div className="team5795-socials">
            <a href="https://www.instagram.com/ftc5795/" target="_blank" rel="noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/@ftc5795" target="_blank" rel="noreferrer">
              <img src={youtubeLogo} alt="YouTube" />
            </a>
            <a href="https://www.tiktok.com/@ecg_ftc5795" target="_blank" rel="noreferrer">
              <img src={tiktokLogo} alt="TikTok" />
            </a>
          </div>
        </header>

        <section className="team5795-section">
          <Doodle src={pencilDrawing} className="doodle-about-pencil" />
          <h2 className="team5795-board-header">About Us</h2>
          <p className="team5795-handwritten">Further, Faster, Forever, FIRST</p>
          <p>
          Based in Greensboro, NC, FTC Team 5795 – Back to the Drawing Board – has been designing, engineering, and competing in robotics since 2012. Over the years, we’ve grown from a group of curious builders to a close-knit team of innovators, coders, tinkerers, and problem-solvers who are passionate about learning and pushing the limits of what’s possible.

We take pride not just in building competitive robots, but in building a community around STEM. Whether it’s mentoring FLL teams, leading outreach initiatives, or collaborating with other robotics programs across the state, we strive to make a lasting impact. Every season is a new opportunity for us to grow, challenge ourselves, and bring creativity and innovation to the FIRST Tech Challenge community.
          </p>
          <p>
            We're part of <strong>ECG Robotics</strong>, home to 5 FIRST teams across FTC and FRC, sharing a workspace we call the <strong>Triple Strange Lair (TSL)</strong>.
          </p>
        </section>

        {/* Team Banner Section */}
        <section className="team5795-photo-section">
          <img src={teamBanner} alt="FTC 5795 - Back to the Drawing Board" className="team5795-banner-photo" />
        </section>

        {/* Team Members Section with Robotics Style */}
        <section className="team5795-section team5795-members-section">
          <Doodle src={robotDrawing} className="doodle-team-robot" />
          <h2 className="team5795-board-header">Our Team</h2>
          {newMemberCount > 0 && (
            <p className="team5795-handwritten">🆕 {newMemberCount} new members joined this season!</p>
          )}
          <div className="team5795-members-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team5795-member-card">
                <div className="team5795-member-name">
                  {member.name}
                  {member.isNew && <span className="team5795-new-badge">NEW</span>}
                </div>
                <div className="team5795-member-role">
                  <img src={getIcon(member.roles)} alt="" className="team5795-role-icon" />
                  {member.roles.join(', ')}
                </div>
              </div>
            ))}
          </div>

          <h3 className="team5795-coaches-heading">
            <Doodle src={hatDrawing} className="doodle-coaches-hat" />
            Our Coaches
          </h3>
          <div className="team5795-coaches-grid">
            {coaches.map((coach, index) => (
              <div key={index} className="team5795-coach-card">
                <div className="team5795-member-name">{coach.name}</div>
                <div className="team5795-member-role">{coach.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="team5795-section">
          <Doodle src={trophyDrawing} className="doodle-awards-trophy" />
          <Doodle src={starDrawing} className="doodle-awards-star" />
          <h2 className="team5795-board-header">Awards</h2>
          <ul className="team5795-awards-list">
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </section>

        <section className="team5795-section">
          <Doodle src={trafficConeDrawing} className="doodle-field-cone" />
          <Doodle src={basketballDrawing} className="doodle-field-basketball" />
          <h2 className="team5795-board-header">On the Field</h2>
          <div className="team5795-competition-photos">
            <figure>
              <img src={qualifierPhoto} alt="Team 5795 at a DECODE qualifier tournament" />
              <figcaption>Our Qualifier — 1st Place Inspire Award (DECODE)</figcaption>
            </figure>
            <figure>
              <img src={statesPhoto} alt="Team 5795 at the NC FTC State Championship" />
              <figcaption>NC State Championship — 1st Place Sustain Award (DECODE)</figcaption>
            </figure>
          </div>
        </section>

        {/* Outreach Section */}
        <section className="team5795-section">
          <Doodle src={airplaneDrawing} className="doodle-outreach-plane" />
          <h2 className="team5795-board-header">Outreach</h2>
          <p>
            Our team mentors FLL and FTC teams, hosts community events, runs a two-week Girls STEM Camp, and actively supports STEM education across the region — and around the world, through calls and collaborations with teams in Mexico, Romania, Canada, the UAE, Australia, and India.
          </p>
          <div className="team5795-outreach-stats-grid">
            {outreachStats.map((stat, index) => (
              <div key={index} className="team5795-stat-tile">
                <div className="team5795-stat-value">{stat.value}</div>
                <div className="team5795-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <h3 className="team5795-coaches-heading">
            <Doodle src={magnifyingGlassDrawing} className="doodle-highlights-magnify" />
            Local/Global Highlights
          </h3>
          <div className="team5795-donut-row">
            <div
              className="team5795-donut"
              style={{ background: `conic-gradient(${conicStops})` }}
            >
              <div className="team5795-donut-center">
                <span className="team5795-donut-total">{totalHours}</span>
                <span className="team5795-donut-total-label">hours</span>
              </div>
            </div>
            <ul className="team5795-donut-legend">
              {outreachHours.map((item, index) => (
                <li key={index}>
                  <span className="team5795-legend-swatch" style={{ backgroundColor: item.color }}></span>
                  <span className="team5795-legend-label">{item.label}</span>
                  <span className="team5795-legend-value">{item.hours}h</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="team5795-gallery">
          <Doodle src={cameraDrawing} className="doodle-gallery-camera" />
          <Gallery images={[GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4]} />
        </section>

        <div className="team5795-signature">
          <Doodle src={pencilDrawing} className="doodle-signature-pencil" />
          <Doodle src={trafficConeDrawing} className="doodle-signature-cone" />
        </div>
      </div>
    </div>
  );
};

export default TeamPage5795;
