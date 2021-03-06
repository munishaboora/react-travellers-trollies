import React from 'react';
import { ResponseContainerStyles } from './ResponseContainerStyles';
import OrderForm from '../OrderForm/OrderForm';

const ResponseContainer = ({
	setterPassedThrough,
	stateOfResponse,
	customerId,
}) => {
	return (
		<div>
			<ResponseContainerStyles>
				<h1>
					This is the response container. Depending on the button selected,
					different things will happen
				</h1>
				{/* depending on the state passed through from the prop, different screens are to appear */}
				<h1>
					{' '}
					{setterPassedThrough ? (
						stateOfResponse === 'createOrder' ? (
							<OrderForm customerId={customerId} />
						) : stateOfResponse === 'previousOrder' ? (
							`State of response is ${stateOfResponse}`
						) : stateOfResponse === 'currentOrder' ? (
							`State of response is ${stateOfResponse}`
						) : (
							'nothing to display'
						)
					) : (
						'This is for the volunteers. Not much will appear here'
					)}
				</h1>
			</ResponseContainerStyles>
		</div>
	);
};

export default ResponseContainer;

{
	/* (stateOfResponse === "createOrder" ? ( <><h1>Stuff for creating an order</h1> </>) : (stateOfResponse === "previousOrder" ? (<><h1>Stuff for seeing previous orders</h1></> ) : ( stateOfResponse === "currentOrder" ? ( <><h1>Stuff for seeing the current order</h1></>  ) : ( "nothing to see here"   )   ) )   )  )  */
}
