import React from 'react';

const Button = props => {
	const { children, className } = props;
	return <div className={`${className} button`}>{children}</div>;
};

export default Button;
