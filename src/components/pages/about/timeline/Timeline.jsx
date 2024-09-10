import React from 'react'
import './Timeline.css'
import logo731 from '../../../../assets/logo731.png'
import logo5795 from '../../../../assets/logo5795.png'
import logo6183 from '../../../../assets/logo6183.png'
import logo10195 from '../../../../assets/logo10195.png'
import logo1533 from '../../../../assets/logo1533.png'

function Timeline() {
  return (
    <div className="timeline-container">
        <h1>Timeline</h1>

        <div className="timeline">
            <div className="container left-container">
                <img src={logo1533} />
                <div className="text-box">
                    <h2>Timeline Item 1</h2>
                    <small>Timeline Year</small>
                    <p>Timeline description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>
            <div className="container right-container">
                <img src={logo731} />
                <div className="text-box">
                    <h2>Timeline Item 2</h2>
                    <small>Timeline Year</small>
                    <p>Timeline description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
            <div className="container left-container">
                <img src={logo5795} />
                <div className="text-box">
                    <h2>Timeline Item 3</h2>
                    <small>Timeline Year</small>
                    <p>Timeline description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>
            <div className="container right-container">
                <img src={logo6183} />
                <div className="text-box">
                    <h2>Timeline Item 4</h2>
                    <small>Timeline Year</small>
                    <p>Timeline description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
            <div className="container left-container">
                <img src={logo10195} />
                <div className="text-box">
                    <h2>Timeline Item 5</h2>
                    <small>Timeline Year</small>
                    <p>Timeline description text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <span className="left-container-arrow"></span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Timeline
