import React, { Component } from 'react';
import Section from './Section';
import Container from './Container';
import Text from './Text';
import PortfolioGrid from './PortfolioGrid';
import Button from './Button';
import GridItems from '../content/portfolio/gridLinks';
import { selectPortfolio } from '../actions/actions-portfolio';
import { connect } from 'react-redux';

class Portfolio extends Component {
  _clickHandler = item => {
    this.props.dispatch(selectPortfolio(item));
  };

  render() {
    const filters = ['Web', 'Print', 'Branding', 'Photography'];
    const { currentPortfolio } = this.props;
    return (
      <Section className="portfolio">
        <Text tag="h2" className="uppercase">
          Portfolio
        </Text>
        <Container className="portfolio__grid">
          <PortfolioGrid
            portfolioItems={GridItems}
            onClick={this._clickHandler}
          />
        </Container>
      </Section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPortfolio: state.portfolio.currentPortfolio,
  };
};

export default connect(mapStateToProps)(Portfolio);
