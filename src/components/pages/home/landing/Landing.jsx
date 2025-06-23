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
  const initialOpacity = 0.7;
  const [overlayOpacity, setOverlayOpacity] = useState(initialOpacity);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Trigger the "loaded" class after the component mounts
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay slightly to ensure the video is ready

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector('.video-background');
      if (!video) return;

      const videoHeight = video.offsetHeight;
      const videoTop = video.getBoundingClientRect().top;
      const scrollPosition = window.scrollY;

      const opacity = (1 - initialOpacity) * Math.min(Math.max((scrollPosition - videoTop) / videoHeight, 0), 1) + initialOpacity;
      setOverlayOpacity(opacity);

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`landing-container ${loaded ? 'loaded' : ''}`}>
      <div className="dark-overlay" style={{opacity: overlayOpacity}}></div>

      <video className="video-background" autoPlay muted loop>
        <source src={landingVideo_mp4} type='video/mp4' />
        <source src={landingVideo_webm} type='video/webm' />
        Your browser does not support the video tag or the file format of this video.
      </video>
      
      <div data-aos="fade-down">
        <h1 className="landing-title">ECG Robotics</h1>
        <h2 className='landing-tagline'>North Carolina's leading high school robotics organization</h2>
      </div>
      <TypingEffect 
        className='landing-motto-typing-effect'
        text='"Unusually good at the impossible"' 
        speed={50}
        delay={1500}
      />
      <div className='landing-btns'>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' location='/about'>
          Learn more <img src={rightArrow} alt="" />
        </Button>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' location='/join'>
          Join <img src={rightArrow} alt="" />
        </Button>
      </div>
      <div className={`scroll-indicator ${scrolled ? 'hide' : ''}`}>
        <span>Scroll down</span>
        <div className="scroll-arrow">&#8595;</div> {/* Unicode down arrow */}
      </div>
    </div>
  );
}

export default Landing;
