import React from 'react'
import '../../../../App.css'
import './Landing.css'
import rightArrow from '../../../../assets/rightArrow.png'
import landingVideo from '../../../../assets/landingVideo.mp4'
import { Button } from '../../../button/Button'
import TypingEffect from '../../../typingEffect/TypingEffect'
import "aos/dist/aos.css";

function Landing() {  
  return (
    <div className='landing-container'>
      <video src={landingVideo} type='video/mp4' autoPlay loop muted />
      <h1 data-aos="fade-up">ECG Robotics</h1>
      <TypingEffect 
        className='landing-tagline-typing-effect' 
        text="North Carolina's premier high school robotics organization" 
        speed={50}
        delay={2000}
      />
      <div className='landing-btns'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' location='/about'>
          Learn more <img src={rightArrow} alt="" /></Button>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' location='/join'>
          Join <img src={rightArrow} alt="" /></Button>
      </div>
    </div>
  );
}

export default Landing;
