import React from 'react';
import Link from 'gatsby-link';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Icon from './Icon';
import MobileScroll from '../assets/scrollMobile.svg';
import DesktopScroll from '../assets/scrollDesktop.svg';

const Hello = () => {
  let mobileWidth;
  if (typeof window !== 'undefined') {
    mobileWidth = window.innerWidth <= 990;
  }
  const currentIcon = mobileWidth ? MobileScroll : DesktopScroll;
  return (
    <Section className="hello">
      <Container className="hello__container">
        <Text tag="h1" className="uppercase bold hello__text">
          Hello <span className="lowercase light">i'm taylor</span>
        </Text>
        <ButtonGroup>
          <Link to="#portfolio">
            <Button className="button uppercase">View My Work</Button>
          </Link>
          <Button className="button uppercase">Contact Me</Button>
        </ButtonGroup>
      </Container>
      <img src={currentIcon} className="scroll-icon" />
    </Section>
  );
};

export default Hello;
