import React, { Component } from 'react';
import Hello from '../components/Hello';
import About from '../components/About';
import IconBar from '../components/IconBar';
import icons from '../assets/iconBar';
import Portfolio from '../components/Portfolio';
import { connect } from 'react-redux';
import PortfolioItem from '../components/PortfolioItem';
import Header from '../components/Header';
import { clearPage } from '../actions/actions-portfolio';

class IndexPage extends Component {
  // this.props.dispatch(clearPortfolio());

  componentDidMount() {
    this.props.dispatch(clearPage());
  }

  render() {
    const { currentPortfolio } = this.props;
    return (
      <div>
        <Header />
        <Hello />
        <About />
        <IconBar icons={icons} />
        <Portfolio />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPortfolio: state.portfolio.currentPortfolio,
    currentPage: state.portfolio.currentPage,
  };
};

export default connect(mapStateToProps)(IndexPage);
