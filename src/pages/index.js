import React, { Component } from 'react';
import Hello from '../components/Hello';
import About from '../components/About';
import IconBar from '../components/IconBar';
import icons from '../assets/iconBar';
import Portfolio from '../components/Portfolio';
import { connect } from 'react-redux';
import PortfolioItem from '../components/PortfolioItem';

class IndexPage extends Component {
  render() {
    const { currentPortfolio } = this.props;
    return (
      <div>
        {!currentPortfolio && (
          <div>
            <Hello />
            <About />
            <IconBar icons={icons} />
            <Portfolio />
          </div>
        )}

        {currentPortfolio && (
          <PortfolioItem currentPortfolio={currentPortfolio} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPortfolio: state.portfolio.currentPortfolio,
  };
};

export default connect(mapStateToProps)(IndexPage);
