import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderAlt from '../components/HeaderAlt';
import Link from 'gatsby-link';
import Button from '../components/Button';
import Text from '../components/Text';
import Container from '../components/Container';
import Skills from '../assets/about/Skillset.png';
import ExperienceLineItems from '../content/about/experienceText';

class AboutPage extends Component {
  render() {
    return <div className="about-page">
        <HeaderAlt />
        <Link to="/">
          <Button className="absolute">Back to Home</Button>
        </Link>
        <Text tag="h2" className="heading">
          About Me
        </Text>
        <hr />
        <Container className="about-page__content-container skills-container">
          <Container className="about-page__content-container--column skills">
            <Text tag="h3" className="uppercase">
              Skills & Abilities
            </Text>
            <img src={Skills} alt="" />
            <Container className="education">
              <Text tag="h3">Education</Text>
              <Text tag="p">
                <span className="university">ORAL ROBERTS UNIVERSITY</span> <br />
                <br /> TULSA, OKLAHOMA <br />
                <br />
              </Text>
              <Text tag="p" className="degree">
                <em>Bachelor of Science</em>
                <br />
                <br />Major in Media, Empahsis in Advertising <br />
                <br />Minor in Graphic Design <br />
                <br />
                <br />
                <span className="bold">GPA: 3.86</span>
              </Text>
            </Container>
          </Container>
          <Container className="about-page__content-container--column about-text">
            <Text tag="p">
              Hi! I’m Taylor. Creator of pretty things, lover of puppies and color coordination. <br />
              <br /> My background ranges from web design to print design, project managment to account management, which gives me a unique skill set for any project I tackle. However, design has always been my true passion. I am well-versed in Adobe Creative Suite, and also have knowledge in HTML and CSS. Details and organization is my thing, so I try to make sure all of my work is thought out and done to the best of my ability. <br /> <br /> Feel free to check out my work and previous experience. <br />
              <br />Like what you see?
              <span className="bold">Let’s chat!</span>
            </Text>

            <Container className="experience">
              <Text tag="h3" className="uppercase">
                Experience
              </Text>
              {ExperienceLineItems.map(item => {
                return <Container className="experience__item">
                    <Text className="job-title" tag="p">
                      {item.jobTitle}
                    </Text>
                    <Text tag="p" className="company-title">
                      {item.company}
                    </Text>
                  </Container>;
              })}
            </Container>
          </Container>
        </Container>
      </div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPortfolio: state.portfolio.currentPortfolio,
  };
};

export default connect(mapStateToProps)(AboutPage);
