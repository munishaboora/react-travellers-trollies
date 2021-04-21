import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { useState, useEffect } from 'react'
import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';

import ContentContainer from './Components/General/ContentContainer/ContentContainerMain'

function App() {


  // STATES TO MANAGE THE SCREEN DISPLAYS

  //for the user
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  // if the user is a setter or a completer
  const [isSetter, setSetter] = useState(false)



  // will need to create a function that responds to the user's input
  // how to do that...?

  /* if (isSetter == false) {
    change the state of the modules below
    will 
  }

  */

  // const getPost = async () => {
    
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  //   const data = await res.json()
  //       // .then((res) => res.json())
  //       // .then(
  //       //   (data) => {
  //       //     return(data);
  //       //   }
  //       //   );
 
  // }

  const changeState = async () => {

  }

  // states for content container set here



  return ( 
    <Router>
      <GlobalStyle />
      <form method="GET" onSubmit={changeState}>
        <input type="text" placeholder="enter 1 or 2">

        </input>
        <button>Submit</button>
      </form>

      {/* <TravellersTrollies /> */}
      <ContentContainer {/* will take in a prop that will be a boolean for whether it's a setter or a completer*/}/>
    </Router>
  );
};

export default App;
