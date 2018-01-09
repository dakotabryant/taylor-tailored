import React from 'react';

const Text = props => {
	const { tag, content, children, className } = props;
	const NodeElement = tag || 'span';
	return <NodeElement className={className}>{content || children}</NodeElement>;
};

export default Text;
