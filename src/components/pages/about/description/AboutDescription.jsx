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
        <div className="about-us-description-container">
          <h1>About ECG Robotics</h1>
          <h3>More about the club and its history</h3>

          <Gallery 
            images={galleryImages}
            left={true}
          />
          <Gallery 
            images={galleryImages}
            left={false}
          />

          <p>ECG Robotics is a student-led club in Greensboro, NC made up of five FIRST Robotics teams, working together each season to not only build robots, but to share our love of robotics and STEM with kids and adults in our community.</p>
          
          <h2>What is FIRST?</h2>
          <p>FIRST (For Inspiration and Recognition of Science and Technology​) is a global non-profit organization that promotes science, technology, engineering, and math education through youth-oriented robotics competitions.</p>
          <p>ECG Robotics fields teams that compete in two FIRST programs:</p>
          <p><b>FIRST Tech Challenge (FTC):</b> FTC students work together with their mentors to design and build robots to compete in a dynamic and exciting challenge released every September. Teams program classroom-scale robots to follow autonomous commands before student drivers take control in two-on-two matches. On and off the field, students develop STEM skills, engage in community outreach, practice engineering innovation, and build confidence to help them succeed.</p>
          <p><strong>FIRST Robotics Competition (FRC):</strong> Each January brings a new challenge for FRC teams. Starting with a Kit of Parts, they design, program, and build industrial-sized robots to play an action-packed game on a themed field as part of a three-team alliance. Guided by mentors and sponsors, students learn engineering and problem-solving skills as they compete for awards, create a team identity, raise funds, hone teamwork skills, and advance appreciation for STEM in their community.</p>
        
          <h2>Our History</h2>
          
        </div>
      </div>
    </div>
  )
}

export default AboutDescription
