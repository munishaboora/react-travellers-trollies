import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import StickyAppBar from './Components/General/StickyAppBar';
import StickyFooter from './Components/General/Footer/Footer';
import LoginPopupWindow from './Components/General/LoginPopupWindow';
import BasicButtonGroup from './Components/General/Footer/FooterButtons';
import HomePageMiddle from './Components/General/AppHomeLayout/HomePageMiddle';
import TravellersTrollies from './Components/General/AppLayout/AppLayoutMain';
import ContentContainer from './Components/General/ContentContainer/ContentContainerMain';
import Carousel from './Components/General/AppLayout/Carousel';

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

	const images = [
		{
			src: `https://creativereview.imgix.net/content/uploads/2016/05/North_Coop_000_Logo-CRsite.jpg?auto=compress,format&q=60&w=1200&h=772`,
		},
		{
			src: `https://hammersmithbid.co.uk/wp-content/uploads/2020/06/sainsburys_logo_760_v1.png`,
		},
		{
			src: `https://cdn.mos.cms.futurecdn.net/KjL62wBFr8zZwaaPbdMZrL.png`,
		},
		{
			src: `https://preview.redd.it/k2w1cisqotx51.png?width=1757&format=png&auto=webp&s=19b2a77dd2d0254c9cfb89e8b207d5a4bc30988c`,
		},
		{
			src: `https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2017/03/13124707/ALDI-New-Logo.jpg`,
		},
		{
			src: `https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/AsdaResized-20150223115224441.jpg`,
		},
		{
			src: `https://www.greyfriarsringwood.org.uk/wp-content/uploads/2019/05/WAITROSE400X600.png`,
		},

		{
			src: `https://1000logos.net/wp-content/uploads/2018/09/Morrisons-Logo.jpg`,
		},
	];

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

			{/* {popupShown && <LoginPopup />} */}
			{/* <LoginPopupWindow
				open={loginPopupOpen}
				closeLoginPopup={closeLoginPopup}
			/> */}
			{!userState.loggedIn ? (
				<div>
					<TravellersTrollies
						openLoginPopup={openLoginPopup}
						userState={userState}
					/>
					<br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
					<h1 font-size="5em" style={{ textAlign: 'center' }}>
						Guess what? We've just made your life so much easier with our new
						app!
					</h1>
					<br /> <br /> <br />
					<HomePageMiddle />
					<br /> <br /> <br /> <br /> <br /> <br /> <br />
					<h1 style={{ textAlign: 'center' }}>Meet our amazing partners:</h1>
					<Carousel
						images={images}
						style={{ height: 400, width: 700, margin: 'auto' }}
					/>
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

			<StickyFooter />
			<BasicButtonGroup />
		</Router>
	);
}

export default App;
