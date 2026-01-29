import React from 'react'
import './Description.css'
import overviewImage from '../../../../assets/731_2019bot.webp'
import ftcImage from '../../../../assets/731_2023bot.webp'
import frcImage from '../../../../assets/1533_2023bot.webp'
import CardItem from '../../../card/CardItem'
import logo731 from '../../../../assets/logo731.webp'
import logo5795 from '../../../../assets/logo5795.webp'
import logo6183 from '../../../../assets/logo6183.webp'
import logo10195 from '../../../../assets/logo10195.webp'
import logo1533 from '../../../../assets/logo1533.webp'
import landingVideoThumbnail from '../../../../assets/LandingVideoThumbnail.webp'
import frcSectionBackground from '../../../../assets/FRCSectionBackground.png'
import "aos/dist/aos.css";

function Description() {
  return (
    <div className='description-container'>
      <div className='overview-container' data-aos="fade-up">
        <div className='text-container'>
          <p>ECG Robotics is a student-led, non-profit robotics club based in Greensboro, NC. Our teams compete in the FIRST Tech Challenge and FIRST Robotics Competition and welcome students from all over Guilford County.</p>
          <p>We inspire students locally, nationally, and internationally to learn about STEM through our award-winning outreach initiatives.</p>
        </div> 
        <img src={overviewImage} alt='' className='overview-image'/>
      </div>

      <div className="section-box ftc-box" data-aos="fade-up">
        <div className='ftc-container' style={{ backgroundImage: `url(${landingVideoThumbnail})` }}>
          <h1>FIRST Tech Challenge</h1>
          <div className='ftc-description-container'>
            <p>FIRST Tech Challenge (FTC) is a robotics competition for middle and high school students, where teams design, build, and program robots to complete an annual challenge. Using engineering, coding, and teamwork, students develop problem-solving skills while applying real-world STEM concepts. FTC also encourages outreach, with teams mentoring younger students and promoting STEM in their communities.</p>
            <img src={ftcImage} alt='' className='ftc-image' />
          </div>
          <div className='cards'>
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
                  />
                  <CardItem 
                    src={logo5795}
                    title='Back to the Drawing Board'
                    number='5795'
                    path='/ftc5795'
                    glowColor="var(--orange)"
                  />
                  <CardItem 
                    src={logo6183}
                    title='Thunderducks'
                    number='6183'
                    path='/ftc6183'
                    glowColor="var(--orange)"
                  />
                  <CardItem 
                    src={logo10195}
                    title='Night Owls'
                    number='10195'
                    path='/ftc10195'
                    glowColor="var(--orange)"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-box frc-box" data-aos="fade-up">
        <div className="frc-container" style={{ backgroundImage: `url(${frcSectionBackground})` }}>
          <h1>FIRST Robotics Competition</h1>
          <div className='frc-description-container'>
            <p>This is filler text. In this space will be an explanation about what FRC is. Ideally I'd like to keep it a general program overview rather than anything about the team, since that's already below.</p>
            <img src={frcImage} alt='' className='frc-image' />
          </div>
          <div className='cards'>
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
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description
