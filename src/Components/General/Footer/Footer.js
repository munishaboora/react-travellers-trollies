import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
     {' Copyright © '}
          {new Date().getFullYear()}

      <Link color="inherit" href="https://github.com/munishaboora/react-travellers-trollies">
      {' '} Travellers' Trollies Ltd
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="xl">
   
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}


{/* <Link color="inherit" href="https://github.com/munishaboora/react-travellers-trollies">
{' '} Travellers' Trollies Ltd
</Link> */}