import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';
import StickyAppBar from './Components/General/StickyAppBar';
import LoginPopupWindow from './Components/General/LoginPopupWindow';
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

	//const []

	return (
		<Router>
			<GlobalStyle />
			<StickyAppBar openLoginPopup={openLoginPopup} />
			<TravellersTrollies />
			{/* <ContentContainer /> */}
			{/* {popupShown && <LoginPopup />} */}
			<LoginPopupWindow
				open={loginPopupOpen}
				closeLoginPopup={closeLoginPopup}
			/>
		</Router>
	);
}

export default App;
