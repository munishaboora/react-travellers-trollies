import React from 'react';
import OptionsSelector from '../OptionsSelector/OptionsSelector.js';
import ResponseContainer from '../ResponseContainer/ResponseContainer.js';
import { useState } from 'react';
import ContentContainerStyles from './ContentContainerStyles.js';


const ContentContainer = ({ setterPassedThrough, customerId }) => {
	const [buttonChoice, setButtonChoice] = useState('');

	const changeResponseContainer = (event) => {
		setButtonChoice(event.target.name);
	};

	return (
		<>
			<ContentContainerStyles>

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
