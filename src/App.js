import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import TravellersTrollies from './Components/General/AppHomeLayout/Carousel1';
import Carousel2 from './Components/General/AppHomeLayout/Carousel2';
import StickyAppBar from './Components/General/StickyAppBar';
import StickyFooter from './Components/General/Footer/Footer';
import LoginPopupWindow from './Components/General/LoginPopupWindow';
import BasicButtonGroup from './Components/General/Footer/FooterButtons';
import HomePageMiddle from './Components/General/AppHomeLayout/HomePageMiddle';
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
			<br/> <br/> <br/> <br/> <br/> <br/> <br/>
			<Carousel2/>
			<HomePageMiddle/>
			<StickyFooter />
			<BasicButtonGroup/>
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
