import React from 'react';
import Container from './Container';
import Text from './Text';
import Link from 'gatsby-link';
import { Fade } from 'react-reveal';

const PortfolioGrid = ({ className, currentTab, portfolioItems, onClick }) => {
	return (
		<div className="inner-grid">
			{portfolioItems &&
				portfolioItems.map(item => {
					return (
						<Fade left>
							<Link to="/portfolio/" key={item.title}>
								<Container className="grid-item">
									<img src={item.image} alt={item.title} />
									<div
										className="hover-container"
										onClick={() => onClick(item)}
									>
										<Text tag="h3">{item.title}</Text>
										<div>{item.tags.map(tag => <p key={tag}>{tag}</p>)}</div>
									</div>
								</Container>
							</Link>
						</Fade>
					);
				})}
		</div>
	);
};

export default PortfolioGrid;
