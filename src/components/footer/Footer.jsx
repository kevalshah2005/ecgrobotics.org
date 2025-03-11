import React from 'react'
import { Button } from '../button/Button'
import rightArrow from '../../assets/rightArrow.png'
import logo from '../../assets/logo.webp'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-join">
          <h1>Join Our Organization</h1>
          <h2>Students</h2>
          <p>ECG Robotics welcomes students from across Guilford County, NC. Join Triple Strange, our FRC team, or join one of our four FTC teams to <a href='/join'> become a part of our club</a>.</p>
          
          <h2>Adults</h2>
          <p>ECG Robotics is a student-led club, but we rely on parents and mentors to support and guide our students. Contact us at <a href='mailto:info@ecgrobotics.org'>info@ecgrobotics.org</a> to find out how you can help.</p>
          
          <h2>Businesses</h2>
          <p>Building championship-winning robots is no small task. Your business can help be a part of our success and help inspire the next generation of engineers, innovators, and leaders. <a href='/sponsors'>Check out our sponsors page</a> to learn more.</p>

      </section>

      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/' className="social-logo-link">
                    <img src={logo} alt='Social Logo' className='social-logo'/>
                </Link>
            </div>
            <small className="website-rights">ECG Robotics © 2024</small>
        </div>
      </section>
    </div>
  )
}

export default Footer
