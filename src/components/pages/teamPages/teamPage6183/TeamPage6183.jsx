import React from 'react';
import './TeamPage6183.css';
import DecodePage6183 from './DECODE6183/DecodePage6183';
import tiktokLogo from '/assets/TikTokLogo.png';
import instagramLogo from '/assets/InstagramLogo.webp';
import gmailLogo from '/assets/GmailLogo.png';

import teamPhoto from '/assets/FTC6183/Comp1.png';
import teamLogo from '/assets/logo6183.webp';
import DecodeLogo from '/assets/FTC10195/DecodeLogo.webp';

// ── REPLACE THIS with your actual video path ──────────────────────────────────
const BG_VIDEO = '/assets/FTC6183/background.mp4';
// ─────────────────────────────────────────────────────────────────────────────

const members = [
    { name: "Luke St. Clair", roles: ["Mechanical", "Fabrication", "Outreach", "Lead Mechanical"], grade: "Junior", registration: "Returning" },
    { name: "Xander Martinez", roles: ["Co-Captain", "Mechanical", "Website Programming", "Fabrication"], grade: "Junior", registration: "Recruited" },
    { name: "Kristian Cook", roles: ["Programming", "Website Programming"], grade: "Sophomore", registration: "Recruited" },
    { name: "Samy Gaire", roles: ["Co-Captain", "Outreach", "Mechanical"], grade: "Sophomore", registration: "Returning" },
    { name: "Aryan Ranabhat", roles: ["Mechanical"], grade: "Freshman", registration: "Drafted" },
    { name: "Rudra Patel", roles: ["Outreach", "Mechanical", "Media", "Graphic Design"], grade: "Freshman", registration: "Drafted" },
    { name: "Ernest Hu", roles: ["Mechanical"], grade: "Sophomore", registration: "Switched" },
    { name: "Pralove Shah", roles: ["Programming"], grade: "Freshman", registration: "Recruited" },
    { name: "Arden Bankman", roles: ["Mechanical"], grade: "Freshman", registration: "Recruited" },
    { name: "Ronith Budde", roles: ["Mechanical"], grade: "Freshman", registration: "Recruited" },
];

const awards = [
    {
        season: "2025–2026", name: "Decode", items: [
            "NC FTC Southwest Academy Innovate Award Winner",
            "NC FTC Ascend Leadership Acadmey",
        ]
    },
    {
        season: "2024–2025", name: "Into the Deep", items: [
            "Ascend Leadership Academy – Saturday Connect Award Winner",
            "Salem Academy – Sunday Connect Award Winner",
        ]
    },
    {
        season: "2023–2024", name: "Centerstage", items: [
            "NC FTC Southern Guilford HS Control Award 2nd Place",
            "NC FTC Salem Academy Motivate Award Winner",
        ]
    },
    {
        season: "2022–2023", name: "Powerplay", items: [
            "NC FTC Salem Academy Design Award Winner",
            "NC FTC Western MS Motivate 3rd, Design 2nd",
        ]
    },
    {
        season: "2021–2022", name: "Freight Frenzy", items: [
            "NC State Championship Finalist Alliance 2nd Pick, Design 2nd",
            "NC Qualifier (Elon) Design Award 2nd Place",
        ]
    },
];

const MemberCard = ({ member }) => (
    <div className="t6183-card">
        <div className="t6183-avatar">{member.name.charAt(0)}</div>
        <div className="t6183-card-body">
            <h4>{member.name}</h4>
            <p className="t6183-roles">{member.roles.join(" · ")}</p>
            <span className="t6183-grade">{member.grade}</span>
        </div>
    </div>
);

const MemberGroup = ({ title, list }) => list.length === 0 ? null : (
    <div className="t6183-group">
        <p className="t6183-group-label">{title}</p>
        <div className="t6183-grid">{list.map((m, i) => <MemberCard key={i} member={m} />)}</div>
    </div>
);

