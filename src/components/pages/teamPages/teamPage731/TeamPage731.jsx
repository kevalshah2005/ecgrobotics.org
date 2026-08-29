import React, { useEffect, useState, useRef } from 'react';
import './TeamPage731.css';
import youtubeLogo from '/assets/YoutubeLogo.webp';
import instagramLogo from '/assets/InstagramLogo.webp';
import background1 from '/assets/731_2024bot.webp';
import background2 from '/assets/731_2019teampic.webp';
import background3 from '/assets/731_2024bot.webp';
import blank from '/assets/blank.jpg';
import mentor1 from '/assets/mentors/kevalshah.jpg';
import mentor2 from '/assets/mentors/kevinlimanto.jpg';
import mentor3 from '/assets/mentors/timothyvo.jpg';
import mentor4 from '/assets/mentors/zeelpatel.jpg';
import mentor5 from '/assets/mentors/arihantsingh.jpg';
import mentor6 from '/assets/mentors/lakshayamehta.jpg';
import patra from '/assets/FTC731/patra.jpg';
import nikunj from '/assets/FTC731/nikunj.jpg';
import anika from '/assets/FTC731/anika.jpg';
import noah from '/assets/FTC731/noah.png';
import jason from '/assets/FTC731/jason.png';
import divit from '/assets/FTC731/divit.png';
import outreach1 from '/assets/FTC731/outreach1.jpg';
import outreach2 from '/assets/FTC731/outreach2.jpg';
import outreach3 from '/assets/FTC731/outreach3.jpg';
import outreach4 from '/assets/FTC731/outreach4.jpg';
import teamLogo from '/assets/FTC731/logo.jpg';
import teamPhoto from '/assets/FTC731/blankteamphoto.jpg';

