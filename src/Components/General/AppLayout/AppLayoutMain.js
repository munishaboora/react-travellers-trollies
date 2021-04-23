import React from 'react';
import Carousel from './Carousel';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const TravellersTrollies = ({ userState, openLoginPopup }) => {
	const images = [
		{
			src: `https://static.vecteezy.com/system/resources/thumbnails/002/278/743/original/flash-sale-neon-sign-for-promotion-with-floor-reflection-4k-free-video.jpg`,
		},
		{
			src: `https://q3p9g6n2.rocketcdn.me/wp-content/ml-loads/2016/08/grocery-groceries-commerce-online-ss-1920.jpg`,
		},
		{
			src: `https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/80628/s960_Groceries.jpg`,
		},
		{
			src:
				'https://www.popsci.com/app/uploads/2020/11/18/XDRYXGDBTNBULIWR72SJZKOEB4.jpg?width=1440',
		},
	];

	return (
		<div>
			<Carousel images={images} style={{ height: 600, margin: 'auto', top: 64 }} />
			<div
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.5)',
					position: 'absolute',
					zIndex: 10,
					width: '100vw',
					height: 600,
					margin: 'auto',
					top: 64,
					textAlign: 'center',
					paddingTop: 20,
					fontSize: 45,
				}}
			>
				<img
					alt="logo"
					src="https://media.discordapp.net/attachments/833623200373145610/833707795017629726/unknown.png"
					style={{ width: 250 }}
				/>
				<h1 style={{ color: 'black' }}>Travellers Trollies</h1>
				<h2 style={{ color: 'black' }}>Sustainable shopping</h2>
				<Button
					variant="contained"
					style={{ backgroundColor: 'green', width: 200, height: 70 }}
					endIcon={<SendIcon />}
					onClick={userState.id === -1 ? openLoginPopup : undefined}
				>
					Sign In
				</Button>
			</div>
		</div>
	);
};

export default TravellersTrollies;