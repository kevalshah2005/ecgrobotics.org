import React from 'react'
import './SponsorsDescription.css'
import sponsorImage from '../../../../assets/sponsorImage.webp'
import CardItem from '../../../card/CardItem'
import logo731 from '../../../../assets/logo731.webp'
import logo5795 from '../../../../assets/logo5795.webp'
import logo6183 from '../../../../assets/logo6183.webp'
import logo10195 from '../../../../assets/logo10195.webp'
import logo1533 from '../../../../assets/logo1533.webp'
import Gallery3D from '../../../gallery3d/Gallery3D'
import Sponsor from '../sponsorTiers/Sponsor'

const sponsors = [
  {
    name: 'Collins Aerospace',
    level: 'gold',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGOO3rPemY70w/company-logo_200_200/company-logo_200_200/0/1687169228107/collins_aerospace_logo?e=2147483647&v=beta&t=wL6zSWap3uy-9ZuEJFrZTWu0T9r6J0-gNR4_0T94S6c',
    description: 'Collins Aerospace is a leading global provider of aerospace and defense technologies. They offer a broad range of products and services, including avionics, interiors, systems engineering, and after-market support.',
    link: 'https://www.collinsaerospace.com',
  },
  {
    name: 'Qorvo',
    level: 'diamond',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUsjSagFYNGwkepPA-4UHeH5UVoheqg9T2g&s',
    description: 'Qorvo is a leading provider of innovative RF solutions, delivering performance and innovation to mobile, infrastructure, and automotive markets. Their products enable high-performance connectivity and help shape the future of wireless communications.',
    link: 'https://www.qorvo.com',
  },
  {
    name: 'United Way',
    level: 'honorable mention',
    logo: 'https://www.unitedway.org/assets/img/united-way-lock-up-rgb-cropped.webp',
    description: 'United Way is a global network of nonprofit organizations dedicated to improving the lives of individuals and families in communities worldwide. They focus on education, financial stability, and health.',
    link: 'https://www.unitedway.org',
  },
  {
    name: 'TE Connectivity',
    level: 'gold',
    logo: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-1/326727493_5627656727331786_7560671066058651734_n.png?_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=qSRUIYw4CloQ7kNvgFkD02Z&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AdrJVEp47JDhB8t6xvUr61R&oh=00_AYBeYy0aLphM0rQtJvrDv4QbN2i2s_ETt7K45wQw5BLEhw&oe=67117612',
    description: 'TE Connectivity is a global industrial technology leader creating a safer, sustainable, and more connected world. They offer a broad range of connectivity and sensing solutions for diverse industries, including transportation, communications, industrial, and medical.',
    link: 'https://www.te.com',
  },
  {
    name: 'Intuitive',
    level: 'gold',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQE2wfXIjiCzWA/company-logo_200_200/company-logo_200_200/0/1630649619968/intuitivesurgical_logo?e=1736985600&v=beta&t=zOMSNuS7nky-MN-FxubP7cMlbQizj-RMBPtRq7V5E6I',
    description: 'Intuitive Surgical is a global technology leader in minimally invasive care. They design, manufacture, and market the da Vinci Surgical System, a robotic platform used by surgeons to perform minimally invasive surgery.',
    link: 'https://www.intuitive.com',
  },
  {
    name: 'P&G Foundation',
    level: 'diamond',
    logo: 'https://images.ctfassets.net/oggad6svuzkv/7znyJc3Y7SecEoKSYKWoaQ/4a24e9015c360799cfb072adcd92cc5e/P_G_Logo_RGB.svg',
    description: 'The P&G Foundation is the philanthropic arm of Procter & Gamble, a global consumer goods company. It supports initiatives related to health, hygiene, education, and community development.',
    link: 'https://us.pg.com/',
  },
  {
    name: 'HondaJet',
    level: 'silver',
    logo: 'https://imgs.search.brave.com/QNQURnDkXdL2jL_rtb4nB8LeyM8yU4DTgaP_hzZWzp0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9k/L2Q0L0hvbmRhX2pl/dF9sb2dvLnN2Zw',
    description: 'HondaJet is a manufacturer of private jets. They offer the HondaJet HA-420, a single-engine jet known for its innovative design and advanced technology.',
    link: 'https://hondajet.com',
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
          <b><span style={{ color: "var(--accent-text-color)" }}> Your company’s donation helps fund materials, tools, workspaces, and competition expenses </span></b>
          that will provide students with hands-on experience building not just robots, but
          <b><span style={{ color: "var(--accent-text-color)" }}> real-world skills </span></b>
          that will stay with them into college and beyond.
        </p>
        <p>Ready? Contact us at <a href="mailto: info@ecgrobotics.org">info@ecgrobotics.org</a> and ask how you can help build tomorrow’s engineers, programmers, designers, and thinkers.</p>
        <img src={sponsorImage} alt="Image showing robot with sponsor logos on it" />
      </div>

      {/* <Gallery3D /> */}

      <div className="sponsorship-tiers">
        <h1>Sponsorship Tiers</h1>
        <h2>Diamond - $7500+ Annual Contribution</h2>
        {diamondSponsors.length > 0 ? (
          diamondSponsors.map((sponsor, index) => (
            <Sponsor
              index={index}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
              link={sponsor.link}
            />
          ))
        ) : (
          <p>No diamond sponsors yet.</p>
        )}

        <h2>Platinum - $5000-$7499 Annual Contribution</h2>
        {platinumSponsors.length > 0 ? (
          platinumSponsors.map((sponsor, index) => (
            <Sponsor
              index={index}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
              link={sponsor.link}
            />
          ))
        ) : (
          <p>No platinum sponsors yet.</p>
        )}

        <h2>Gold - $2500-$4999 Annual Contribution</h2>
        {goldSponsors.length > 0 ? (
          goldSponsors.map((sponsor, index) => (
            <Sponsor
              index={index}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
              link={sponsor.link}
            />
          ))
        ) : (
          <p>No gold sponsors yet.</p>
        )}

        <h2>Silver - $1000-$2499 Annual Contribution</h2>
        {silverSponsors.length > 0 ? (
          silverSponsors.map((sponsor, index) => (
            <Sponsor
              index={index}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
              link={sponsor.link}
            />
          ))
        ) : (
          <p>No silver sponsors yet.</p>
        )}

        <h2>Bronze - $500-$999 Annual Contribution</h2>
        {bronzeSponsors.length > 0 ? (
          bronzeSponsors.map((sponsor, index) => (
            <Sponsor
              index={index}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
              link={sponsor.link}
            />
          ))
        ) : (
          <p>No bronze sponsors yet.</p>
        )}

        <h2>Honorable Mention - Below $499 Annual Contribution</h2>
        {honorableMentionSponsors.length > 0 ? (
          honorableMentionSponsors.map((sponsor, index) => (
            <Sponsor
              index={index}
              name={sponsor.name}
              logo={sponsor.logo}
              description={sponsor.description}
              link={sponsor.link}
            />
          ))
        ) : (
          <p>No honorable mention sponsors yet.</p>
        )}
      </div>
    </div>
  )
}

export default SponsorsDescription
