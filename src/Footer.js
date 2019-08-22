import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.tertiary.dark,
    color: theme.palette.text.main,
    padding: theme.spacing(3),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="inherit" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.helgard.dev">
          helgard.dev
        </Link>{' '}
        2019.
      </Typography>
    </footer>
  );
}
