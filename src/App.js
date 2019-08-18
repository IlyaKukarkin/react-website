import React from 'react';

import 'Components/style.scss';
import Frame from 'Components/Frame';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Home from 'Pages/Home';

const App = () => {
  return (
    <Frame>
      <Navbar />
        <Home />      
      <Footer />
    </Frame>
  );
};

export default App;
