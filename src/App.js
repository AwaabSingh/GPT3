import React from 'react';
import {
  Footer,
  Blog,
  Posibility,
  Features,
  WhatGPT3,
  Header,
} from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
