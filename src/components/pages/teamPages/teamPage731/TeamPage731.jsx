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
import teja from '/assets/FTC731/teja.jpg';
import nikunj from '/assets/FTC731/nikunj.jpg';
import anika from '/assets/FTC731/anika.jpg';
import noah from '/assets/FTC731/noah.png';
import jason from '/assets/FTC731/jason.png';
import divit from '/assets/FTC731/divit.png';
import alexw from '/assets/FTC731/alexw.jpg';
import alexc from '/assets/FTC731/alexc.jpg';
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

    const teamMembers = [
        { id: 1, name: "Ishan Mahapatra", role: "Team Captain - Mechanical/Marketing Lead", img: patra, isCaptain: true },
        { id: 2, name: "Nikunj Gupta", role: "Co-Captain - Programming/Mechanical Lead", img: nikunj },
        { id: 10, name: "Jason Ngueyn", role: "Lead Programming", img: jason },
        { id: 9, name: "Jimmy Ma", role: "Programming", img: blank },
        { id: 5, name: "Alex Wang", role: "Programming", img: alexw },
        { id: 3, name: "Teja Chitta", role: "Mechanical", img: teja },
        { id: 4, name: "Alex Chen", role: "Mechanical", img: alexc },
        { id: 6, name: "Anika Nayanar", role: "Marketing/Programming", img: anika },
        { id: 7, name: "Noah King", role: "Marketing", img: noah },
        { id: 8, name: "Dev Patel", role: "Mechanical/Outreach", img: blank },
        { id: 11, name: "Divit Rao", role: "Marketing", img: divit }
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
                    <p>Welcome to FTC 731, Wannabee Strange. We're an innovative robotics team pushing the boundaries of STEM education through competition and community outreach.</p>
                </section>

                {/* Team Members Section */}
                <section className="team731-section team731-members">
                    <h2>Team Members</h2>
                    <div className="team731-members-grid">
                        {teamMembers.map(member => (
                            <div key={member.id} className={`team731-member-card ${member.isCaptain ? 'team731-captain' : ''}`}>
                                {member.img && (
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="team731-member-avatar"
                                    />
                                )}
                                <p><b>{member.name}</b></p>
                                <p>{member.role} {member.isCaptain && '⭐'}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* History Section */}
                <section className="team731-section team731-history">
                    <h2>Team History</h2>
                    <p>Since our founding, we've earned multiple awards for robot design and community impact:</p>
                    <ul>
                        <li>2024-2025: INTO THE DEEP
                            <ul>
                                <li>Control Award Winner - Ascend Leadership Academy</li>
                                <li>Design Award Winner - Salem Academy</li>
                            </ul>
                        </li>
                        <li>2023-2024: CENTERSTAGE
                            <ul>
                                <li>Design Award Winner - NC FTC Ascend Leadership Academy</li>
                                <li>Inspire Award 2nd Place, Winning Alliance Captain, Control Award Winner - NC FTC Southern Guilford High School</li>
                                <li>Finalist Alliance Captain, Control Award 2nd Place - North Carolina FTC State Championship</li>
                            </ul>
                        </li>
                        <li>2022-2023: POWERPLAY
                            <ul>
                                <li>Inspire Award Winner - NC FTC Smithfield-Selma HS</li>
                                <li>Connect Award Winner, Motivate Award 3rd Place - NC FTC Salem Academy and College</li>
                                <li>Connect Award 2nd Place - North Carolina FTC State Championship</li>
                            </ul>
                        </li>
                        <li>2021-2022: FREIGHT FRENZY
                            <ul>
                                <li>Design Award Winner, Dean's List Semifinalist (Matthew Limanto), Dean's List Semifinalist (Zain Bawangaonwala) - NC FTC Remote Qualifier 3</li>
                                <li>Connect Award Winner, Motivate Award 3rd Place - NC Qualifier (Elon)</li>
                            </ul>
                        </li>
                        <li>2020-2021: ULTIMATE GOAL
                            <ul>
                                <li>Design Award Winner, Dean's List Semifinalist (Sonia Akkiangadi), Dean's List Semifinalist (Victoria Uchman) - NC FTC Qualifier #8 REMOTE</li>
                                <li>Innovate Award 3rd Place, Design Award 2nd Place, Dean's List Semifinalist (Victoria Uchman), Dean's List Semifinalist (Sonia Akkiangadi) - NC FTC Qualifier #4 REMOTE</li>
                            </ul>
                        </li>
                        <li>2019-2020: SKYSTONE
                            <ul>
                                <li>Inspire Award 3rd Place, Motivate Award Winner - Northern Guilford High School QT</li>
                                <li>Think Award Winner - Southern Guilford High School QT</li>
                                <li>Design Award Winner - North Carolina FIRST Tech Challenge State Championship Tournament</li>
                            </ul>
                        </li>
                    </ul>
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