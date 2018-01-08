import React from 'react';

const Section = props => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

export default Section;
