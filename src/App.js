import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import TravellersTrollies from './Components/General/AppHomeLayout/Carousel1';
import CarouselBottom from './Components/General/AppHomeLayout/Carousel2';
import StickyAppBar from './Components/General/StickyAppBar';
import StickyFooter from './Components/General/Footer/Footer';
import LoginPopupWindow from './Components/General/LoginPopupWindow';
import BasicButtonGroup from './Components/General/Footer/FooterButtons';
import HomePageMiddle from './Components/General/AppHomeLayout/HomePageMiddle';

import ContentContainer from './Components/General/ContentContainer/ContentContainerMain'

function App() {
	// states for content container set here
	const [userState, setUserState] = useState({
		loggedIn: false,
		id: -1,
		username: '',
		email: '',
		postcode: '',
		houseNumber: '',
		isCustomer: true, //false if volunteer
	});
	const [loginPopupOpen, setLoginPopupOpen] = useState(false);

	// can cycle through options to display something
	// const hasUserLoggedIn = () => {
	// if a get requested has been completed and status 200 && if returned data is true
	// setUserLoggedIn(true)
	// checkTheUser()
	// }

	/* const checkTheUser = () => {
    setSetter(!isSetter)
  } */
	// function to check input

	// states for content container set here

	/*   return ( 
    <Router>
      {/* <GlobalStyle /> */

	/* </Router> */
	/*   );
}; */
	const openLoginPopup = () => {
		setLoginPopupOpen(true);
	};

	const closeLoginPopup = () => {
		setLoginPopupOpen(false);
	};

	return (
		<Router>
			<GlobalStyle/>
			<StickyAppBar openLoginPopup={openLoginPopup}
			userState={userState} />
			<TravellersTrollies 	openLoginPopup={openLoginPopup}
						userState={userState}
					/>
			<br/> <br/> <br/> <br/> <br/> <br/>	<br/> <br/> <br/> <br/> 
			<h1 font-size="5em" style={{textAlign:"center"}}>Guess what? We've just made your life so much easier with our new app!</h1>
			<br/> <br/> <br/>
			<HomePageMiddle/>
			<br/> <br/> <br/> <br/> <br/> <br/>	<br/> 
			<h1 style={{textAlign:"center"}}>Meet our amazing partners:</h1>
			<CarouselBottom/>
			<StickyFooter />
			<BasicButtonGroup/>

			{/* {popupShown && <LoginPopup />} */}
			{/* <LoginPopupWindow
				open={loginPopupOpen}
				closeLoginPopup={closeLoginPopup}
			/> */}

			{/* <button onClick={checkTheUser}>CLICK ME :)</button> */}
			{/* <TravellersTrollies /> */}
			{/* the state is passed through to the container as a prop */}

			{!userState.loggedIn ? (
				<div>

		        	<LoginPopupWindow
						open={loginPopupOpen}
						closeLoginPopup={closeLoginPopup}
						userState={userState}
						setUserState={setUserState}
					/>
				</div>
			) : (
				<ContentContainer
					setterPassedThrough={userState.isCustomer}
					customerId={userState.id}
				/>
			)}
			{/* </AppStyles> */}
		</Router>
	);
}

export default App;
