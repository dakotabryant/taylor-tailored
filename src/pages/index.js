import React from 'react';
import Hello from '../components/Hello';
import About from '../components/About';
import IconBar from '../components/IconBar';
import icons from '../assets/iconBar';

const IndexPage = () => (
  <div>
    <Hello />
    <About />
    <IconBar icons={icons} />
  </div>
);

export default IndexPage;
