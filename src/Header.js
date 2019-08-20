import React from 'react';
import { navigate } from '@reach/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProteusLogoCircle from './logo-circle.svg';

export default function Header() {
  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
      height: theme.spacing(7),
      cursor: 'pointer',
    },
    appBar: {
      backgroundColor: theme.palette.tertiary.dark,
    },
  }));
  const classes = useStyles();

  return (
    <header>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <img
            onClick={() => {
              navigate('/');
            }}
            src={ProteusLogoCircle}
            alt="Logo"
            className={classes.icon}
          />
          <Typography variant="h6" color="inherit" noWrap>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
}
