import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';
import StickyAppBar from './Components/General/StickyAppBar';
import LoginPopup from './Components/General/LoginPopup';
// import ContentContainer from './Components/ContentContainer/ContentContainerMain'

function App() {
	// states for content container set here
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
			<StickyAppBar openLoginPopup={openLoginPopup} />
			<TravellersTrollies />
			{/* <ContentContainer /> */}
			{/* {popupShown && <LoginPopup />} */}
			<LoginPopup open={loginPopupOpen} closeLoginPopup={closeLoginPopup} />
		</Router>
	);
}

export default App;