const TeamPage731 = () => {
    const teamContainerRef = useRef(null);
    const [currentBg, setCurrentBg] = useState(0);
    const backgrounds = [background1, background2, background3];

    useEffect(() => {
        document.body.classList.add('team731-page-body');

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bgIndex = Math.min(
                2,
                Math.floor(scrollPosition / (windowHeight * 0.75))
            );
            setCurrentBg(bgIndex);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            document.body.classList.remove('team731-page-body');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // NOTE: Each member object keeps its own `img` reference, so when the
    // array is re-ordered or filtered, the picture always travels with the
    // correct person. Anyone without a dedicated photo on file falls back
    // to the shared `blank` placeholder until a real photo is added.
    const teamMembers = [
        { id: 2, name: "Nikunj Gupta", role: "Co-Captain - Mechanical", img: nikunj, isCaptain: true },
        { id: 10, name: "Jason Nguyen", role: "Co-Captain - Programming", img: jason, isCaptain: true },
        { id: 12, name: "Levi Snyder", role: "Mechanical Lead", img: blank },
        { id: 9, name: "Jimmy Ma", role: "Programming Lead", img: blank },
        { id: 6, name: "Anika Nayanar", role: "Outreach Lead", img: anika },
        { id: 1, name: "Ishan Mahapatra", role: "Outreach/Marketing", img: patra },
        { id: 7, name: "Noah King", role: "Outreach/Marketing", img: noah },
        { id: 8, name: "Dev Patel", role: "Mechanical/Outreach", img: blank },
        { id: 11, name: "Divit Rao", role: "Mechanical", img: divit },
        { id: 13, name: "Aiden Bell", role: "Mechanical", img: blank },
        { id: 14, name: "Rishi Kandala", role: "Mechanical/Outreach", img: blank },
        { id: 15, name: "Amogh Prashanth", role: "Programming", img: blank },
        { id: 16, name: "Aadvik \"Rio\" Jandhyala", role: "Outreach/Mechanical", img: blank },
        { id: 17, name: "Akshaya \"Zee\" Jandhyala", role: "Outreach/Marketing", img: blank },
    ];

    const seasons = [
        {
            years: "2025-2026",
            name: "Decode",
            awards: [
                "Pinnacle Classical Academy Qualifier – Inspire Award",
                "North Carolina Championship – Connect Award"
            ]
        },
        {
            years: "2024-2025",
            name: "Into the Deep",
            awards: [
                "Ascend Leadership Academy – Control Award Winner",
                "Salem Academy – Design Award Winner"
            ]
        },
        {
            years: "2023-2024",
            name: "Centerstage",
            awards: [
                "NC FTC Ascend Leadership Academy – Design Award Winner",
                "NC FTC Southern Guilford High School – Inspire Award 2nd Place, Winning Alliance Captain, Control Award Winner",
                "North Carolina FTC State Championship – Finalist Alliance Captain, Control Award 2nd Place"
            ]
        },
        {
            years: "2022-2023",
            name: "Powerplay",
            awards: [
                "NC FTC Smithfield-Selma HS – Inspire Award Winner",
                "NC FTC Salem Academy and College – Connect Award Winner, Motivate Award 3rd Place",
                "North Carolina FTC State Championship – Connect Award 2nd Place"
            ]
        },
        {
            years: "2021-2022",
            name: "Freight Frenzy",
            awards: [
                "NC FTC Remote Qualifier 3 – Design Award Winner, Dean's List Semifinalist (Matthew Limanto), Dean's List Semifinalist (Zain Bawangaonwala)",
                "NC Qualifier (Elon) – Connect Award Winner, Motivate Award 3rd Place"
            ]
        },
        {
            years: "2020-2021",
            name: "Ultimate Goal",
            awards: [
                "NC FTC Qualifier #8 REMOTE – Design Award Winner, Dean's List Semifinalist (Sonia Akkiangadi), Dean's List Semifinalist (Victoria Uchman)",
                "NC FTC Qualifier #4 REMOTE – Innovate Award 3rd Place, Design Award 2nd Place, Dean's List Semifinalist (Victoria Uchman), Dean's List Semifinalist (Sonia Akkiangadi)"
            ]
        },
        {
            years: "2019-2020",
            name: "Skystone",
            awards: [
                "Northern Guilford High School QT – Inspire Award 3rd Place, Motivate Award Winner",
                "Southern Guilford High School QT – Think Award Winner",
                "North Carolina FIRST Tech Challenge State Championship Tournament – Design Award Winner"
            ]
        }
    ];

    const mentors = [
        { id: 1, name: "Keval Shah", role: "Programming Mentor", img: mentor1, bio: "Current Computer Science student at UT Dallas.", isCaptain: true },
        { id: 2, name: "Kevin Limanto", role: "Engineering Mentor", img: mentor2, bio: "Current Robotics Engineer at Mack Trucks." },
        { id: 3, name: "Timothy Vo", role: "Engineering Mentor", img: mentor3, bio: "Current Mechanical Engineering student at NC state University." },
        { id: 4, name: "Zeel Patel", role: "Cadding and Design Mentor", img: mentor4, bio: "Former Volvo Intern, soon to be a Honda Jet Intern, and an aerospace engineering major from NC State University." },
        { id: 5, name: "Arihant Singh", role: "Programming Mentor", img: mentor5, bio: "Current Computer Engineering student at Duke University." },
        { id: 6, name: "Lakshaya Mehta", role: "Engineering Mentor", img: mentor6, bio: "Current Mechanical Engineering at Georgia Tech University." },
        { id: 7, name: "Aparna Tata", role: "Electrical Engineering Mentor", img: blank, bio: "Current Senior Electrical Engineer at Analog Devices Inc. with over 15 years of experience." },
        { id: 8, name: "Shiv Oza", role: "Design Mentor", img: blank, bio: "Currently working at SpaceX" },
        { id: 9, name: "Aarushi Ahuja", role: "Outreach Mentor", img: blank, bio: "Graduate from Stanford University." },
    ];

    const galleryImages = {
        outreach: [outreach1, outreach2, outreach3, outreach4],
        mentorship: [mentor1, mentor2, mentor3, mentor4, mentor5, mentor6],
        media: [outreach1, outreach2, outreach3, outreach4, mentor1, mentor2, mentor3, mentor4, mentor5, mentor6]
    };

    return (
        <div
            className="team731-page-wrapper"
            style={{
                backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.75), rgba(10, 10, 10, 0.75)), url(${backgrounds[currentBg]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="team731-container" ref={teamContainerRef}>
                {/* Unified Title Box */}
                <div className="team731-title-box-container">
                    <div className="team731-title-box">
                        <h1>FTC 731 - Wannabee Strange</h1>
                    </div>
                    <div className="team731-logo-container">
                        <img src={teamLogo} alt="Team 731 Logo" className="team731-logo" />
                    </div>
                </div>

                {/* Social Links */}
                <div className="team731-social-links">
                    <a href="https://youtube.com/FTC731" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeLogo} alt="YouTube" />
                    </a>
                    <a href="https://www.instagram.com/wannabeestrange/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Instagram" />
                    </a>
                </div>

                {/* Team Photo Section */}
                <section className="team731-section team731-team-photo">
                    <div className="team731-team-photo-container">
                        <img 
                            src={teamPhoto} 
                            alt="FTC 731 Team Photo" 
                            className="team731-team-image"
                        />
                        <div className="team731-team-photo-caption">
                            <h2>Our Team</h2>
                            <p>FTC 731 - Wannabee Strange (2024-2025 Season)</p>
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="team731-section team731-overview">
                    <h2>Overview</h2>
                    <p>
                        Wannabee Strange (FTC Team 731) is a student-led FIRST Tech Challenge team based in
                        Greensboro, North Carolina, and part of ECG Robotics. Founded in 2007, Team 731 has
                        spent nearly two decades developing students through hands-on experience in engineering,
                        programming, mechanical design, teamwork, leadership, and outreach.
                    </p>
                    <p>
                        The team has built a strong competitive legacy, qualifying for the FIRST Championship
                        in Houston multiple times — including a 13th-place division finish in 2017 as first
                        pick of the third-seeded alliance, and an Inspire Award at the 2018 NC State
                        Championship that sent the team to Worlds. In 2023, Wannabee Strange served as
                        Finalist Alliance Captain at the North Carolina Championship.
                    </p>
                    <p>
                        Beyond competition, Team 731 is committed to STEM outreach and to promoting robotics
                        as an activity that builds the same qualities found in traditional athletics:
                        dedication, teamwork, leadership, discipline, and perseverance. As one of North
                        Carolina's longest-running FTC teams, Wannabee Strange continues to inspire students
                        to build ambitious robots and become the next generation of engineers and innovators.
                    </p>
                </section>

                {/* Team Members Section */}
                <section className="team731-section team731-members">
                    <h2>Team Members</h2>
                    <div className="team731-members-grid">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className={`team731-member-card ${member.isCaptain ? 'team731-captain' : ''}`}
                                style={{ animationDelay: `${0.05 * index}s` }}
                            >
                                {member.img && (
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="team731-member-avatar"
                                    />
                                )}
                                {member.isCaptain && <span className="team731-captain-badge">★ Co-Captain</span>}
                                <p><b>{member.name}</b></p>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* History Section */}
                <section className="team731-section team731-history">
                    <h2>Team History</h2>
                    <p>Since our founding, we've earned multiple awards for robot design and community impact:</p>
                    <div className="team731-history-grid">
                        {seasons.map((season, index) => (
                            <div
                                key={season.years}
                                className={`team731-history-card ${index === 0 ? 'team731-history-current' : ''}`}
                            >
                                {index === 0 && <span className="team731-history-current-badge">Latest Season</span>}
                                <span className="team731-history-years">{season.years}</span>
                                <h3 className="team731-history-season">{season.name}</h3>
                                <ul>
                                    {season.awards.map((award, i) => (
                                        <li key={i}>{award}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mentorship Section */}
                <section className="team731-section team731-mentorship">
                    <h2>STEM Mentorship Program</h2>
                    <div className="team731-mentors-grid">
                        {mentors.map(mentor => (
                            <div key={mentor.id} className="team731-mentor-card">
                                <img
                                    src={mentor.img}
                                    alt={mentor.name}
                                    className="team731-mentor-avatar"
                                />
                                <h3>{mentor.name}</h3>
                                <p className="team731-mentor-role">{mentor.role}</p>
                                <p className="team731-mentor-bio">{mentor.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Outreach Section */}
                <section className="team731-section team731-outreach">
                    <h2>Community Outreach</h2>
                    <div className="team731-outreach-project">
                        <h3>Roboween Outreach</h3>
                        <div className="team731-outreach-content">
                            <div className="team731-outreach-image-container">
                                <img
                                    src={outreach1}
                                    alt="Roboween"
                                    className="team731-outreach-image"
                                />
                            </div>
                            <div className="team731-outreach-text">
                                <p>As an organization, ECG Robotics does their annual Roboween event. This year we partnered with the United Way Greensboro. At this event, we introduced over 50 people to FIRST robotics, and connected with over a thousand kids.</p>
                                <p>This event was an amazing experience to connect with our community and display the robot along with all its innovative features.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team731-outreach-project">
                        <h3>Library Outreach</h3>
                        <div className="team731-outreach-content">
                            <div className="team731-outreach-image-container">
                                <img
                                    src={outreach2}
                                    alt="Library Outreach"
                                    className="team731-outreach-image"
                                />
                            </div>
                            <div className="team731-outreach-text">
                                <p>We partnered with local public libraries in several demonstrations where some of our members showcased FIRST and fostered interest in STEM from our local youth. A lot of our rookies took part in these demonstrations, so they learned the importance of inspiring youth about STEM and it was a good way for them to reflect on everything they learned this season.</p>
                            </div>
                        </div>
                    </div>
                    <div className="team731-outreach-project">
                        <h3>Bricksboro Outreach</h3>
                        <div className="team731-outreach-content">
                            <div className="team731-outreach-image-container">
                                <img
                                    src={outreach3}
                                    alt="Bricksboro"
                                    className="team731-outreach-image"
                                />
                            </div>
                            <div className="team731-outreach-text">
                                <p>We met with several FLL teams and members of our community to showcase our robot. We also answered various questions that kids had about the engineering and design process, about robotics and STEM related fields.</p>
                                <p>Through this event we reached over a thousand people and introduced over 50 students to FIRST Robotics. </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TeamPage731;