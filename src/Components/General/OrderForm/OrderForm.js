import { useState } from 'react';

const OrderForm = () => {
	const [itemOne, setItemOne] = useState('');
	const [itemTwo, setItemTwo] = useState('');
	const [itemThree, setItemThree] = useState('');

	const onSubmit = (e) => {
		e.preventDefault(); // Needed to prevent default submission action

		console.log(itemOne);

		const receipt = fetch(
			'http://localhost:5000/place_order_and_find_volunteer',
			{
				method: 'POST',
				//prettier-ignore
				headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
				body: JSON.stringify({
					customer_id: '1',
					product_names: [`${itemOne}`, `${itemTwo}`, `${itemThree}`],
				}),
			}
		)
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		<div>
			<h1>Basket</h1>
			<form onSubmit={onSubmit}>
				<label>Item 1</label>
				<input
					type='text'
					value={itemOne}
					onChange={(e) => setItemOne(e.target.value)}
				></input>

				<label>Item 2</label>
				<input
					type='text'
					value={itemTwo}
					onChange={(e) => setItemTwo(e.target.value)}
				></input>

				<label>Item 3</label>
				<input
					type='text'
					value={itemThree}
					onChange={(e) => setItemThree(e.target.value)}
				></input>

				<button type='submit'>Place Order</button>
			</form>
		</div>
	);
};

export default OrderForm;
