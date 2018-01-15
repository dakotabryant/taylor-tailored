import React, { Component } from 'react';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import PortfolioGrid from './PortfolioGrid';
import Button from './Button';
import GridItems from '../content/portfolio/gridLinks';
import { testStore } from '../actions/actions-portfolio';
import { connect } from 'react-redux';

class Portfolio extends Component {
  componentDidMount() {
    this.props.dispatch(testStore());
  }

  render() {
    const filters = ['Web', 'Print', 'Branding', 'Photography'];
    return (
      <Section className="portfolio">
        <Text tag="h2" className="uppercase">
          Portfolio
        </Text>
        {/*  <Container className="portfolio__tabs">
          <ul>
            {filters.map(item => {
              return (
                <li
                  className={`${
                    this.state.currentFilter === item ? 'is-current' : ''
                  }`}
                  key={item}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </Container>*/}
        <Container className="portfolio__grid">
          <PortfolioGrid portfolioItems={GridItems} />
        </Container>
      </Section>
    );
  }
}

export default connect()(Portfolio);
