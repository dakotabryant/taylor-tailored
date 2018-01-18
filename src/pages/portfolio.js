import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioItem from '../components/PortfolioItem';
import HeaderAlt from '../components/HeaderAlt';

class PortfolioPage extends Component {
  render() {
    return (
      <div className="portfolio-page">
        <HeaderAlt />
        <PortfolioItem currentPortfolio={this.props.currentPortfolio} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPortfolio: state.portfolio.currentPortfolio,
  };
};

export default connect(mapStateToProps)(PortfolioPage);
