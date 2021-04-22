import React, { useState } from 'react';
//import {TravellersTrolliesContainer, TravellersTrolliesContent, TravellersTrolliesItems, TravellersTrolliesH1, TravellersTrolliesLoginBtn } from './AppLayoutStyles';
import Carousel from './Carousel';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const TravellersTrollies = () => {
	return (
		<div>
			<Carousel />
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
					/* onClick={ } */
				>
					Sign In
				</Button>
			</div>
		</div>
	);
};
export default TravellersTrollies;

{
	/* <TravellersTrolliesContainer>

<TravellersTrolliesContent>
    <TravellersTrolliesItems>
        <TravellersTrolliesH1>Your friendly neighbourhood shopper!</TravellersTrolliesH1>
        <TravellersTrolliesLoginBtn>Login</TravellersTrolliesLoginBtn>
    </TravellersTrolliesItems>
</TravellersTrolliesContent>
</TravellersTrolliesContainer> */
}
