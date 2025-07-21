import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '/assets/logo.webp';
import instagramLogo from '/assets/InstagramLogo.webp';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-join">
                <h1>Join Our Organization</h1>

                <div className="footer-join-grid">
                    <div className="footer-join-section">
                        <h2>Students</h2>
                        <p>
                            ECG Robotics welcomes students from across Guilford County, NC.
                            Join Triple Strange, our FRC team, or one of our four FTC teams 
                            to <a href="/join">become a part of our club</a>.
                        </p>
                    </div>

                    <div className="footer-join-section">
                        <h2>Adults</h2>
                        <p>
                            ECG Robotics is student-led, but we rely on parents and mentors to
                            support and guide our students. Contact us 
                            at <a href="mailto:info@ecgrobotics.org">info@ecgrobotics.org</a> to learn how you can help.
                        </p>
                    </div>

                    <div className="footer-join-section">
                        <h2>Businesses</h2>
                        <p>
                            Building championship-winning robots is no small task. Your business can help inspire
                            the next generation of engineers and leaders. <a href="/sponsors">Learn more here</a>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="social-media">
                <div className="social-media-wrap">
                    <Link to="/" className="footer-logo">
                        <img src={logo} alt="ECG Robotics Logo" className="social-logo" />
                    </Link>
                    <small className="website-rights">ECG Robotics © 2025</small>
                    <div className="social-icons">
                        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="CX6UZ8EPPVX7C" />
                        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                        <img loading="lazy" decoding="async" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                        </form>
                        <a
                            href="https://www.instagram.com/ecg.robotics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon-link"
                            aria-label="Instagram"
                        >
                            <img src={instagramLogo} alt="Instagram" className="social-icon-img" />
                        </a>
                    
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;