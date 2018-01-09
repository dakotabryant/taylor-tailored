import React from 'react';

const Icon = props => {
  const { src, className, onClick } = props;
  return (
    <div className="icon-container" onClick={onClick}>
      <img src={src} className={className} />
    </div>
  );
};

export default Icon;
