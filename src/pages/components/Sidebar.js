import React from 'react';
import Link from 'gatsby-link';

const Sidebar = props => {
  const { className, links } = props;
  return (
    <div className={className}>
      <ul>
        {links &&
          links.map(link => {
            return (
              <Link to={link.pagePath}>
                <li>{link.text}</li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
