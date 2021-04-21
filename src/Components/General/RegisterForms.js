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

export default function InputAdornments() {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		username: '',
		password: '',
		confirmPassword: '',
		showPassword: false,
		email: '',
		postcode: '',
		address: '',
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
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

	return (
		<div className={classes.root}>
			<div>
				<h2>Are you a volunteer or customer?</h2>

				<FormControlLabel
					label="Volunteer"
					className={clsx(classes.margin)}
					control={
						<Checkbox
							/* checked={state.checkedB}
                        onChange={handleChange} */
							name="checkedB"
							color="primary"
						/>
					}
				/>

				<FormControlLabel
					label="Customer"
					className={clsx(classes.margin)}
					control={
						<Checkbox
							/* checked={state.checkedB}
                        onChange={handleChange} */
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
					<InputLabel htmlFor="standard-adornment">Home Address</InputLabel>
					<Input
						id="standard-adornment"
						value={values.address}
						onChange={handleChange('address')}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Register Button */}
					<Button
						variant="contained"
						style={{ backgroundColor: 'blue' }}
						className={classes.button}
						endIcon={<SendIcon />}
					>
						Register
					</Button>
				</FormControl>
			</div>
		</div>
	);
}
