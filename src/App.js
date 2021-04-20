import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import TravellersTrollies from './Components/TravellersTrollies';

function App() {

  return ( 
    <Router>
      <GlobalStyle />
      <TravellersTrollies />
    </Router>
  );
};

export default App;
