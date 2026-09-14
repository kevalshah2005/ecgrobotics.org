import React, { useEffect, useState, useRef } from 'react';
import './TeamPage731.css';
import { startLogoAnimation } from './logoRotate';

import youtubeLogo from '/assets/YoutubeLogo.webp';
import instagramLogo from '/assets/InstagramLogo.webp';

import background1 from '/assets/731_2024bot.webp';
import background2 from '/assets/731_2019teampic.webp';
import background3 from '/assets/731_2024bot.webp';
import blank from '/assets/blank.jpg';

import mentor1 from '/assets/mentors/kevalshah.jpg';
import mentor2 from '/assets/mentors/don.png';
import mentor3 from '/assets/mentors/timothyvo.jpg';
import mentor4 from '/assets/mentors/srikanth.png';
import mentor5 from '/assets/mentors/arihantsingh.jpg';
import mentor6 from '/assets/mentors/lakshayamehta.jpg';
import mentor7 from '/assets/mentors/antonio.png';
import mentor8 from '/assets/mentors/ken.png';

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

import teamLogo from '/assets/FTC731/logo.png';
import teamPhoto from '/assets/FTC731/teampic.png';

import fivewkcomp from '/assets/FTC731/5wkcomp.jpeg';
import roborama1 from '/assets/FTC731/roborama1.jpeg';
import roborama2 from '/assets/FTC731/roborama2.jpeg';
import roborama3 from '/assets/FTC731/roborama3.jpeg';
import cubscout from '/assets/FTC731/cubscout.jpeg';
import aggieacademy1 from '/assets/FTC731/aggieacademy.jpeg';
import aggieacademy2 from '/assets/FTC731/aggieacademy2.jpeg';
import cubscout2 from '/assets/FTC731/cubscout2.jpeg';
import kickoff from '/assets/FTC731/kickoff.jpeg';

import uWay from '/assets/FTC731/logos/uWay.png';
import HT from '/assets/FTC731/logos/ht.png';
import publix from '/assets/FTC731/logos/publix.png';
import GDT from '/assets/FTC731/logos/gdt.png';
import qorvo from '/assets/FTC731/logos/qorvo.png';
import cotality from '/assets/FTC731/logos/cotality.png';
import intuitive from '/assets/FTC731/logos/intuitive.png';
import adevices from '/assets/FTC731/logos/adevices.png';
import tsf from '/assets/FTC731/logos/tsf.png';
import te from '/assets/FTC731/logos/te.png';
import haas from '/assets/FTC731/logos/haas.png';
import pg from '/assets/FTC731/logos/pg.png';
import ifgiorg from '/assets/FTC731/logos/ifgiorg.png';
import honda from '/assets/FTC731/logos/honda.png';


