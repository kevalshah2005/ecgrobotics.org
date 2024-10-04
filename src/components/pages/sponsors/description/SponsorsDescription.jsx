import React from 'react'
import './SponsorsDescription.css'
import sponsorImage from '../../../../assets/sponsorImage.webp'
import CardItem from '../../../card/CardItem'
import logo731 from '../../../../assets/logo731.webp'
import logo5795 from '../../../../assets/logo5795.webp'
import logo6183 from '../../../../assets/logo6183.webp'
import logo10195 from '../../../../assets/logo10195.webp'
import logo1533 from '../../../../assets/logo1533.webp'
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

        {/* <Gallery3D /> */}

        <div className='cards'>
          <h1>Sponsorship Tiers</h1>
          <div className="cards-container">
            <div className="cards-wrapper">
              <ul className="cards-items">
                <CardItem 
                  src={logo731}
                  title='Diamond'
                  number='$7500+ Annual Contribution'
                  description="Wannabee Strange is a 12-year team where members learn to apply real-world skills. We've received the NC Inspire award in the last 2 years, gone to Worlds for 4 years running, and in 2019 we received a robot design nomination. 731 gives back with our Varsity Letter Initiative, pushing for the recognition of robotics as a varsity sport worldwide."
                />
                <CardItem 
                  src={logo5795}
                  title='Platinum'
                  number='$5000-7499 Annual Contribution'
                  description="Back to the Drawing Board has 6 years of experience and we have been to the World Championships 3 times! Every day, our team strives to build better robots, help out our sister teams, and spread the core values of FIRST to the community—especially through STEM Education Events—no matter how many times we have to go back to the drawing board."
                  path='/ftc5795'
                />
                <CardItem 
                  src={logo6183}
                  title='Gold'
                  number='$3000-4999 Annual Contribution'
                  description="The Thunder Ducks were established in 2014 and have consistently gone to the NC State Competition since. Our members are constantly helping other teams, teaching each other, and growing together as we strive together to continue to be better each and every day. We do this with our children's book series—Beek Beek Books—and by cultivating STEM skills for the real-world."
                  path='/ftc6183'
                />
                <CardItem 
                  src={logo10195}
                  title='Silver'
                  number='$1000-2499 Annual Contribution'
                  description="The Night Owls formed in 2015. Every year enthusiastic individuals come to fill old members' shoes. Our team consists of a mixture of students from schools around Greensboro. We've expanded our love for our team by making an owl-themed mascot complete with hand-made wings along with our own owl robot, Otto! We hope to go to Worlds for the first time this year!"
                  path='/ftc10195'
                />
                <CardItem 
                  src={logo10195}
                  title='Bronze'
                  number='$500-999 Annual Contribution'
                  description="The Night Owls formed in 2015. Every year enthusiastic individuals come to fill old members' shoes. Our team consists of a mixture of students from schools around Greensboro. We've expanded our love for our team by making an owl-themed mascot complete with hand-made wings along with our own owl robot, Otto! We hope to go to Worlds for the first time this year!"
                  path='/ftc10195'
                />
                <CardItem 
                  src={logo10195}
                  title='Honorable Mention'
                  number='$0-499 Annual Contribution'
                  description="The Night Owls formed in 2015. Every year enthusiastic individuals come to fill old members' shoes. Our team consists of a mixture of students from schools around Greensboro. We've expanded our love for our team by making an owl-themed mascot complete with hand-made wings along with our own owl robot, Otto! We hope to go to Worlds for the first time this year!"
                  path='/ftc10195'
                />
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SponsorsDescription
