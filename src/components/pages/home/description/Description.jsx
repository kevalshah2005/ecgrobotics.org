import React from 'react'
import './Description.css'
import overviewImage from '/assets/731_2019bot.webp'
import ftcImage from '/assets/731_2023bot.webp'
import frcImage from '/assets/1533_2023bot.webp'
import CardItem from '../../../card/CardItem'
import logo731 from '/assets/logo731.webp'
import logo5795 from '/assets/logo5795.webp'
import logo6183 from '/assets/logo6183.webp'
import logo10195 from '/assets/logo10195.webp'
import logo1533 from '/assets/logo1533.webp'
import "aos/dist/aos.css";

function Description() {
  var cardWidth = window.innerWidth < 600 ? '100%' : window.innerWidth < 1400 ? '200px' : '250px';

  return (
    <div className='description-container'>
      <div className='overview-container' data-aos="fade-up">
        <div className='text-container'>
          <p>ECG Robotics is a student-led, non-profit robotics club based in Greensboro, NC. Our teams compete in the FIRST Tech Challenge and FIRST Robotics Competition and welcome students from all over Guilford County.</p>
          <p>We inspire students locally, nationally, and internationally to learn about STEM through our award-winning outreach initiatives.</p>
        </div> 
        <img src={overviewImage} alt='' className='overview-image'/>
      </div>

      <div className='ftc-container'>
        <h1 data-aos="fade-up">FIRST Tech Challenge</h1>
        <div className='ftc-description-container' data-aos="fade-up">
          <p>FIRST Tech Challenge (FTC) is a robotics competition for middle and high school students, where teams design, build, and program robots to complete an annual challenge. Using engineering, coding, and teamwork, students develop problem-solving skills while applying real-world STEM concepts. FTC also encourages outreach, with teams mentoring younger students and promoting STEM in their communities.
          </p>
          <img src={ftcImage} alt='' className='ftc-image' loading='lazy'/>
        </div>
        <div className='cards' data-aos="fade-up">
          <h1>Check out our teams here!</h1>
          <div className="cards-container">
            <div className="cards-wrapper">
              <ul className="cards-items">
                <CardItem 
                  src={logo731}
                  title='Wannabee Strange'
                  number='731'
                  path='/ftc731'
                  glowColor="var(--orange)"
                  width={cardWidth}
                  imageWidth="100%"
                />
                <CardItem 
                  src={logo5795}
                  title='Back to the Drawing Board'
                  number='5795'
                  path='/ftc5795'
                  glowColor="var(--orange)"
                  width={cardWidth}
                  imageWidth="100%"
                />
                <CardItem 
                  src={logo6183}
                  title='Thunderducks'
                  number='6183'
                  path='/ftc6183'
                  glowColor="var(--orange)"
                  width={cardWidth}
                  imageWidth="100%"
                />
                <CardItem 
                  src={logo10195}
                  title='Night Owls'
                  number='10195'
                  path='/ftc10195'
                  glowColor="var(--orange)"
                  width={cardWidth}
                  imageWidth="100%"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="frc-container">
      <h1 data-aos="fade-up">FIRST Robotics Competition</h1>
        <div className='frc-description-container' data-aos="fade-up">
          <p> FIRST Robotics Competition (FRC) is a high school robotics program where teams build large, industrial-style robots to compete in a new global challenge each year. Combining advanced engineering, programming, and strategy, FRC pushes students to collaborate, innovate, and solve complex problems under time constraints. Teams also engage in outreach, community impact, and STEM advocacy as core parts of the experience.
          </p>
          <img src={frcImage} alt='' className='frc-image' loading='lazy'/>
        </div>
        <div className='cards' data-aos="fade-up">
          <h1>Check out our team here!</h1>
          <div className="cards-container">
            <div className="cards-wrapper">
              <ul className="cards-items">
                <CardItem 
                  src={logo1533}
                  title='Triple Strange'
                  number='1533'
                  path='/frc1533'
                  glowColor="var(--blue)"
                  width={cardWidth}
                  imageWidth="100%"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
