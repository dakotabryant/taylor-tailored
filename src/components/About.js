import React from 'react';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import lookingUpPhoto from '../assets/about/Photo_Looking Up.png';

const About = () => {
  return (
    <Section className="about">
      <Container className="about__copy">
        <Text tag="h2" className="uppercase">
          About me
        </Text>
        <Text tag="p">
          Hi! I’m Taylor. Creator of pretty things, lover of puppies and color
          coordination. <br />
          <br /> My background ranges from web design to print design, project
          managment to account management, which gives me a unique skill set for
          any project I tackle. However, design has always been my true passion.
          I also have knowledge in HTML and CSS. Details and organization is my
          thing, so I try to make sure all of my work is thought out and done to
          the best of my ability. <br />
          <br /> Feel free to check out my work below. You can also download my
          resume to check out my previous work experience. <br />
          <br />Like what you see? <span className="bold">Let’s chat!</span>
        </Text>
        <ButtonGroup>
          <Button className="uppercase button-small">Download My Resume</Button>
          <Button className="uppercase button-small">Contact me</Button>
        </ButtonGroup>
      </Container>
      <img src={lookingUpPhoto} alt="" />
    </Section>
  );
};

export default About;
