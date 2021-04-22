import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
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

	const openLoginPopup = () => {
		setLoginPopupOpen(true);
	};

	const closeLoginPopup = () => {
		setLoginPopupOpen(false);
	};

	return (
		<Router>
			<GlobalStyle />
			<StickyAppBar openLoginPopup={openLoginPopup} userState={userState} />
			<TravellersTrollies userState={userState} />
			<StickyFooter />
			<LoginPopupWindow
				open={loginPopupOpen}
				closeLoginPopup={closeLoginPopup}
				userState={userState}
				setUserState={setUserState}
			/>
		</Router>
	);
}

export default App;
