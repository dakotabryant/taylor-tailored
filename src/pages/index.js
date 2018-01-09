import React from 'react';
import Hello from '../components/hello/index';
import About from '../components/about/index';
import IconBar from '../components/iconBar/index';
import icons from '../assets/iconBar';

const IndexPage = () => (
  <div>
    <Hello />
    <About />
    <IconBar icons={icons} />
  </div>
);

export default IndexPage;
