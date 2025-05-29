import React, { useEffect, useState, useRef } from 'react';
import './TeamPage1533.css';
import youtubeLogo from '../../../../assets/YoutubeLogo.webp';
import instagramLogo from '../../../../assets/InstagramLogo.webp';
import frc1533_2023bot from '../../../../assets/1533_2023bot.webp';
import frc1533_2024statesteam from '../../../../assets/1533_2024statesteam.webp';
import frc1533_2018teampic from '../../../../assets/1533_2018teampic.webp';
import Gallery from '../../../gallery/Gallery';

const galleryImages = [
    frc1533_2023bot,
    frc1533_2024statesteam,
    frc1533_2018teampic
];

const TeamPage1533 = () => {
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
        <div className="team1533-team-container" ref={teamContainerRef}>
            <h1>FRC 1533 - Triple Strange</h1>
            <div className="team1533-social-links">
                <a href="https://www.instagram.com/team1533/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramLogo} alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/@team1533" target="_blank" rel="noopener noreferrer">
                    <img src={youtubeLogo} alt="YouTube" />
                </a>
            </div>
            <section className="team1533-overview">
                <h2>Overview</h2>
                <p>
                    FRC Team 1533, Triple Strange, is a highly accomplished FIRST Robotics Competition team from Greensboro, North Carolina. 
                    Since our founding in 2005, we have been recognized for our competitive excellence, innovative engineering, and strong outreach in the community.
                </p>
            </section>
            <section className="team1533-history">
                <h2>Team History & Achievements</h2>
                <ul>
                    <li><b>2025</b>
                        <ul>
                            <li>FIRST North Carolina State Championship - <span className="team1533-highlight">District Championship Finalist</span></li>
                            <li>FNC District UNC Asheville Event - District Event Finalist, Gracious Professionalism Award</li>
                            <li>FNC District Catawba County Event - District Championship Dean's List Semi-Finalist (Vidhatu P), Innovation in Control Award sponsored by nVent</li>
                        </ul>
                    </li>
                    <li><b>2024</b>
                        <ul>
                            <li>
                                FIRST North Carolina District State Championship - 
                                <span className="team1533-highlight"> District Championship Winner</span>, Gracious Professionalism Award
                            </li>
                            <li>
                                FNC District Mecklenburg County Event - District Event Finalist, Creativity Award sponsored by Rockwell Automation
                            </li>
                        </ul>
                    </li>
                    <li><b>2023</b>
                        <ul>
                            <li>
                                FNC District Mecklenburg County Event - <span className="team1533-highlight"> District Event Winner</span>, District Championship Dean's List Semi-Finalist (Annabel Dierking), Autonomous Award sponsored by Ford
                            </li>
                        </ul>
                    </li>
                    <li><b>2022</b>
                        <ul>
                            <li>
                                Newton Division - <span className="team1533-highlight">Championship Division Finalist</span>
                            </li>
                            <li>
                                FIRST North Carolina District State Championship - <span className="team1533-highlight">District Championship Winner</span>, Industrial Design Award sponsored by General Motors
                            </li>
                            <li>
                                FNC District Guilford County Event - District Event Winner, Quality Award
                            </li>
                            <li>
                                FNC District UNC Asheville Event - Quality Award
                            </li>
                        </ul>
                    </li>
                    <li><b>2021</b>
                        <ul>
                            <li>Cobalt Group - INFINITE RECHARGE At Home Challenge - Excellence in Engineering Award</li>
                            <li>Neon Group - FIRST Innovation Challenge - FIRST Innovation Challenge Semi-Finalist Award</li>
                        </ul>
                    </li>
                    <li><b>2020</b>
                        <ul>
                            <li>FNC District UNC Pembroke Event - <span className="team1533-highlight">District Event Winner</span></li>
                        </ul>
                    </li>
                    <li><b>2019</b>
                        <ul>
                            <li>
                                FIRST North Carolina State Championship - <span className="team1533-highlight"> District Championship Winner</span>, FIRST Dean's List Finalist Award (Aidan Hunt), Autonomous Award sponsored by Ford
                            </li>
                            <li>
                                FNC District UNC Asheville Event - District Event Finalist, Innovation in Control Award sponsored by Rockwell Automation
                            </li>
                            <li>
                                FNC District Guilford County Event - District Event Finalist, Quality Award sponsored by Motorola Solutions Foundation
                            </li>
                        </ul>
                    </li>
                    <li><b>2018</b>
                        <ul>
                            <li>
                                Turing Division - <span className="team1533-highlight">Championship Subdivision Winner</span>
                            </li>
                            <li>
                                FIRST North Carolina State Championship - <span className="team1533-highlight"> District Championship Winner</span>, Excellence in Engineering Award sponsored by Delphi
                            </li>
                            <li>
                                NC District Forsyth County Event - District Event Winner, Excellence in Engineering Award sponsored by Delphi
                            </li>
                            <li>
                                NC District UNC Asheville Event - District Event Winner, Industrial Design Award sponsored by General Motors
                            </li>
                        </ul>
                    </li>
                    <li><b>2017</b>
                        <ul>
                            <li>NC District - UNC Asheville Event - Gracious Professionalism Award sponsored by Johnson & Johnson</li>
                            <li>NC District - Greensboro Event - District Event Finalist, Industrial Design Award sponsored by General Motors</li>
                        </ul>
                    </li>
                    <li><b>2016</b>
                        <ul>
                            <li>Carson Division - Creativity Award sponsored by Xerox</li>
                            <li>
                                NC FIRST Robotics State Championship - <span className="team1533-highlight">District Championship Winner</span>, FIRST Dean's List Finalist Award (Erin Goeke), Creativity Award sponsored by Xerox
                            </li>
                            <li>
                                NC District - Campbell University/Johnston Community College Event - District Event Winner, Innovation in Control Award sponsored by Rockwell Automation
                            </li>
                            <li>
                                NC District - UNC Asheville Event - Creativity Award sponsored by Xerox
                            </li>
                            <li>
                                NC District - Guilford County Event - Industrial Design Award sponsored by General Motors
                            </li>
                        </ul>
                    </li>
                    <li><b>2015</b>
                        <ul>
                            <li>North Carolina Regional - Innovation in Control Award sponsored by Rockwell Automation</li>
                            <li>Palmetto Regional - Regional Finalists</li>
                        </ul>
                    </li>
                    <li><b>2014</b>
                        <ul>
                            <li>Virginia Regional - Team Spirit Award sponsored by Chrysler</li>
                            <li>North Carolina Regional - FIRST Dean's List Finalist (Matt Gorton)</li>
                        </ul>
                    </li>
                    <li><b>2013</b>
                        <ul>
                            <li>Einstein Field - <span className="team1533-highlight">FIRST Dean's List Award (Ephraim Bililign)</span></li>
                            <li>Queen City Regional - Team Spirit Award sponsored by Chrysler</li>
                            <li>North Carolina Regional - FIRST Dean's List Finalist (Ephraim Bililign)</li>
                        </ul>
                    </li>
                    <li><b>2009</b>
                        <ul>
                            <li>Peachtree Regional - Judges Award</li>
                        </ul>
                    </li>
                    <li><b>2008</b>
                        <ul>
                            <li>Peachtree Regional - Regional Engineering Inspiration Award</li>
                        </ul>
                    </li>
                    <li><b>2007</b>
                        <ul>
                            <li>Peachtree Regional - Regional Finalist, Judges Award</li>
                        </ul>
                    </li>
                    <li><b>2006</b>
                        <ul>
                            <li>Peachtree Regional - Judge's Award (Day 1), Website Award</li>
                        </ul>
                    </li>
                </ul>
                <div style={{marginTop: "2.5em", fontStyle: "italic", color: "#FFD166", "font-size": "var(--font-sm"}}>
                    <b>Highlighted achievements</b> indicate major wins, division/subdivision championships, and Dean's List awards.
                </div>
            </section>
            <section className="team1533-outreach">
                <h2>Outreach</h2>
                <p>Still in development. Come back later to see our outreach!</p>
            </section>
            <section className="team1533-media">
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

export default TeamPage1533;