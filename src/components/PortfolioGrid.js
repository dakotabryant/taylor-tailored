import React from 'react';
import Container from './Container';
import Text from './Text';

const PortfolioGrid = ({ className, currentTab, portfolioItems, onClick }) => {
  return (
    <div className="inner-grid">
      {portfolioItems &&
        portfolioItems.map(item => {
          return (
            <Container className="grid-item" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="hover-container" onClick={() => onClick(item)}>
                <Text tag="h3">{item.title}</Text>
                <div>{item.tags.map(tag => <p key={tag}>{tag}</p>)}</div>
              </div>
            </Container>
          );
        })}
    </div>
  );
};

export default PortfolioGrid;
