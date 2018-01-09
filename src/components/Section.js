import React from 'react';

const Section = props => {
  const { children, className } = props;
  return <section className={className}>{children}</section>;
};

export default Section;
