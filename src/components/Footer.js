import React from 'react';
import Text from './Text';
import Container from './Container';
import Icon from './Icon';
import socialIcons from '../content/socialIcons.js';

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <Text className="uppercase light" tag="h2">
        I am currently
        <span className="bold">
          <a href="mailto:mrstaylorbryant@gmail.com?subject=You blew me away with your site!">
            Available
          </a>
        </span>
        to join your team
      </Text>
      <Text tag="h3" className="uppercase light">
        Give me a shout
      </Text>
      <Container className="footer__contact-info">
        <a href="mailto:mrstaylorbryant@gmail.com?subject=You blew me away with your site!">
          mrstaylorbryant@gmail.com
        </a>
        <a href="tel:6037249922">603.724.9922</a>
        <p>Charlotte, NC</p>
      </Container>
      <Container className="footer__social-icons">
        {socialIcons.map((icon, index) => {
          return (
            <a
              href={icon.path}
              className="footer__social-icons--icon"
              target="_blank"
              key={index}
            >
              <img src={icon.src} />
            </a>
          );
        })}
      </Container>
    </div>
  );
};

export default Footer;
