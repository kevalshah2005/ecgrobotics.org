import React from 'react'
import './SponsorsDescription.css'
import sponsorImage from '/assets/sponsorImage.webp'
import SponsorTierSection from './SponsorTierSection'

// Sponsor logos
import GeneHaasLogo from '/assets/SponsorLogos/GeneHaasLogo.webp'
import TEConnectivityLogo from '/assets/SponsorLogos/TEConnectivityLogo.svg'
import PGFoundationLogo from '/assets/SponsorLogos/PGFoundationLogo.svg'
import HondaJetLogo from '/assets/SponsorLogos/HondaJetLogo.svg'
import PublixLogo from '/assets/SponsorLogos/PublixLogo.svg'
import HarrisTeeterLogo from '/assets/SponsorLogos/HarrisTeeterLogo.svg'
import UnitedWayLogo from '/assets/SponsorLogos/UnitedWayLogo.svg'
import CollinsAerospaceLogo from '/assets/SponsorLogos/CollinsAerospaceLogo.svg'
import QorvoLogo from '/assets/SponsorLogos/QorvoLogo.webp';

const sponsors = [
  {
    name: 'Qorvo',
    level: 'diamond',
    logo: QorvoLogo,
    link: 'https://www.qorvo.com',
  },
  {
    name: 'P&G Foundation',
    level: 'diamond',
    logo: PGFoundationLogo,
    link: 'https://us.pg.com/',
  },
  {
    name: 'GENE HAAS Corp',
    level: 'platinum',
    logo: GeneHaasLogo,
    link: 'https://www.ghaasfoundation.org/',
  },
  {
    name: 'TE Connectivity',
    level: 'platinum',
    logo: TEConnectivityLogo,
    link: 'https://www.te.com',
  },
  {
    name: 'Tannenbaum-Sternberger Foundation',
    level: 'platinum',
    // logo: insert Tannenbaum-Sternberger logo here,
    link: 'https://www.tsfoundation.com',
  },
  {
    name: 'HondaJet',
    level: 'gold',
    logo: HondaJetLogo,
    link: 'https://www.hondajet.com',
  },
  {
    name: 'Collins Aerospace',
    level: 'gold',
    logo: CollinsAerospaceLogo,
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
    logo: PublixLogo,
    link: 'https://www.publix.com',
  },
  {
    name: 'Harris Teeter',
    level: 'bronze',
    logo: HarrisTeeterLogo,
    link: 'https://www.harristeeter.com',
  },
  {
    name: 'United Way',
    level: 'bronze',
    logo: UnitedWayLogo,
    link: 'https://www.unitedway.org',
  },
];

const imageWidth = '80%';

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
        <p>Thanks to our generous sponsors, our teams have inspired others while taking home state championship titles and earning places at the FIRST World Championships in Houston.
          <b> Your company’s donation helps fund materials, tools, workspaces, and competition expenses </b>
          that will provide students with hands-on experience building not just robots, but
          <b> real-world skills </b>
          that will stay with them into college and beyond.
        </p>
        <p>Ready? Contact us at <a href="mailto: info@ecgrobotics.org" style={{ fontSize: "inherit" }}>info@ecgrobotics.org</a> and ask how you can help build tomorrow’s engineers, programmers, designers, and thinkers.</p>
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
          imageWidth={imageWidth}
        />

        <SponsorTierSection
          title="Platinum - $5000-$7499 Annual Contribution"
          description="Description of Platinum level"
          sponsors={platinumSponsors}
          fallback="No platinum sponsors yet."
          width={cardWidth}
          imageWidth={imageWidth}
        />

        <SponsorTierSection
          title="Gold - $2500-$4999 Annual Contribution"
          description="Description of Gold level"
          sponsors={goldSponsors}
          fallback="No gold sponsors yet."
          width={cardWidth}
          imageWidth={imageWidth}
        />

        <SponsorTierSection
          title="Silver - $1000-$2499 Annual Contribution"
          description="Description of Silver level"
          sponsors={silverSponsors}
          fallback="No silver sponsors yet."
          width={cardWidth}
          imageWidth={imageWidth}
        />

        <SponsorTierSection
          title="Bronze - $500-$999 Annual Contribution"
          description="Description of Bronze level"
          sponsors={bronzeSponsors}
          fallback="No bronze sponsors yet."
          width={cardWidth}
          imageWidth={imageWidth}
        />

        <SponsorTierSection
          title="Honorable Mention - $100-$499 Annual Contribution"
          description="Description of Honorable Mention level"
          sponsors={honorableMentionSponsors}
          fallback="No honorable mention sponsors yet."
          width={cardWidth}
          imageWidth={imageWidth}
        />

      </div>
    </div>
  )
}

export default SponsorsDescription
