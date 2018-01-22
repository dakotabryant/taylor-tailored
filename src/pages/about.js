import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderAlt from '../components/HeaderAlt';
import Link from 'gatsby-link';
import Button from '../components/Button';
import Text from '../components/Text';
import Container from '../components/Container';
import Skills from '../assets/about/Skillset.png';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <HeaderAlt />
        <Link to="/">
          <Button className="absolute">Back to Home</Button>
        </Link>
        <Text tag="h2" className="heading">
          About Me
        </Text>
        <hr />
        <Container className="about-page__content-container">
          <Container className="about-page__content-container--column">
            <Text tag="h3" className="uppercase">
              Skills & Abilities
            </Text>
            <img src={Skills} alt="" />
          </Container>
          <Container className="about-page__content-container--column">
            <Text tag="p">
              Hi! I’m Taylor. Creator of pretty things, lover of puppies and
              color coordination. <br />
              <br /> My background ranges from web design to print design,
              project managment to account management, which gives me a unique
              skill set for any project I tackle. However, design has always
              been my true passion. I am well-versed in Adobe Creative Suite,
              and also have knowledge in HTML and CSS. Details and organization
              is my thing, so I try to make sure all of my work is thought out
              and done to the best of my ability. <br /> <br /> Feel free to
              check out my work and previous experience. <br />
              <br />Like what you see?
              <span className="bold">Let’s chat!</span>
            </Text>
          </Container>
          <Container className="about-page__content-container--column">
            <Text tag="h3" className="uppercase">
              Experience
            </Text>
            <Container className="experience">
              
            </Container>
            <Text tag="p">
              WEB DESIGNER / CONTENT MANAGER Collipsis Web Solutions | Aug.
              2014- present CREATIVE SERVICES MANAGER Littlefield Agency | March
              2017 - Nov. 2017 ASSOCIATE ACCOUNT MANAGER Littlefield Agency |
              Jan. 2016 - March 2016 MARKETING ASSISTANT Mabee Center | Aug.
              2015- Dec. 2015 COMMUNICATIONS INTERN New Hampshire Automobile
              Dealers Association May-August 2013 & 2014 CREATIVE INTERN
              BlueSpeed AV | Jan. 2014 - May 2014 GRAPHIC DESIGN COORDINATOR
              Academic Peer Advisor Program Oral Roberts University | Sept. 2013
              - May 2014
            </Text>
          </Container>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPortfolio: state.portfolio.currentPortfolio,
  };
};

export default connect(mapStateToProps)(AboutPage);
