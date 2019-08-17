import React from 'react';

import './Components/style.scss';
import Button from 'react-bootstrap/Button';
import Frame from './Components/Frame';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Frame>
      <Navbar />
      <Button variant="primary">Test</Button>
      <Button variant="outline">Test</Button>
      <Footer />
    </Frame>
  );
};

export default App;
