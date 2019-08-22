import React from 'react';
import { navigate } from '@reach/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ProteusLogoCircle from './logo-circle.svg';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
    height: theme.spacing(7),
    cursor: 'pointer',
  },
  appBar: {
    backgroundColor: theme.palette.tertiary.dark,
  },
}));

const HeaderIcon = withStyles(theme => ({
  root: {
    cursor: 'pointer',
    fontSize: theme.spacing(4),
    marginLeft: theme.spacing(3),
    color: 'white',
    '&:hover': {
      color: grey[400],
    },
  },
}))(Icon);

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <img
            onClick={() => navigate('/')}
            src={ProteusLogoCircle}
            alt="Logo"
            className={classes.icon}
          />

          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Home
          </Typography>

          <a
            href="https://www.linkedin.com/in/helgard-richard-ferreira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeaderIcon className={`fa fa-linkedin`} />
          </a>
          <a
            href="https://github.com/helgardferreira"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeaderIcon className={`fa fa-github-square`} />
          </a>
        </Toolbar>
      </AppBar>
    </header>
  );
}
