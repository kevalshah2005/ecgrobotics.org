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

function Description() {
  return (
    <div className='description-container'>
      <div className='overview-container'>
        <div className='text-container'>
          <p>ECG Robotics is a student-led, non-profit robotics club based in Greensboro, NC. Our teams compete in the FIRST Tech Challenge and FIRST Robotics Competition and welcome students from all over Guilford County.</p>
          <p>We inspire students locally, nationally, and internationally to learn about STEM through our award-winning outreach initiatives.</p>
        </div> 
        <img src={overviewImage} alt='' className='overview-image'/>
      </div>

      <div className='ftc-container'>
        <h1>FIRST Tech Challenge</h1>
        <div className='ftc-description-container'>
          <p>FIRST Tech Challenge (FTC) is a robotics competition for middle and high school students, where teams design, build, and program robots to complete an annual challenge. Using engineering, coding, and teamwork, students develop problem-solving skills while applying real-world STEM concepts. FTC also encourages outreach, with teams mentoring younger students and promoting STEM in their communities.
          </p>
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
                  description="Wannabee Strange is a 12-year team where members learn to apply real-world skills. We've received the NC Inspire award in the last 2 years, gone to Worlds for 4 years running, and in 2019 we received a robot design nomination. 731 gives back with our Varsity Letter Initiative, pushing for the recognition of robotics as a varsity sport worldwide."
                  path='/ftc731'
                  glowColor="var(--orange)"
                />
                <CardItem 
                  src={logo5795}
                  title='Back to the Drawing Board'
                  number='5795'
                  description="Back to the Drawing Board has 6 years of experience and we have been to the World Championships 3 times! Every day, our team strives to build better robots, help out our sister teams, and spread the core values of FIRST to the community—especially through STEM Education Events—no matter how many times we have to go back to the drawing board."
                  path='/ftc5795'
                  glowColor="var(--orange)"
                />
                <CardItem 
                  src={logo6183}
                  title='Thunderducks'
                  number='6183'
                  description="The Thunder Ducks were established in 2014 and have consistently gone to the NC State Competition since. Our members are constantly helping other teams, teaching each other, and growing together as we strive together to continue to be better each and every day. We do this with our children's book series—Beek Beek Books—and by cultivating STEM skills for the real-world."
                  path='/ftc6183'
                  glowColor="var(--orange)"
                />
                <CardItem 
                  src={logo10195}
                  title='Night Owls'
                  number='10195'
                  description="The Night Owls formed in 2015. Every year enthusiastic individuals come to fill old members' shoes. Our team consists of a mixture of students from schools around Greensboro. We've expanded our love for our team by making an owl-themed mascot complete with hand-made wings along with our own owl robot, Otto! We hope to go to Worlds for the first time this year!"
                  path='/ftc10195'
                  glowColor="var(--orange)"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="frc-container">
      <h1>FIRST Robotics Competition</h1>
        <div className='frc-description-container'>
          <p> This is filler text. In this space will be an explanation about what FRC is. Ideally I'd like to keep it a general program overview rather than anything about the team, since that's already below.
          </p>
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
                  description="Triple Strange is a 3-time state champion team, established in 2004. We were the first team to be a part of ECG robotics. We typically accept those from grades 9-12, but we also enjoy having younger groups shadowing us and learning as we often encourage them to join the team as well. We keep striving to be unusually good at the impossible as we grow every day."
                  path='/frc1533'
                  glowColor="var(--blue)"
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
