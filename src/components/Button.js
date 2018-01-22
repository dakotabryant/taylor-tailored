import React from 'react';

const Button = props => {
  const { children, className, onClick } = props;
  return (
    <div className={`${className} button`} onClick={() => onClick()}>
      {children}
    </div>
  );
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
