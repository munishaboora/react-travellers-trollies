import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoginScreen from './LoginScreen';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const LoginPopupWindow = ({ open, closeLoginPopup }) => {
	const classes = useStyles();

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={closeLoginPopup}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						{/* <h2>Transition modal</h2>
						<h2>Transition modal</h2>
						<h2>Transition modal</h2>
						<h2>Transition modal</h2>
						<p>react-transition-group animates meeee.</p> */}
						<LoginScreen />
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default LoginPopupWindow;
