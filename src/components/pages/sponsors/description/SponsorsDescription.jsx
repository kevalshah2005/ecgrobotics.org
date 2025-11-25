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
import QorvoLogo from '/assets/SponsorLogos/QorvoLogo.webp'
import IntuitiveLogo from '/assets/SponsorLogos/IntuitiveLogo.webp'
import TSFoundationLogo from '/assets/SponsorLogos/TSFoundationLogo.webp'
import AnalogDevicesLogo from '/assets/SponsorLogos/AnalogDevicesLogo.jpg';
import CotalityLogo from '/assets/SponsorLogos/Cotality.png';
import GDTLogo from '/assets/SponsorLogos/GDTLogo.png';
const sponsors = [
  {
    name: 'Qorvo',
    level: 'silver',
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
    logo: TSFoundationLogo,
    link: 'https://www.tsfoundation.com',
  },
  {
    name: 'HondaJet',
    level: 'strange',
    logo: HondaJetLogo,
    link: 'https://www.hondajet.com',
  },
  
  {
    name: 'Analog Devices',
    level: 'gold',
    logo: AnalogDevicesLogo,
    link: 'https://www.analog.com',
  },
  
  {
    name: 'Intuitive',
    level: 'silver',
    logo: IntuitiveLogo,
    link: 'https://www.intuitive-foundation.org/',
  },
  {
    name: 'Cotality',
    level: 'silver',
    logo: CotalityLogo,
    link: 'https://www.cotality.com/',
  },
  {
    name: 'GDT',
    level: 'bronze',
    logo: GDTLogo,
    link: 'https://www.GDT.com',
  },
  {
    name: 'United Way',
    level: 'bronze',
    logo: UnitedWayLogo,
    link: 'https://www.unitedwaygso.org/',
  },
  {
    name: 'Publix',
    level: 'bronze',
    logo: PublixLogo,
    link: 'https://www.publix.com/',
  },
  {
    name: 'Harris Teeter',
    level: 'bronze',
    logo: HarrisTeeterLogo,
    link: 'https://www.harristeeter.com/',
  },
  // Example Strange sponsor
  // {
  //   name: 'Example Strange Sponsor',
  //   level: 'strange',
  //   logo: ExampleLogo,
  //   link: 'https://example.com',
];

const imageWidth = '80%';

const getSponsorsByLevel = (level) => {
  return sponsors.filter((sponsor) => sponsor.level.toLowerCase() === level.toLowerCase());
};

function SponsorsDescription() {
  const strangeSponsors = getSponsorsByLevel('strange');
  const diamondSponsors = getSponsorsByLevel('diamond');
  const platinumSponsors = getSponsorsByLevel('platinum');
  const goldSponsors = getSponsorsByLevel('gold');
  const silverSponsors = getSponsorsByLevel('silver');
  const bronzeSponsors = getSponsorsByLevel('bronze');
  const honorableMentionSponsors = getSponsorsByLevel('honorable mention');

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
        <p>
          Thanks to our generous sponsors, our teams have inspired others while taking home state championship titles and earning places at the FIRST World Championships in Houston.
          <b> Your company’s donation helps fund materials, tools, workspaces, and competition expenses </b>
          that will provide students with hands-on experience building not just robots, but
          <b> real-world skills </b>
          that will stay with them into college and beyond.
        </p>
        <p>
          Ready? Contact us at <a href="mailto: info@ecgrobotics.org" style={{ fontSize: "inherit" }}>info@ecgrobotics.org</a> and ask how you can help build tomorrow’s engineers, programmers, designers, and thinkers.
        </p>
        <img src={sponsorImage} alt="Image showing robot with sponsor logos on it" />

        <div className="sponsorship-tiers">
          <h1 data-aos="fade-up">Our Sponsors</h1>

          <div data-aos="fade-up" className="strange-tier">
            <div className="strange-tier-inner">
              <SponsorTierSection
                title="Strange - $10,000+ Annual Contribution"
                description="Company name listed as Title Sponsor of ECG Robotics. Receive 10 additional organization shirts. Prominent logo placement across all robots, shirts, banners, and digital materials. All Diamond level benefits."
                sponsors={strangeSponsors}
                fallback="No Strange level sponsors yet."
                width={cardWidth}
                imageWidth={imageWidth}
              />
            </div>
          </div>

          <SponsorTierSection
            title="Diamond - $7,500-$9,999 Annual Contribution"
            description="FTC and FRC demonstration at your workplace (within reasonable travel distance, upon request). Company name and logo listed on all social media profiles and outreach materials. Receive 5 additional organization shirts. Large logo on FTC & FRC robots, t-shirts, trifolds, and banners. All Platinum level benefits."
            sponsors={diamondSponsors}
            fallback="No diamond sponsors yet."
            width={cardWidth}
            imageWidth={imageWidth}
          />

          <SponsorTierSection
            title="Platinum - $5,000-$7,499 Annual Contribution"
            description="Company promotion opportunity at full-team FRC meeting and full-teams FTC meeting upon request. Receive 2 organization shirts. Tour of our workspace for your employees or guests (upon request). All Gold level benefits."
            sponsors={platinumSponsors}
            fallback="No platinum sponsors yet."
            width={cardWidth}
            imageWidth={imageWidth}
          />

          <SponsorTierSection
            title="Gold - $2,500-$4,999 Annual Contribution"
            description="Small logo on FTC and FRC robots. Small logo on pamphlets, trifolds, banners and t-shirts. Invite to annual end-of-season banquet. All Silver level benefits."
            sponsors={goldSponsors}
            fallback="No gold sponsors yet."
            width={cardWidth}
            imageWidth={imageWidth}
          />

          <SponsorTierSection
            title="Silver - $1,000-$2,499 Annual Contribution"
            description="Invitation to FTC and FRC outreach events. Custom sponsor social media post. Name/logo included in newsletter. All Bronze level benefits."
            sponsors={silverSponsors}
            fallback="No silver sponsors yet."
            width={cardWidth}
            imageWidth={imageWidth}
          />

          <SponsorTierSection
            title="Bronze - $100-$999 Annual Contribution"
            description="Company logo and link on sponsors page of website. Subscription to ECG Robotics’ newsletter, featuring seasonal updates and highlights. Personalized thank you letter. Invitation to attend local FTC and FRC competitions."
            sponsors={bronzeSponsors}
            fallback="No bronze sponsors yet."
            width={cardWidth}
            imageWidth={imageWidth}
          />
        </div>
      </div>
    </div>
  )
}

export default SponsorsDescription;
