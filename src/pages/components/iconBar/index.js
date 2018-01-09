import React from 'react';
import Section from '../Section';
import Icon from '../Icon';

const IconBar = props => {
  const { icons } = props;
  return (
    <Section className="icon-bar">
      <div className="icon-bar__inner-container">
        {icons.map(icon => {
          console.log(icon.path);
          return (
            <div key={icon.name} className="icon-bar__text-containers">
              <img src={icon.path} className="icon-bar__icons" />
              <p>{icon.name}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default IconBar;
