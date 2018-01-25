import React from 'react';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import lookingUpPhoto from '../assets/about/Photo_Looking Up.png';
import Resume from '../assets/about/Resume_TaylorBryant.pdf';

const About = () => {
  return (
    <Section className="about">
      <Container className="about__copy">
        <Text tag="h2" className="uppercase">
          About me
        </Text>
        <Text tag="p">
          Hi! I’m Taylor. As a Graphic Designer turned UI/UX Designer, I love to
          bring ideas to life through stunning and easy-to-use interfaces.<br />
          <br /> With experience in every step of the design process, I pride
          myself on my ability to take a project from conception to completion.
          Each project I work on is a new opportunity to let my passion drive a
          truly unique and useful user experience. I love working on creative
          teams with product owners, developers and other designers. In
          addition to my UI/UX toolkit, I've picked up a little bit of HTML/CSS
          and advanced project management skills. Details and organization are
          my thing, so if you're looking for someone to crush your next project,
          I think I'd be a great addition to your team.
          <br />
          <br /> Feel free to check out my work below. You can also download my
          resume to check out my previous work experience. <br />
          <br />Like what you see? <span className="bold">Let’s chat!</span>
        </Text>
        <ButtonGroup>
          <a href={Resume} target="_blank">
            <Button className="uppercase button-small">
              Download My Resume
            </Button>
          </a>
          <a href="mailto:mrstaylorbryant@gmail.com?subject=You blew me away with your site!">
            <Button className="uppercase button-small">Contact me</Button>
          </a>
        </ButtonGroup>
      </Container>
      <img src={lookingUpPhoto} alt="" />
    </Section>
  );
};

export default About;
