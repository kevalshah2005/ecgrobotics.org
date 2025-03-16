import React from 'react';
import './Sponsor.css';
import 'aos/dist/aos.css';

const Sponsor = (props) => {
    return (
        <div 
            className={`sponsor-card ${props.index % 2 == 0 ? 'even' : 'odd'}`}
            data-aos="fade-up"
        >
            <div className="sponsor-logo">
                <a href={props.link} target="_blank" rel="noopener noreferrer" className="sponsor-link">
                    <img src={props.logo} alt={`${props.name} logo`} />
                </a>
            </div>
            <div className="sponsor-details">
                <h2 className="sponsor-name">{props.name}</h2>
                <p className="sponsor-description">{props.description}</p>
            </div>
        </div>
    );
};

export default Sponsor;
