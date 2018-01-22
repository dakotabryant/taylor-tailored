import React from 'react';

const Section = props => {
  const { children, className, id } = props;
  return (
    <section className={`section ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
