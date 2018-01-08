import React from 'react';

const Icon = props => {
  const { src, className, onClick } = props;
  return <img src={src} className={className} onClick={onClick} />;
};

export default Icon;
