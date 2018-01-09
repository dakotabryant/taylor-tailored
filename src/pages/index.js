import React from 'react';
import Hello from '../components/hello';
import About from '../components/about';
import IconBar from '../components/iconBar';
import icons from '../assets/iconBar';

const IndexPage = () => (
  <div>
    <Hello />
    <About />
    <IconBar icons={icons} />
  </div>
);

export default IndexPage;
