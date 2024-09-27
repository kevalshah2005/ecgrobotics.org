import React from 'react'
import './SponsorsDescription.css'
import sponsorImage from '../../../../assets/sponsorImage.webp'
import Gallery3D from '../../../gallery3d/Gallery3D'

function SponsorsDescription() {
  return (
    <div className="sponsors-container">
        <div className="sponsors-header-container">
          <div className="sponsors-header-text">
            <h1>Become a Sponsor</h1>
            <h2>ECG Robotics is inspiring tomorrow’s engineers, programmers, designers, and thinkers.</h2>
            <h3>But we can't do it without your help.</h3>
          </div>
        </div>
        <div className="sponsors-description-container">
            <p>Thanks to our generous sponsors, our teams have inspired others while taking home state championship titles and earning a place at the FIRST World Championships in Houston. 
              <b><span style={{color: "var(--accent-text-color)"}}> Your company’s donation helps fund materials, tools, workspaces, and competition expenses </span></b>
              that will provide students with hands-on experience building not just robots, but
              <b><span style={{color: "var(--accent-text-color)"}}> real-world skills </span></b>
              that will stay with them into college and beyond.
            </p>
            <p>Ready? Contact us at <a href="mailto: info@ecgrobotics.org">info@ecgrobotics.org</a> and ask how you can help build tomorrow’s engineers, programmers, designers, and thinkers.</p>
            <img src={sponsorImage} alt="Image showing robot with sponsor logos on it" />
        </div>
        <Gallery3D />
    </div>
  )
}

export default SponsorsDescription
