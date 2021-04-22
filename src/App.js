import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import AppStyles from './AppStyles.js';
import ContentContainer from './Components/General/ContentContainer/ContentContainerMain';
import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';
import StickyAppBar from './Components/General/StickyAppBar';
import StickyFooter from './Components/General/Footer/Footer';
import LoginPopupWindow from './Components/General/LoginPopupWindow';
// import ContentContainer from './Components/ContentContainer/ContentContainerMain'

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
			<GlobalStyle />
			<StickyAppBar
				openLoginPopup={openLoginPopup}
				userState={userState} /**/
			/>
			{/* <AppStyles> */}
			{/* <button onClick={checkTheUser}>CLICK ME :)</button> */}
			{/* <TravellersTrollies /> */}
			{/* the state is passed through to the container as a prop */}

			{!userState.loggedIn ? (
				<div>
					<TravellersTrollies
						openLoginPopup={openLoginPopup}
						userState={userState}
					/>
					<StickyFooter />
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
