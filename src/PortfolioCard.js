import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import { green, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    padding: theme.spacing(1, 2),
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: 'white',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const AndroidButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(green[600]),
    backgroundColor: green[600],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const IOSButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(grey[800]),
    backgroundColor: grey[800],
    '&:hover': {
      backgroundColor: grey[900],
    },
  },
}))(Button);

export default function PortfolioCard({
  heading,
  description,
  media,
  android,
  iOS,
}) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={media}
          title={heading}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        {android || iOS ? (
          <CardActions>
            {android ? (
              <AndroidButton
                variant="contained"
                href={android}
                target="_blank"
                rel="noopener noreferrer"
              >
                Android
                <Icon className={`${classes.icon} fa fa-android`} />
              </AndroidButton>
            ) : null}
            {iOS ? (
              <IOSButton
                variant="contained"
                href={iOS}
                target="_blank"
                rel="noopener noreferrer"
              >
                iOS
                <Icon className={`${classes.icon} fa fa-apple`} />
              </IOSButton>
            ) : null}
          </CardActions>
        ) : null}
      </Card>
    </Grid>
  );
}
