import React from 'react';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavigationBar />
    </Router>
  );
};

export default App;
