import React from 'react';
import OptionsSelector from '../OptionsSelector/OptionsSelector.js';
import ResponseContainer from '../ResponseContainer/ResponseContainer.js';
import { useState } from 'react';
import ContentContainerStyles from './ContentContainerStyles.js';

// this is the prop
const ContentContainer = ({ setterPassedThrough, customerId }) => {
	const [buttonChoice, setButtonChoice] = useState('');

	const changeResponseContainer = (event) => {
		console.log('button has been clicked');
		console.log(event.target);
		setButtonChoice(event.target.name);
	};

	//just to start
	// if prop is one thing, will return data into the container
	// if prop is another thing, will return another set of data into the container
	return (
		<>
			<ContentContainerStyles>
				{/* h1 will render differently based on what the prop is, whether it's true or false */}
				{/* <h1>This is for { setterPassedThrough ? "SETTERS" : "COMPLETERS" }</h1> */}

				{/* the state will be changed in this component*/}
				<OptionsSelector
					setterPassedThrough={setterPassedThrough}
					changeResponseContainer={changeResponseContainer}
				/>

				{/* the state will be passed down to this component*/}
				<ResponseContainer
					setterPassedThrough={setterPassedThrough}
					stateOfResponse={buttonChoice}
					customerId={customerId}
				/>
			</ContentContainerStyles>
		</>
	);
};

ContentContainer.propTypes = {};

export default ContentContainer;
