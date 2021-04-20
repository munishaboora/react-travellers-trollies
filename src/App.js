import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
// import TravellersTrollies from './Components/TravellersTrollies/TravellersTrolliesMain';
import NavigationBar from './Components/NavigationBar/NavBarMain';
// // import Footer from './Components/Footer/Footer'
import ContentContainer from './Components/ContentContainer/ContentContainerMain'

function App() {

  // states for content container set here
  


  return ( 
    <Router>
      <GlobalStyle />
      <NavigationBar />
      {/* <TravellersTrollies /> */}
      <ContentContainer />
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
