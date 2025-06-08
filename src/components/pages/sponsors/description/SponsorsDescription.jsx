import React from 'react'
import './SponsorsDescription.css'
import sponsorImage from '../../../../assets/sponsorImage.webp'
import SponsorTierSection from './SponsorTierSection'

const sponsors = [
  {
    name: 'Qorvo',
    level: 'diamond',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUsjSagFYNGwkepPA-4UHeH5UVoheqg9T2g&s',
    link: 'https://www.qorvo.com',
  },
  {
    name: 'P&G Foundation',
    level: 'diamond',
    logo: 'https://images.ctfassets.net/oggad6svuzkv/7znyJc3Y7SecEoKSYKWoaQ/4a24e9015c360799cfb072adcd92cc5e/P_G_Logo_RGB.svg',
    link: 'https://us.pg.com/',
  },
  {
    name: 'GENE HAAS Corp',
    level: 'platinum',
    logo: 'https://www.haascnc.com/etc.clientlibs/haascnc/clientlibs/clientlib-site/resources/images/haas-logo.svg',
    link: 'https://www.haascnc.com',
  },
  {
    name: 'TE Connectivity',
    level: 'platinum',
    logo: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-1/326727493_5627656727331786_7560671066058651734_n.png?_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=qSRUIYw4CloQ7kNvgFkD02Z&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AdrJVEp47JDhB8t6xvUr61R&oh=00_AYBeYy0aLphM0rQtJvrDv4QbN2i2s_ETt7K45wQw5BLEhw&oe=67117612',
    link: 'https://www.te.com',
  },
  {
    name: 'Tannenbaum-Sternberger Foundation',
    level: 'platinum',
    logo: 'https://example.com/tannenbaum-logo.png',
    link: 'https://www.tsfoundation.com',
  },
  {
    name: 'HondaJet',
    level: 'gold',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Honda_jet_logo.svg',
    link: 'https://www.hondajet.com',
  },
  {
    name: 'Collins Aerospace',
    level: 'gold',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGOO3rPemY70w/company-logo_200_200/company-logo_200_200/0/1687169228107/collins_aerospace_logo?e=2147483647&v=beta&t=wL6zSWap3uy-9ZuEJFrZTWu0T9r6J0-gNR4_0T94S6c',
    link: 'https://www.collinsaerospace.com',
  },
  {
    name: 'Intuitive',
    level: 'gold',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQE2wfXIjiCzWA/company-logo_200_200/company-logo_200_200/0/1630649619968/intuitivesurgical_logo?e=1736985600&v=beta&t=zOMSNuS7nky-MN-FxubP7cMlbQizj-RMBPtRq7V5E6I',
    link: 'https://www.intuitive.com',
  },
  {
    name: 'Publix Charity',
    level: 'bronze',
    logo: 'https://www.publix.com/-/media/publix/global/logo.png',
    link: 'https://www.publix.com',
  },
  {
    name: 'Harris Teeter',
    level: 'bronze',
    logo: 'https://www.harristeeter.com/content/v2/images/logos/harris-teeter-logo.png',
    link: 'https://www.harristeeter.com',
  },
  {
    name: 'United Way',
    level: 'bronze',
    logo: 'https://www.unitedway.org/assets/img/united-way-lock-up-rgb-cropped.webp',
    link: 'https://www.unitedway.org',
  },
];


const getSponsorsByLevel = (level) => {
  return sponsors.filter((sponsor) => sponsor.level.toLowerCase() === level.toLowerCase());
};

function SponsorsDescription() {
  const diamondSponsors = getSponsorsByLevel('diamond');
  const platinumSponsors = getSponsorsByLevel('platinum');
  const goldSponsors = getSponsorsByLevel('gold');
  const silverSponsors = getSponsorsByLevel('silver');
  const bronzeSponsors = getSponsorsByLevel('bronze');
  const honorableMentionSponsors = getSponsorsByLevel('honorable mention')

  const cardWidth = '300px';

  return (
    <div className="sponsors-container">
      <div className="sponsors-header-container">
        <div className="sponsors-header-text">
          <h1>Sponsors</h1>
          <h2>ECG Robotics is inspiring tomorrow’s engineers, programmers, designers, and thinkers.</h2>
          <h3>But we can't do it without your help.</h3>
        </div>
      </div>
      <div className="sponsors-description-container">
        <p data-aos="fade-up">Thanks to our generous sponsors, our teams have inspired others while taking home state championship titles and earning places at the FIRST World Championships in Houston.
          <b> Your company’s donation helps fund materials, tools, workspaces, and competition expenses </b>
          that will provide students with hands-on experience building not just robots, but
          <b> real-world skills </b>
          that will stay with them into college and beyond.
        </p>
        <p data-aos="fade-up">Ready? Contact us at <a href="mailto: info@ecgrobotics.org" style={{ fontSize: "inherit" }}>info@ecgrobotics.org</a> and ask how you can help build tomorrow’s engineers, programmers, designers, and thinkers.</p>
        <img src={sponsorImage} alt="Image showing robot with sponsor logos on it" />
      </div>

      <div className="sponsorship-tiers">
        <h1 data-aos="fade-up">Our Sponsors</h1>
        <SponsorTierSection
          title="Diamond - $7500+ Annual Contribution"
          description="Description of Diamond level"
          sponsors={diamondSponsors}
          fallback="No diamond sponsors yet."
          width={cardWidth}
        />

        <SponsorTierSection
          title="Platinum - $5000-$7499 Annual Contribution"
          description="Description of Platinum level"
          sponsors={platinumSponsors}
          fallback="No platinum sponsors yet."
          width={cardWidth}
        />

        <SponsorTierSection
          title="Gold - $2500-$4999 Annual Contribution"
          description="Description of Gold level"
          sponsors={goldSponsors}
          fallback="No gold sponsors yet."
          width={cardWidth}
        />

        <SponsorTierSection
          title="Silver - $1000-$2499 Annual Contribution"
          description="Description of Silver level"
          sponsors={silverSponsors}
          fallback="No silver sponsors yet."
          width={cardWidth}
        />

        <SponsorTierSection
          title="Bronze - $500-$999 Annual Contribution"
          description="Description of Bronze level"
          sponsors={bronzeSponsors}
          fallback="No bronze sponsors yet."
          width={cardWidth}
        />

        <SponsorTierSection
          title="Honorable Mention - Below $500 Annual Contribution"
          description="Description of Honorable Mention level"
          sponsors={honorableMentionSponsors}
          fallback="No honorable mention sponsors yet."
          width={cardWidth}
        />

      </div>
    </div>
  )
}

export default SponsorsDescription
