import React from 'react';
import CardItem from '../../../card/CardItem';

function SponsorTierSection({ title, description, sponsors, fallback, width, imageWidth }) {
  return (
    <>
      <h2 data-aos="fade-up">{title}</h2>
      <p data-aos="fade-up">{description}</p>
      {
        sponsors.length > 0 ? (
          <div className='cards' data-aos="fade-up">
            <div className="cards-container">
              <div className="cards-wrapper">
                <ul className="cards-items">
                  {sponsors.map((sponsor, index) => (
                    <CardItem
                      key={sponsor.name + index}
                      title={sponsor.name}
                      src={sponsor.logo}
                      path={sponsor.link}
                      width={width}
                      imageWidth={imageWidth}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <p data-aos="fade-up">{fallback}</p>
        )
      }
    </>
  );
}

export default SponsorTierSection;