const TeamPage6183 = () => {
    const coCaptains = members.filter(m => m.roles.includes("Co-Captain"));
    const mechanical = members.filter(m => !m.roles.includes("Co-Captain") && m.roles[0] === "Mechanical");
    const programming = members.filter(m => !m.roles.includes("Co-Captain") && m.roles[0] === "Programming");
    const outreach = members.filter(m => !m.roles.includes("Co-Captain") && m.roles[0] === "Outreach");

    return (
        <div className="t6183-page-clip">
            <div className="t6183-root">

                {/* ── Video background ── */}
                <div className="t6183-video-wrap">
                    <video
                        className="t6183-video"
                        src={BG_VIDEO}
                        autoPlay muted loop playsInline
                    />
                    <div className="t6183-video-overlay" />
                </div>

                {/* ── Hero ── */}
                <header className="t6183-hero">
                    <img src={teamLogo} alt="Triple Paradox Logo" className="t6183-hero-logo" />
                    <div className="t6183-hero-text">
                        <p className="t6183-team-num">FTC 6183</p>
                        <h1 className="t6183-team-name">
                            Triple Paradox
                        </h1>
                        <div className="t6183-rule" />
                        <p className="t6183-tagline">Three Systems - One Paradox</p>
                    </div>
                    <div className="t6183-socials">
                        <a href="https://www.tiktok.com/@ftc6183" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <img src={tiktokLogo} alt="TikTok" />
                        </a>
                        <a href="https://www.instagram.com/ftc6183/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={instagramLogo} alt="Instagram" />
                        </a>
                        <a href="mailto:ftc6183@ecgrobotics.org" aria-label="Email">
                            <img src={gmailLogo} alt="Gmail" />
                        </a>
                    </div>
                </header>

                {/* ── Main content ── */}
                <main className="t6183-main">

                    {/* Overview */}
                    <section className="t6183-section">
                        <h2 className="t6183-section-title"><span>Overview</span></h2>
                        <div className="t6183-overview-inner">
                            <img src={teamPhoto} alt="Team photo" className="t6183-team-photo" />
                            <p className="t6183-overview-text">
                                Welcome to the official page for FTC 6183 – Triple Paradox. We strive to grow as a team
                                and exemplify the ideals of FIRST and gracious professionalism to the fullest extent.
                                Not only do we focus on building the best robot each season through CAD, mechanical work,
                                and programming — we're always looking for ways to positively impact our local community.
                                We look forward to every season as a chance to learn new skills, teach others, and give
                                our best as a team.
                            </p>
                        </div>
                    </section>

                    {/* Awards */}
                    <section className="t6183-section">
                        <h2 className="t6183-section-title"><span>Awards &amp; Achievements</span></h2>
                        <div className="t6183-awards-grid">
                            {awards.map((a, i) => (
                                <div className="t6183-award-card" key={i}>
                                    <div className="t6183-award-header">
                                        <span className="t6183-award-season">{a.season}</span>
                                        <span className="t6183-award-name">{a.name}</span>
                                    </div>
                                    <ul>
                                        {a.items.map((item, j) => <li key={j}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Members */}
                    <section className="t6183-section">
                        <h2 className="t6183-section-title"><span>Team Members</span></h2>
                        <MemberGroup title="Co-Captains" list={coCaptains} />
                        <MemberGroup title="Mechanical" list={mechanical} />
                        <MemberGroup title="Programming" list={programming} />
                        <MemberGroup title="Outreach" list={outreach} />
                    </section>

                    {/* Season */}
                    <section className="t6183-section">
                        <h2 className="t6183-section-title"><span>Current Season</span></h2>
                        <div className="t6183-season-header">
                            <img src={DecodeLogo} alt="Decode Logo" className="t6183-decode-logo" />
                        </div>
                        <div className="t6183-season-content">
                            <DecodePage6183 />
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default TeamPage6183;