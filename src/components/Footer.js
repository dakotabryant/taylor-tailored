import React from 'react';
import Text from './Text';
import Container from './Container';

const Footer = () => {
  return (
    <div className="footer">
      <Text className="uppercase light" tag="h2">
        I am currently <span className="bold">Available</span> to join your team
      </Text>
      <Text tag="h3" className="uppercase light">
        Give me a shout
      </Text>
      <Container className="footer__contact-info">
        <a href="mailto:mrstaylorbryant@gmail.com">mrstaylorbryant@gmail.com</a>
        <a href="tel:6037249922">603.724.9922</a>
        <p>Charlotte, NC</p>
      </Container>
    </div>
  );
};

export default Footer;
