import React from 'react'
import { Button } from '../button/Button'
import rightArrow from '../../assets/rightArrow.png'
import logo from '../../assets/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-join">
        <p className="footer-join-heading">
            Interested in joining one of our teams? Join using the form below!
        </p>
        <p className="footer-join-text">
            FIRST Tech Challenge applications are open from March to August. FIRST Robotics Competition applications are open year round.
        </p>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' location='/join'>
          Join <img src={rightArrow} alt="" /></Button>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
                <Link to='/' className="social-logo-link">
                    <img src={logo} alt='' className='social-logo'/>
                </Link>
            </div>
            <small className="website-rights">ECG Robotics © 2024</small>
        </div>
      </section>
    </div>
  )
}

export default Footer
