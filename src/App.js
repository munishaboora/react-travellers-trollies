import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { useState, useEffect } from 'react'
import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';

import ContentContainer from './Components/General/ContentContainer/ContentContainerMain'

function App() {

  // const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [isSetter, setSetter] = useState(false)

  //depending on fetch response.data, useState will change

  const getPost = () => {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (data) => {
          return(data);
        }
        );
 
  }
  var datalog = getPost()
  .then(response => console.log(response));
  // console.log(datalog);
  // states for content container set here



  return ( 
    <Router>
      <GlobalStyle />
      <form method="GET">
        <input type="text" placeholder="enter 1 or 2">

        </input>
        <button>Submit</button>
      </form>

      {/* <TravellersTrollies /> */}
      <ContentContainer />
    </Router>
  );
};

export default App;
