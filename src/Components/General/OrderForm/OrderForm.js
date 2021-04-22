const onSubmit = (e) => {
	e.preventDefault();
	// console.log('Hello World!');

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
				product_names: ['Yucca', 'Rhubarb', 'Yucca'],
			}),
		}
	)
		.then((response) => response.json())
		.then((data) => console.log(data));

	console.log(receipt);

	// prettier-ignore
	// const data = await fetch(`http://localhost:5000/${customerOrVolunteer}_login`, {
	//     method: 'POST',
	//     headers: {
	//         'Accept': 'application/json',
	//         'Content-Type': 'application/json',
	//     },
	//     body: JSON.stringify([
	//         {
	//             "username": values.username,
	//             "password": values.password,
	//         },
	//     ]),
	// }).then((response) => response.json())
};

const OrderForm = () => {
	return (
		<div>
			<h1>Basket</h1>
			<form onSubmit={onSubmit}>
				<input type='text'></input>
				<input type='text'></input>
				<input type='text'></input>
				<button type='submit'>Place Order</button>
			</form>
		</div>
	);
};

export default OrderForm;
