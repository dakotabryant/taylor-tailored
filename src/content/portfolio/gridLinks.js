import Parks from '../../assets/portfolio/grid/homepageNPS-min.jpg';
import Lotion from '../../assets/portfolio/grid/homepageFloraFauna-min.jpg';
import Museum from '../../assets/portfolio/grid/homepageMuseumImage-min.jpg';
import Fitbit from '../../assets/portfolio/grid/homepageFitbit-min.jpg';
import RedLobster from '../../assets/portfolio/grid/homepageRedLobster-min.jpg';
import SimpleFit from '../../assets/portfolio/grid/homepageSimplefit-min.jpg';
import ParksImages from '../../content/portfolio/nationalParksPhotos';
import FloraImages from '../../content/portfolio/floraFaunaPhotos';
import FitBitImages from '../../content/portfolio/fitBitPhotos';
import MuseumImages from '../../content/portfolio/museumimages';
import RedLobsterImages from '../../content/portfolio/redLobsterImages';
import SimpleFitImages from '../../content/portfolio/simpleFitImage';

export default [
  {
    image: Parks,
    tags: ['UI/UX Design'],
    title: 'National Parks Service Website Concept',
    briefCopy: '',
    portfolioImages: [...ParksImages],
  },
  {
    image: SimpleFit,
    tags: ['UI/UX Design'],
    title: 'SimpleFit App',
    briefCopy: '',
    portfolioImages: [...SimpleFitImages],
  },
  {
    image: Fitbit,
    tags: ['UI/UX Design'],
    title: 'Fitbit Product Card Design',
    briefCopy:
      'In magna consequat laboris velit sunt labore adipisicing velit fugiat consectetur officia occaecat aliquip.Officia ut non fugiat velit qui. Esse aliqua aute duis ad. Et dolor laboris pariatur nulla enim eiusmod id laboris aute magna in mollit dolore.',
    portfolioImages: [...FitBitImages],
  },
  {
    image: Lotion,
    tags: ['Print & Branding'],
    title: 'Flora & Fauna',
    briefCopy:
      'A high-end, Greek, natural cosmetics company called ‘Flora & Fauna’ was in the process of rebranding their core range to appeal to a younger audience. They wanted the new packaging designs to feature modern illustrations to represent the raw, natural ingredients that they use within their product range. The client wanted to see an initial design which they would potentially roll out across a larger product range. They were looking for the designs to take inspiration from the Greek Islands. For these designs, I played off of the beautiful pink paper flowers, Bougainvillea, that are native to the Greek Islands. I kept a simple color scheme with illustrations representing the scents, tying it back to the natural ingredients used in the products.',
    portfolioImages: [...FloraImages],
  },
  {
    image: Museum,
    tags: ['UI/UX Design'],
    title: 'Natural History Museum',
    briefCopy:
      'In magna consequat laboris velit sunt labore adipisicing velit fugiat consectetur officia occaecat aliquip.Officia ut non fugiat velit qui. Esse aliqua aute duis ad. Et dolor laboris pariatur nulla enim eiusmod id laboris aute magna in mollit dolore.',
    portfolioImages: [...MuseumImages],
  },
  {
    image: RedLobster,
    tags: ['Print & Branding'],
    title: 'Red Lobster Logo Redesign',
    briefCopy:
      "Red Lobster is a restaurant passionate about making high-quality seafood available and affordable to everyone, including people who lived far from the coast. Since the 1960's they have been through a few generations of logos, with the latest one designed in 2009. Coming up on 9 years since their latest design, they needed another logo refresh that still was true to their name. After multiple iterations of lobsters and font faces, two opposite styles were chosen to present.",
    portfolioImages: [...RedLobsterImages],
  },
];
