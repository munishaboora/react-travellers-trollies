import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { useState, useEffect } from 'react'
import AppStyles from './AppStyles.js';

// import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';

import ContentContainer from './Components/General/ContentContainer/ContentContainerMain'

function App() {

  // STATES TO MANAGE THE SCREEN DISPLAYS

  //for the user
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  // if the user is a setter or a completer
  const [isSetter, setSetter] = useState(false);

  // can cycle through options to display something
  // const hasUserLoggedIn = () => {
  // if a get requested has been completed and status 200 && if returned data is true
  // setUserLoggedIn(true)
  // checkTheUser()
  // }

  const checkTheUser = () => {
    setSetter(!isSetter)
  }
  // function to check input

  // states for content container set here

  return ( 
    <Router>
      {/* <GlobalStyle /> */}
      <AppStyles>
        <button onClick={checkTheUser}>CLICK ME :)</button>
        {/* <TravellersTrollies /> */}
        {/* the state is passed through to the container as a prop */}
        <ContentContainer setterPassedThrough={isSetter}/>
      </AppStyles>
    </Router>
  );
};

export default App;