const TeamPage731 = () => {
    const teamContainerRef = useRef(null);

    const [currentBg, setCurrentBg] = useState(0);

    const backgrounds = [
        background1,
        background2,
        background3
    ];


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


    /*
     * TEAM MEMBERS
     */

    const teamMembers = [
        {
            id: 2,
            name: "Nikunj Gupta",
            role: "Co-Captain - Mechanical",
            img: nikunj,
            isCaptain: true
        },
        {
            id: 10,
            name: "Jason Nguyen",
            role: "Co-Captain - Programming",
            img: jason,
            isCaptain: true
        },
        {
            id: 12,
            name: "Levi Snyder",
            role: "Mechanical Lead",
            img: blank
        },
        {
            id: 9,
            name: "Jimmy Ma",
            role: "Programming Lead",
            img: blank
        },
        {
            id: 6,
            name: "Anika Nayanar",
            role: "Outreach Lead",
            img: anika
        },
        {
            id: 1,
            name: "Ishan Mahapatra",
            role: "Outreach/Marketing",
            img: patra
        },
        {
            id: 7,
            name: "Noah King",
            role: "Outreach/Marketing",
            img: noah
        },
        {
            id: 8,
            name: "Dev Patel",
            role: "Mechanical/Outreach",
            img: blank
        },
        {
            id: 11,
            name: "Divit Rao",
            role: "Mechanical",
            img: divit
        },
        {
            id: 13,
            name: "Aiden Bell",
            role: "Mechanical",
            img: blank
        },
        {
            id: 14,
            name: "Rishi Kandala",
            role: "Mechanical/Outreach",
            img: blank
        },
        {
            id: 15,
            name: "Amogh Prashanth",
            role: "Programming",
            img: blank
        },
        {
            id: 16,
            name: "Aadvik \"Rio\" Jandhyala",
            role: "Outreach/Mechanical",
            img: blank,
            isNewMember: true
        },
        {
            id: 17,
            name: "Akshaya \"Zee\" Jandhyala",
            role: "Outreach/Marketing",
            img: blank,
            isNewMember: true
        }
    ];


    /*
     * SEASONS / TEAM HISTORY
     */

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


    /*
     * MENTORS
     */

    const mentors = [
        {
            id: 1,
            name: "Keval Shah",
            role: "Programming Mentor",
            img: mentor1,
            bio: "Current Computer Science student at UT Dallas."
        },
        {
            id: 2,
            name: "Don Smith",
            role: "Physics Mentor",
            img: mentor2,
            bio: "Physics Professor @ Guilford College."
        },
        {
            id: 3,
            name: "Timothy Vo",
            role: "Engineering Mentor",
            img: mentor3,
            bio: "Current Mechanical Engineering student at NC state University."
        },
        {
            id: 4,
            name: "Srikanth Kagollu",
            role: "Engineering Mentor",
            img: mentor4,
            bio: "Lead Project Engineer @ Labcorp"
        },
        {
            id: 5,
            name: "Arihant Singh",
            role: "Programming Mentor",
            img: mentor5,
            bio: "Current Computer Engineering student at Duke University."
        },
        {
            id: 6,
            name: "Lakshya Mehta",
            role: "Engineering Mentor",
            img: mentor6,
            bio: "Current Mechanical Engineering at Georgia Tech University."
        },
        {
            id: 7,
            name: "Antonio DesRavines",
            role: "Programming Mentor",
            img: mentor7,
            bio: "Computer Science Teaching Assistant @ NC A&T University."
        },
        {
            id: 8,
            name: "Ken Gilmore",
            role: "Management Mentor",
            img: mentor8,
            bio: "Political Science Professor @ Guilford College"
        }
    ];


    /*
     * SPONSORS
     */

    const sponsors = [
        {
            id: 1,
            name: "United Way",
            logo: uWay,
            tier: "Bronze"
        },
        {
            id: 2,
            name: "Harris Teeter",
            logo: HT,
            tier: "Bronze"
        },
        {
            id: 3,
            name: "Publix",
            logo: publix,
            tier: "Bronze"
        },
        {
            id: 4,
            name: "GDT",
            logo: GDT,
            tier: "Bronze"
        },
        {
            id: 5,
            name: "QORVO",
            logo: qorvo,
            tier: "Silver"
        },
        {
            id: 6,
            name: "cotality",
            logo: cotality,
            tier: "Silver"
        },
        {
            id: 7,
            name: "INTUITIVE",
            logo: intuitive,
            tier: "Silver"
        },
        {
            id: 8,
            name: "Analog Devices",
            logo: adevices,
            tier: "Gold"
        },
        {
            id: 9,
            name: "Tannenbaum Sternberger Foundation",
            logo: tsf,
            tier: "Gold"
        },
        {
            id: 10,
            name: "TE Connectivity",
            logo: te,
            tier: "Gold"
        },
        {
            id: 11,
            name: "HAAS",
            logo: haas,
            tier: "Platinum"
        },
        {
            id: 12,
            name: "Proctor & Gamble",
            logo: pg,
            tier: "Diamond"
        },
        {
            id: 13,
            name: "Inventions for Good, Inc",
            logo: ifgiorg,
            tier: "Strange"
        },
        {
            id: 14,
            name: "Honda",
            logo: honda,
            tier: "Strange"
        }
    ];


    /*
     * STRANGE CLUB
     */

    const strangeClubBenefits = [
        {
            id: 1,
            title: "Online Courses",
            details: [
                "Courses tailored to the youth in both Mechanical work and Programming",
                "Self-paced with over an hour of direct instruction",
                "Guidance for independent activities"
            ]
        },
        {
            id: 2,
            title: "Hands-On Experience",
            details: [
                "Involvement in team-led outreach events",
                "Leadership opportunities for students to achieve outreach and community experience"
            ]
        },
        {
            id: 3,
            title: "Regular Newsletters",
            details: [
                "Updates on team activities",
                "Regular information regarding local STEM events and opportunities",
                "At-home opportunities to apply crucial robotics skills"
            ]
        },
        {
            id: 4,
            title: "Facility Tours",
            details: [
                "Tours on our organization-wide robotics facility",
                "Basic instruction on specialized mechanical equipment and everyday operations"
            ]
        },
        {
            id: 5,
            title: "Member Promotion/Recognition",
            details: [
                "Certificates of achievement for online courses",
                "Mentions on our team web page",
                "Regular member updates on our social media"
            ]
        },
        {
            id: 6,
            title: "Open Communication",
            details: [
                "Q/A sessions for both members and parents throughout the season",
                "Responses within 24 hours to meet member needs and provide support",
                "Tailored information to involve children in STEM at various ages and experience levels"
            ]
        },
        {
            id: 7,
            title: "Team Merchandise",
            details: [
                "Free 731 Wannabee Strange merchandise including shirts, pins, bracelets, and more"
            ]
        },
        {
            id: 8,
            title: "Competition Invites",
            details: [
                "Invites to both scrimmages and seasonal competitions throughout the year",
                "Opportunities to see the fast-paced functioning of an official First Tech Challenge Competition"
            ]
        }
    ];


    /*
     * GALLERY
     *
     * Removed the duplicate images that were previously:
     * Fig. 3, Fig. 5, and Fig. 6.
     *
     * Remaining images are renumbered automatically below.
     */

    const galleryImages = {
        outreach: [
            "fivewkcomp",
            "roborama1",
            "roborama3",
            "aggieacademy2",
            "cubscout2",
            "kickoff"
        ]
    };


    const galleryCaptions = {
        fivewkcomp: "Fig. 1 — Robot in 5 Weeks Competition",
        roborama1: "Fig. 2 — Roborama Presentation at GSC",
        roborama3: "Fig. 3 — Roborama Presentation at GSC",
        aggieacademy2: "Fig. 4 — Aggie Academy Outreach",
        cubscout2: "Fig. 5 — Cub Scout Outreach",
        kickoff: "Fig. 6 — Kickoff Event"
    };


    const getgalleryCaptions = (image) => {
        return galleryCaptions[image] || "No caption available";
    };


    /*
     * GALLERY IMAGE LOOKUP
     */

    const getgalleryImg = (image) => {
        const galleryMap = {
            fivewkcomp,
            roborama1,
            roborama2,
            roborama3,
            cubscout,
            aggieacademy1,
            aggieacademy2,
            cubscout2,
            kickoff
        };

        return galleryMap[image] || blank;
    };


    /*
     * SPONSOR TIER COLORS
     */

    const getTierColor = (tier) => {
        const colors = {
            Bronze: "#CD7F32",
            Silver: "#C0C0C0",
            Gold: "#FFD700",
            Platinum: "#E5E4E2",
            Diamond: "#B9F2FF",
            Strange: "#7B2CFF"
        };

        return colors[tier] || "#FFFFFF";
    };


    return (
        <div
            className="team731-page-wrapper"
            style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(10, 10, 10, 0.75),
                        rgba(10, 10, 10, 0.75)
                    ),
                    url(${backgrounds[currentBg]})
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >

            <div
                className="team731-container"
                ref={teamContainerRef}
            >

                {/* HERO */}

                <div id="hero">
                    <canvas id="c"></canvas>
                </div>
                


                {/* TEAM 731 TITLE */}  

                <div id="content" className="team731-title-box-container">
                    <div className="team731-title-box">
                         <div className="team731-main-title">

                            <div className="team731-title-number-wrap">

                            <span className="team731-title-number">
                                731
                            </span>

                            <div className="team731-hover-logo">
                                <img
                                    src={teamLogo}
                                    alt="Team 731 Logo"
                                    className="team731-logo"
                                 />
                            </div>
                            
                        </div>

                        <span className="team731-title-name">
                            Wannabee Strange
                        </span>

                        <span className="team731-title-subtitle">
                            Always FIRST, Always Strange
                        </span>

                    </div>

                    </div>


                </div>


                {/* SOCIAL LINKS */}

                <div className="team731-social-links">

                    <a
                        href="https://www.youtube.com/@ftc7312"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={youtubeLogo}
                            alt="YouTube"
                        />
                    </a>

                    <a
                        href="https://www.instagram.com/wannabeestrange/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={instagramLogo}
                            alt="Instagram"
                        />
                    </a>

                </div>


                {/* TEAM PHOTO */}

                <section className="team731-section team731-team-photo">

                    <div className="team731-team-photo-container">

                        <img
                            src={teamPhoto}
                            alt="FTC 731 Team Photo"
                            className="team731-team-image"
                        />

                        <div className="team731-team-photo-caption">
                            <p>
                                FTC 731 - Wannabee Strange
                                (2025-2026 DECODE<sup>©</sup> Season)
                            </p>
                        </div>

                    </div>

                </section>


                {/* STRANGE CLUB */}

                <section className="team731-section strange-club">

                    <h2>STRANGE CLUB</h2>

                    <p className="team731-section-subtitle">
                        Presented by FTC Team 731 Wannabee Strange
                    </p>

                    <div className="team731-benefits-grid">

                        {strangeClubBenefits.map((benefit) => (

                            <div
                                key={benefit.id}
                                className="team731-benefit-card"
                            >

                                <h3>
                                    {benefit.title}
                                </h3>

                                <ul>

                                    {benefit.details.map(
                                        (detail, index) => (
                                            <li key={index}>
                                                {detail}
                                            </li>
                                        )
                                    )}

                                </ul>

                            </div>

                        ))}

                    </div>

                </section>


                {/* OVERVIEW */}

                <section className="team731-section team731-overview">

                    <h2>Overview</h2>

                    <p>
                        Wannabee Strange (FTC Team 731) is a student-led
                        FIRST Tech Challenge team based in Greensboro,
                        North Carolina, and part of ECG Robotics. Founded
                        in 2007, Team 731 has spent nearly two decades
                        developing students through hands-on experience
                        in engineering, programming, mechanical design,
                        teamwork, leadership, and outreach.
                    </p>

                    <p>
                        The team has built a strong competitive legacy,
                        qualifying for the FIRST Championship in Houston
                        multiple times — including a 13th-place division
                        finish in 2017 as first pick of the third-seeded
                        alliance, and an Inspire Award at the 2018 NC State
                        Championship that sent the team to Worlds. In 2023,
                        Wannabee Strange served as Finalist Alliance Captain
                        at the North Carolina Championship.
                    </p>

                    <p>
                        Beyond competition, Team 731 is committed to STEM
                        outreach and to promoting robotics as an activity
                        that builds the same qualities found in traditional
                        athletics: dedication, teamwork, leadership,
                        discipline, and perseverance. As one of North
                        Carolina's longest-running FTC teams, Wannabee Strange
                        continues to inspire students to build ambitious
                        robots and become the next generation of engineers
                        and innovators.
                    </p>

                </section>


                {/* OUTREACH IMPACT */}

                <section className="team731-section team731-impact">

                    <div className="team731-impact-header">

                        <div>

                            <span className="team731-impact-eyebrow">
                                2025–2026 SEASON
                            </span>

                            <h2>
                                Outreach Impact
                            </h2>

                            <p>
                                Turning robotics into opportunities,
                                connections, and inspiration for our
                                community.
                            </p>

                        </div>

                        <div className="team731-impact-icon">
                            ✦
                        </div>

                    </div>


                    <div className="team731-impact-grid">

                        <div className="team731-stat-card team731-stat-primary">
                            <span className="team731-stat-icon">◉</span>
                            <strong>19,609+</strong>
                            <span>People Reached</span>
                            <small>Across our outreach efforts</small>
                        </div>

                        <div className="team731-stat-card">
                            <span className="team731-stat-icon">✦</span>
                            <strong>8,500+</strong>
                            <span>People Impacted</span>
                            <small>Meaningful STEM engagement</small>
                        </div>

                        <div className="team731-stat-card">
                            <span className="team731-stat-icon">▦</span>
                            <strong>57</strong>
                            <span>Total Events</span>
                            <small>Workshops, demonstrations, and more</small>
                        </div>

                        <div className="team731-stat-card">
                            <span className="team731-stat-icon">◎</span>
                            <strong>5</strong>
                            <span>Continents</span>
                            <small>Global outreach presence</small>
                        </div>

                    </div>


                    <div className="team731-impact-bottom">

                        <div className="team731-hours">

                            <div className="team731-hours-icon">
                                ◷
                            </div>

                            <div>
                                <strong>684</strong>
                                <span>Member Hours</span>
                            </div>

                        </div>


                        <div className="team731-impact-message">
                            <span>More outreach.</span>
                            <strong>Bigger impact.</strong>
                        </div>

                    </div>

                </section>


                {/* TEAM MEMBERS */}

                <section className="team731-section team731-members">

                    <h2>
                        Team Members
                    </h2>

                    <div className="team731-members-grid">

                        {teamMembers.map((member, index) => (

                            <div
                                key={member.id}
                                className={`team731-member-card ${
                                    member.isCaptain
                                        ? 'team731-captain'
                                        : ''
                                }`}
                                style={{
                                    animationDelay:
                                        `${0.05 * index}s`
                                }}
                            >

                                {member.img && (

                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="team731-member-avatar"
                                    />

                                )}


                                {member.isCaptain && (

                                    <span className="team731-captain-badge">
                                        ★ Co-Captain
                                    </span>

                                )}


                                {member.isNewMember && (

                                    <span className="team731-new-member-badge">
                                        ✦ New Member
                                    </span>

                                )}


                                <p>
                                    <b>
                                        {member.name}
                                    </b>
                                </p>

                                <p>
                                    {member.role}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>


                {/* HISTORY */}

                <section className="team731-section team731-history">

                    <h2>
                        Team History
                    </h2>

                    <p>
                        Since our founding, we've earned multiple awards
                        for robot design and community impact:
                    </p>

                    <div className="team731-history-grid">

                        {seasons.map((season, index) => (

                            <div
                                key={season.years}
                                className={`team731-history-card ${
                                    index === 0
                                        ? 'team731-history-current'
                                        : ''
                                }`}
                            >

                                {index === 0 && (

                                    <span className="team731-history-current-badge">
                                        Latest Season
                                    </span>

                                )}

                                <span className="team731-history-years">
                                    {season.years}
                                </span>

                                <h3 className="team731-history-season">
                                    {season.name}
                                </h3>

                                <ul>

                                    {season.awards.map(
                                        (award, i) => (

                                            <li key={i}>
                                                {award}
                                            </li>

                                        )
                                    )}

                                </ul>

                            </div>

                        ))}

                    </div>

                </section>


                {/* MENTORSHIP */}

                <section className="team731-section team731-mentorship">

                    <h2>
                        STEM Mentorship Program
                    </h2>

                    <div className="team731-mentors-grid">

                        {mentors.map((mentor) => (

                            <div
                                key={mentor.id}
                                className="team731-mentor-card"
                            >

                                <img
                                    src={mentor.img}
                                    alt={mentor.name}
                                    className="team731-mentor-avatar"
                                />

                                <h3>
                                    {mentor.name}
                                </h3>

                                <p className="team731-mentor-role">
                                    {mentor.role}
                                </p>

                                <p className="team731-mentor-bio">
                                    {mentor.bio}
                                </p>

                            </div>

                        ))}

                    </div>

                </section>


                {/* SPONSORS */}

                {/*
                <section className="team731-section team731-sponsors">

                    <h2>Our Sponsors</h2>

                    <div className="team731-sponsors-grid">

                        {sponsors.map((sponsor) => (

                            <div
                                key={sponsor.id}
                                className="team731-sponsor-card"
                                data-tier={sponsor.tier}
                            >

                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="team731-sponsor-logo"
                                    style={{
                                        boxShadow:
                                            '0 0 15px ' +
                                            getTierColor(sponsor.tier),

                                        border:
                                            '2px solid ' +
                                            getTierColor(sponsor.tier)
                                    }}
                                />

                                <h2>
                                    {sponsor.name}
                                </h2>

                                <p
                                    className="team731-sponsor-tier"
                                    style={{
                                        color:
                                            getTierColor(
                                                sponsor.tier
                                            ),

                                        textShadow:
                                            '0 0 5px ' +
                                            getTierColor(
                                                sponsor.tier
                                            )
                                    }}
                                >
                                    {sponsor.tier} Tier
                                </p>

                            </div>

                        ))}

                    </div>

                </section>
                */}


                {/* COMMUNITY OUTREACH */}

                <section className="team731-section team731-outreach team731-community-modern">

                    <div className="team731-outreach-hero">

                        <div>

                            <span className="team731-impact-eyebrow">
                                BEYOND THE COMPETITION
                            </span>

                            <h2>
                                Community Outreach
                            </h2>

                            <p>
                                We use robotics to spark curiosity,
                                build confidence, and open doors to
                                STEM for our community.
                            </p>

                        </div>

                        <div className="team731-outreach-hero-mark">
                            731<span>+</span>
                        </div>

                    </div>


                    <div className="team731-outreach-pill-row">

                        <span>
                            STEM Education
                        </span>

                        <span>
                            Community Engagement
                        </span>

                        <span>
                            Future Innovators
                        </span>

                    </div>


                    {/* ROBOWEEN */}

                    <details className="team731-outreach-project team731-outreach-card">

                        <summary>
                            <span className="team731-outreach-title">Roboween Outreach</span>
                            <span className="team731-outreach-toggle" aria-hidden="true">+</span>
                        </summary>

                        <div className="team731-outreach-content">

                            <div className="team731-outreach-image-container">

                                <img
                                    src={outreach1}
                                    alt="Roboween"
                                    className="team731-outreach-image"
                                />

                            </div>

                            <div className="team731-outreach-text">

                                <p>
                                    As an organization, ECG Robotics does
                                    their annual Roboween event. This year
                                    we partnered with the United Way
                                    Greensboro. At this event, we introduced
                                    over 50 people to FIRST robotics, and
                                    connected with over a thousand kids.
                                </p>

                                <p>
                                    This event was an amazing experience
                                    to connect with our community and display
                                    the robot along with all its innovative
                                    features.
                                </p>

                            </div>

                        </div>

                    </details>


                    {/* LIBRARY OUTREACH */}

                    <details className="team731-outreach-project team731-outreach-card">

                        <summary>
                            <span className="team731-outreach-title">Library Outreach</span>
                            <span className="team731-outreach-toggle" aria-hidden="true">+</span>
                        </summary>

                        <div className="team731-outreach-content">

                            <div className="team731-outreach-image-container">

                                <img
                                    src={outreach2}
                                    alt="Library Outreach"
                                    className="team731-outreach-image"
                                />

                            </div>

                            <div className="team731-outreach-text">

                                <p>
                                    We partnered with local public libraries
                                    in several demonstrations where some of
                                    our members showcased FIRST and fostered
                                    interest in STEM from our local youth.
                                    A lot of our rookies took part in these
                                    demonstrations, so they learned the
                                    importance of inspiring youth about STEM
                                    and it was a good way for them to reflect
                                    on everything they learned this season.
                                </p>

                            </div>

                        </div>

                    </details>


                    {/* BRICKSBORO */}

                    <details className="team731-outreach-project team731-outreach-card">

                        <summary>
                            <span className="team731-outreach-title">Bricksboro Outreach</span>
                            <span className="team731-outreach-toggle" aria-hidden="true">+</span>
                        </summary>

                        <div className="team731-outreach-content">

                            <div className="team731-outreach-image-container">

                                <img
                                    src={outreach3}
                                    alt="Bricksboro"
                                    className="team731-outreach-image"
                                />

                            </div>

                            <div className="team731-outreach-text">

                                <p>
                                    We met with several FLL teams and members
                                    of our community to showcase our robot.
                                    We also answered various questions that
                                    kids had about the engineering and design
                                    process, about robotics and STEM related
                                    fields.
                                </p>

                                <p>
                                    Through this event we reached over a
                                    thousand people and introduced over
                                    50 students to FIRST Robotics.
                                </p>

                            </div>

                        </div>

                    </details>

                </section>


                {/* MODERN MOVING GALLERY */}

                <section className="team731-section team731-gallery">

                    <h2>
                        Gallery
                    </h2>

                    <div className="team731-gallery-grid">

                        {Object.entries(galleryImages).map(
                            ([albumName, images]) => (

                                <div
                                    key={albumName}
                                    className="team731-gallery-album"
                                >

                                    <div className="team731-gallery-track">

                                        {[
                                            ...images,
                                            ...images
                                        ].map(
                                            (image, index) => (

                                                <figure
                                                    key={`${image}-${index}`}
                                                    className="team731-gallery-card"
                                                >

                                                    <img
                                                        src={getgalleryImg(image)}
                                                        alt={getgalleryCaptions(image)}
                                                        className="team731-gallery-image"
                                                    />

                                                    <figcaption>
                                                        {getgalleryCaptions(image)}
                                                    </figcaption>

                                                </figure>

                                            )
                                        )}

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </section>

            </div>

        </div>
    );
};


export default TeamPage731;