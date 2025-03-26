import React, { useEffect, useState } from 'react';
import '../../../../App.css';
import './Landing.css';
import rightArrow from '../../../../assets/rightArrow.png';
import landingVideo from '../../../../assets/landingVideo.mp4';
import { Button } from '../../../button/Button';
import TypingEffect from '../../../typingEffect/TypingEffect';
import "aos/dist/aos.css";

function Landing() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger the "loaded" class after the component mounts
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay slightly to ensure the video is ready

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`landing-container ${loaded ? 'loaded' : ''}`}>
      <video src={landingVideo} type='video/mp4' autoPlay loop muted />
      <h1 data-aos="fade-down">ECG Robotics</h1>
      <TypingEffect 
        className='landing-tagline-typing-effect' 
        text="North Carolina's premier high school robotics organization" 
        speed={50}
        delay={1500}
      />
      <div className='landing-btns'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' location='/about'>
          Learn more <img src={rightArrow} alt="" />
        </Button>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' location='/join'>
          Join <img src={rightArrow} alt="" />
        </Button>
      </div>
    </div>
  );
}

export default Landing;
