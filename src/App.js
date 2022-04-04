import React from 'react';
import { Navbar } from './components';
import { About, Header, Testimonial, Footer, Work, Skills } from './container';

import './App.scss';
function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
