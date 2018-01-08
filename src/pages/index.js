import React from 'react';
import Link from 'gatsby-link';
import Section from './components/hello/Section';
import Container from './components/hello/Container';
import Text from './components/Text';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';

const IndexPage = () => (
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

export default IndexPage;
