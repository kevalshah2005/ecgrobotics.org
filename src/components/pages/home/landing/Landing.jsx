import React, { useEffect, useState } from 'react';
import '../../../../App.css';
import './Landing.css';
import rightArrow from '../../../../assets/rightArrow.png';
import landingVideo_mp4 from '../../../../assets/landingVideo.mp4';
import landingVideo_webm from '../../../../assets/landingVideo.webm';
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
      <video autoPlay loop>
        <source src={landingVideo_mp4} type='video/mp4' />
        <source src={landingVideo_webm} type='video/webm' />
        Your browser does not support the video tag or the file format of this video.
      </video>
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
