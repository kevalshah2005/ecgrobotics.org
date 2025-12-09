import React from 'react';
import './Outreach6183.css';

import outreach1 from '/assets/FTC6183/Outreach1.png';
import outreach2 from '/assets/FTC6183/Outreach2.png';
import outreach3 from '/assets/FTC6183/Outreach3.png';
import outreach4 from '/assets/FTC6183/Outreach4.png';
import outreach5 from '/assets/FTC6183/Outreach6.png';

const images = [outreach1, outreach2, outreach3, outreach4, outreach5];

const Outreach6183 = () => {
  return (
    <section className="outreach-container-6183">
      <h2 className="section-title-6183">Outreach</h2>

      <div className="outreach-gallery-6183">
        <div className="outreach-track-6183">
          {images.map((src, i) => (
            <div key={i} className="outreach-item-6183">
              <img src={src} alt={`Outreach ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outreach6183;
