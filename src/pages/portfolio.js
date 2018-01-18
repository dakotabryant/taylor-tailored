import React, { Component } from 'react';
import { connect } from 'react-redux';
import PortfolioItem from '../components/PortfolioItem';

class PortfolioPage extends Component {
  render() {
    return <PortfolioItem currentPortfolio={this.props.currentPortfolio} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPortfolio: state.portfolio.currentPortfolio,
  };
};

export default connect(mapStateToProps)(PortfolioPage);
