import React from 'react'
import './AboutDescription.css'
import Gallery from '../../../gallery/Gallery'
import teampic_1533_2022 from '../../../../assets/1533_2022teampic.webp'
import teampic_1533_2023 from '../../../../assets/1533_2023teampic.webp'
import teampic_1533_states_2024 from '../../../../assets/1533_2024statesteam.webp'
import working_5795 from '../../../../assets/5795_working.webp'
import bot_731_2024 from '../../../../assets/731_2024bot.webp'
import teampic_731_2019 from '../../../../assets/731_2019teampic.webp'
import climb_1533_2018 from '../../../../assets/1533_2018climb.webp'
import teampic_1533_2018 from '../../../../assets/1533_2018teampic.webp'
import working_6183 from '../../../../assets/6183_working.webp'
import teampic_10195_2025 from '../../../../assets/10195_2025teampic.webp'
import 'aos/dist/aos.css'

// Fisher-Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function AboutDescription() {
  var galleryImagesLeft = [
    teampic_1533_2022,
    teampic_1533_2023,
    working_5795,
    bot_731_2024,
    teampic_731_2019,
  ];

  var galleryImagesRight = [
    climb_1533_2018,
    teampic_1533_2018,
    working_6183,
    teampic_1533_states_2024,
    teampic_10195_2025,
  ];

  // Randomize order of images
  shuffle(galleryImagesLeft);
  shuffle(galleryImagesRight);

  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-header-container">
          <h1 data-aos="fade-up">About ECG Robotics</h1>
          <h2 data-aos="fade-up">More about the club and its history</h2>
        </div>
        <div className="about-us-description-container">
          <Gallery 
            images={galleryImagesLeft}
            left={true}
            width = {window.innerWidth * 0.3}
            height = {window.innerWidth * 0.3 * 0.625}
          />
          <Gallery 
            images={galleryImagesRight}
            left={false}
            width = {window.innerWidth * 0.3}
            height = {window.innerWidth * 0.3 * 0.625}
          />

          <p data-aos="fade-up">ECG Robotics is a student-led club in Greensboro, NC made up of five FIRST Robotics teams, working together each season to not only build robots, but also share our love of robotics and STEM with kids and adults in our community.</p>
          
          <h1 data-aos="fade-up">What is FIRST?</h1>
          <p data-aos="fade-up">FIRST (For Inspiration and Recognition of Science and Technology​) is a global non-profit organization that promotes science, technology, engineering, and math education through youth-oriented robotics competitions.</p>
          <p data-aos="fade-up">ECG Robotics fields teams that compete in two FIRST programs: FIRST Tech Challenge (FTC) and FIRST Robotics Competition (FRC).</p>
                  
          <h1 data-aos="fade-up">Our History</h1>
          <p data-aos="fade-up">ECG Robotics was formed in 2004 and started out with a single team – FRC Team 1533 Triple Strange. As the club grew, it added FTC Team 731 Wannabee Strange in 2007.</p>
          <p data-aos="fade-up">Over the next decade, ECG Robotics continued to expand, adding additional FTC teams in 2011 (FTC 5795 Back to the Drawing Board), 2012 (FTC 6183 Thunderducks), and 2015 (FTC 10195 Night Owls). Together with their adult mentors, all five teams have worked to inspire students across Guilford County, build capable, award-winning robots, and spread a love of robotics and STEM throughout their community.</p>
        
        </div>
      </div>
    </div>
  )
}

export default AboutDescription
