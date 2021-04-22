import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControl, FormControlLabel } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Button, Checkbox } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		marginLeft: theme.spacing(3),
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	textField: {
		width: '40ch',
	},
	button: {
		margin: theme.spacing(2),
	},
}));

export default function InputAdornments(
	closeLoginPopup,
	userState,
	setUserState
) {
	const [values, setValues] = React.useState({
		username: '',
		password: '',
		confirmPassword: '',
		showPassword: false,
		email: '',
		postcode: '',
		houseNumber: '',
		isCustomer: true,
	});
	const [retryRegister, setRetryRegister] = React.useState(false);
	const [attemptingRegister, setAttemptingRegister] = React.useState(false);

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const onSubmit = async () => {
		setAttemptingRegister(true);

		// prettier-ignore

		const data = await fetch(`http://localhost:5000/add_${values.isCustomer? 'customer' : 'volunteer'}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify([
				{
					"username": values.username,
					"password": values.password,
					"email": values.email,
					"postcode": values.postcode,
					"house_number": values.houseNumber
				},
			]),
		}).then((response) => response.json())

		//setAttemptingRegister(false);
		console.log(data)

		// console.log(data);
		// if (data && data.hasOwnProperty('Logged In')) {
		// 	//Succesful log-in
		// 	//setUserState();
		// 	closeLoginPopup();
		// } else {
		// 	//Unsuccesful log-in
		// 	setRetryPassword(true);
		// }
	};

	const showPasswordButton = (
		<InputAdornment position="end">
			<IconButton
				aria-label="toggle password visibility"
				onClick={handleClickShowPassword}
				onMouseDown={handleMouseDownPassword}
			>
				{values.showPassword ? <Visibility /> : <VisibilityOff />}
			</IconButton>
		</InputAdornment>
	);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div>
				<h2>Are you a customer or volunteer?</h2>

				<FormControlLabel
					label="Customer"
					className={clsx(classes.margin)}
					control={
						<Checkbox
							checked={values.isCustomer}
							onChange={(_, checked) =>
								setValues({ ...values, isCustomer: checked })
							}
							name="checkedB"
							color="primary"
						/>
					}
				/>

				<FormControlLabel
					label="Volunteer"
					className={clsx(classes.margin)}
					control={
						<Checkbox
							checked={!values.isCustomer}
							onChange={(_, checked) =>
								setValues({ ...values, isCustomer: !checked })
							}
							name="checkedB"
							color="primary"
						/>
					}
				/>

				<br />
				<h2>Set your user details</h2>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Email */}
					<InputLabel htmlFor="standard-adornment">Email Address</InputLabel>
					<Input
						id="standard-adornment"
						value={values.email}
						onChange={handleChange('email')}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Username */}
					<InputLabel htmlFor="standard-adornment">Username</InputLabel>
					<Input
						id="standard-adornment"
						value={values.username}
						onChange={handleChange('username')}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Password */}
					<InputLabel htmlFor="standard-adornment-password">
						Password
					</InputLabel>
					<Input
						id="standard-adornment-password"
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						endAdornment={showPasswordButton}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Confirm Password */}
					<InputLabel htmlFor="standard-adornment-password">
						Confirm Password
					</InputLabel>
					<Input
						id="standard-adornment-password"
						type={values.showPassword ? 'text' : 'password'}
						value={values.confirmPassword}
						onChange={handleChange('confirmPassword')}
						endAdornment={showPasswordButton}
					/>
				</FormControl>

				<br />
				<h2>Location</h2>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Postcode */}
					<InputLabel htmlFor="standard-adornment">Postcode</InputLabel>
					<Input
						id="standard-adornment"
						value={values.postcode}
						onChange={handleChange('postcode')}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Home Address */}
					<InputLabel htmlFor="standard-adornment">House Number</InputLabel>
					<Input
						id="standard-adornment"
						value={values.houseNumber}
						onChange={handleChange('houseNumber')}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Register Button */}
					<Button
						variant="contained"
						style={{ backgroundColor: 'blue' }}
						className={classes.button}
						endIcon={<SendIcon />}
						onClick={onSubmit}
					>
						Register
					</Button>
				</FormControl>

				{retryRegister && (
					<p style={{ color: 'red' }}>
						Some of your information isn't correct. Please try again.
					</p>
				)}
			</div>
		</div>
	);
}
