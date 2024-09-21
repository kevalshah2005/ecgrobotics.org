import React from 'react'
import './AboutDescription.css'
import Gallery from '../../../gallery/Gallery'
import teampic_1533_2022 from '../../../../assets/1533_2022teampic.jpg'
import teampic_1533_2023 from '../../../../assets/1533_2023teampic.jpg'
import teampic_1533_states_2024 from '../../../../assets/1533_2024statesteam.jpg'
import working_5795 from '../../../../assets/5795_working.jpg'

function AboutDescription() {
  const galleryImages = [
    teampic_1533_2022,
    teampic_1533_2023,
    working_5795,
    teampic_1533_2023,
    teampic_1533_2022,
    teampic_1533_states_2024
  ];

  return (
    <div>
      <div className="about-us-container">
        <div className="about-us-header-container">
          <h1>About ECG Robotics</h1>
          <h2>More about the club and its history</h2>
        </div>
        <div className="about-us-description-container">
          <Gallery 
            images={galleryImagesLeft}
            left={true}
          />
          <Gallery 
            images={galleryImagesRight}
            left={false}
          />

          <p>ECG Robotics is a student-led club in Greensboro, NC made up of five FIRST Robotics teams, working together each season to not only build robots, but also share our love of robotics and STEM with kids and adults in our community.</p>
          
          <h1>What is FIRST?</h1>
          <p>FIRST (For Inspiration and Recognition of Science and Technology​) is a global non-profit organization that promotes science, technology, engineering, and math education through youth-oriented robotics competitions.</p>
          <p>ECG Robotics fields teams that compete in two FIRST programs: FIRST Tech Challenge (FTC) and FIRST Robotics Competition (FRC).</p>
                  
          <h1>Our History</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutDescription
