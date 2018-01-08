import React from 'react';

const HeroContainer = props => {
	const { children, className } = props;
	return <div className={className}>{children}</div>;
};

export default HeroContainer;
