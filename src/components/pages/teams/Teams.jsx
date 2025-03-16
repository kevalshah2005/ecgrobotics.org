import React from 'react'
import './Teams.css'
import CardItem from '../../card/CardItem'
import logo731 from '../../../assets/logo731.webp'
import logo5795 from '../../../assets/logo5795.webp'
import logo6183 from '../../../assets/logo6183.webp'
import logo10195 from '../../../assets/logo10195.webp'
import logo1533 from '../../../assets/logo1533.webp'

function Teams() {
    return (
        <div className='teams-container'>
            <h1>FIRST Tech Challenge</h1>
            <div className='cards' data-aos="fade-up">
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

            <h1>FIRST Robotics Competition</h1>
            <div className='cards' data-aos="fade-up">
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
    )
}

export default Teams
