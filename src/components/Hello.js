import React from 'react';
import Link from 'gatsby-link';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import Button from './Button';
import ButtonGroup from './ButtonGroup';

const Hello = () => {
  return (
    <Section className="hello">
      <Container className="hello__container">
        <Text tag="h1" className="uppercase bold hello__text">
          Hello <span className="lowercase light">i'm taylor</span>
        </Text>
        <ButtonGroup>
          <Button className="button uppercase">View My Work</Button>
          <Button className="button uppercase">Contact Me</Button>
        </ButtonGroup>
      </Container>
    </Section>
  );
};

export default Hello;
