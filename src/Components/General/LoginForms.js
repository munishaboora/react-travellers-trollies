import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
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
		showPassword: false,
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

	const onSubmit = () => {
		// prettier-ignore
		fetch('http://localhost:5000/customer_login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([
                {
                    "username": values.username,
                    "password": values.password,
                },
            ]),
        })
		.then((response) => response.json())
		.then(data => console.log(data));
	};

	const showPasswordButton = (
		<InputAdornment position='end'>
			<IconButton
				aria-label='toggle password visibility'
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
				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Username */}
					<InputLabel htmlFor='standard-adornment'>Username</InputLabel>
					<Input
						id='standard-adornment'
						value={values.username}
						onChange={handleChange('username')}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Password */}
					<InputLabel htmlFor='standard-adornment-password'>
						Password
					</InputLabel>
					<Input
						id='standard-adornment-password'
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						endAdornment={showPasswordButton}
					/>
				</FormControl>

				<FormControl className={clsx(classes.margin, classes.textField)}>
					{/* Sign In Button*/}
					<Button
						variant='contained'
						style={{ backgroundColor: 'green' }}
						className={classes.button}
						endIcon={<SendIcon />}
						onClick={onSubmit}
					>
						Sign In
					</Button>
				</FormControl>
			</div>
		</div>
	);
}
