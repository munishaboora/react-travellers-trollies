import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import companyLogo from '../../images/circle-lakers-themed-logo.png';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar({ openLoginPopup }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar>
				<Typography variant="h3" className={classes.title}>
				<img src={companyLogo} alt="circle-lakers-themed-logo" width="100" height="100"/>
				</Typography>
				<Typography variant="h3" className={classes.title}>
				Travellers' Trollies
				</Typography>
				<Button textStyle={{ fontSize: 40 }} color="inherit" onClick={openLoginPopup}>
					Login/Register 
				<MenuIcon/>
				</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}

