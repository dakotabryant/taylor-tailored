import React from 'react';
import Link from 'gatsby-link';

const Sidebar = props => {
  const { className, links } = props;
  return (
      <ul className="nav">
        {links &&
          links.map(link => {
            return (
              <Link key={link.text} to={link.pagePath}>
                <li className="nav__links uppercase">{link.text}</li>
              </Link>
            );
          })}
      </ul>
  );
};

export default Sidebar;
