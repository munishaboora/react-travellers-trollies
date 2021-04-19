import React from 'react';
import NavigationBar from './Components/NavigationBar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavigationBar />
    </Router>
  );
}

export default App;
