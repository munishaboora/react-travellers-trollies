import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { useState } from 'react'
// import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';

import ContentContainer from './Components/General/ContentContainer/ContentContainerMain'

function App() {

  // STATES TO MANAGE THE SCREEN DISPLAYS

  //for the user
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  // if the user is a setter or a completer
  const [isSetter, setSetter] = useState(false);


  /* if (isSetter == false) {
 
  }
  */
  const changeScreenFromLogInToSetterMainPage = () => {
    setSetter(!isSetter)
  }
  // function to check input

  // states for content container set here

  return ( 
    <Router>
      <GlobalStyle />
      <button onClick={changeScreenFromLogInToSetterMainPage}>CLICK ME :)</button>
      {/* <TravellersTrollies /> */}
      {/* the state is passed through to the container as a prop */}
      <ContentContainer stateOfContainer={isSetter}/>
    </Router>
  );
};

export default App;
