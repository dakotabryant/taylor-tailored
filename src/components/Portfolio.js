import React, { Component } from 'react';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import PortfolioGrid from './PortfolioGrid';
import Button from './Button';

class Portfolio extends Component {
  render() {
    return (
      <Section className="portfolio">
        <Text tag="h2" className="uppercase">
          Portfolio
        </Text>
        <Container className="portfolio__tabs" />
        <Container className="portfolio__grid">
          <PortfolioGrid />
        </Container>
        <Button>See More ></Button>
      </Section>
    );
  }
}

export default Portfolio;
