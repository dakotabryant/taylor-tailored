import React, { Component } from 'react';
import Text from './Text';
import Container from './Container';
import Button from './Button';
import { clearPortfolio } from '../actions/actions-portfolio';
import { connect } from 'react-redux';
import Link from 'gatsby-link';

class PortfolioItem extends Component {
  _handleClick = () => {
    this.props.dispatch(clearPortfolio());
  };
  render() {
    const {
      title,
      briefCopy,
      portfolioImages,
      tags,
    } = this.props.currentPortfolio;

    return (
      <div className="portfolio-item">
        <Link to="/">
          <Button onClick={this._handleClick}>Back to Home</Button>
        </Link>
        <Text tag="h2">{title}</Text>
        {tags &&
          tags.map((tag, index) => {
            return (
              <Text tag="h3" key={index}>
                {tag}
              </Text>
            );
          })}
        <Text tag="p" className="brief-copy">
          {briefCopy}
        </Text>
        <Container>
          {portfolioImages &&
            portfolioImages.map((image, index) => {
              return (
                <img
                  className="portfolio-item__images"
                  src={image}
                  alt=""
                  key={index}
                />
              );
            })}
        </Container>
      </div>
    );
  }
}

export default connect()(PortfolioItem);
