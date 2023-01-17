import React from 'react';
import About from '../components/About/About';
import Heading from '../components/Heading/Heading';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Heading />
      <About />
    </>
  );
};

export default Home;
