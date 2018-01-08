import React from 'react';

const Container = props => {
	const { children, className } = props;
	return <div className={className}>{children}</div>;
};

export default Container;
