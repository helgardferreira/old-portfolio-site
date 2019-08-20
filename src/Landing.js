import React, { useEffect, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import ProteusLogo from './logo.svg';
import TopoInverse from './TopoInverse.svg';
import PortfolioCard from './PortfolioCard';

import triptrakaMock from './triptraka-mock.jpg';
import pdmMock from './pdm-mock.jpg';
import arcpayMock from './arcpay-mock.jpg';

const useStyles = makeStyles(theme => ({
  heroContent: {
    background: `linear-gradient(225deg, ${theme.palette.primary.light} 30%, ${
      theme.palette.secondary.light
    })`,
    color: '#ffffff',
    padding: theme.spacing(8, 0, 8, 0),
  },
  proteus: {
    backgroundImage: `url(${TopoInverse})`,

    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',

    backgroundColor: 'rgba(212, 0, 249, 0.4)',

    transition: 'background-color 3s ease-in-out',

    padding: theme.spacing(8, 0, 10, 0),
    color: '#ffffff',
  },
  proteusDescription: {
    height: '100%',
  },
  cardGrid: {
    background: `linear-gradient(${theme.palette.tertiary.main}, ${
      theme.palette.tertiary.dark
    })`,
    backgroundColor: theme.palette.tertiary.main,
    padding: theme.spacing(8, 0),
  },
  me: {
    // background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${
    //   theme.palette.secondary.light
    // } 90%)`,
    background: 'rgba(0, 0, 0, 0.1)',

    padding: theme.spacing(2, 2, 1, 2),
    borderRadius: theme.spacing(2),
  },
  name: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#ffffff',
  },
  logoContainer: {
    position: 'relative',
    height: theme.spacing(50),
  },
  logo: {
    height: theme.spacing(50),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
}));

export default function Landing() {
  const cards = [
    {
      heading: 'Arcfyre Arcpay',
      description:
        'A payment processing app for the clients of Arcfyre International.',
      media: arcpayMock,
      android:
        'https://play.google.com/store/apps/details?id=za.co.smartpalm.arcpay',
      iOS: 'https://apps.apple.com/za/app/arcpay-by-arcfyre-group/id1463216323',
    },
    {
      heading: 'Arcfyre TripTraka',
      description:
        'A trip management app for the clients of Arcfyre International.',
      media: triptrakaMock,
      android:
        'https://play.google.com/store/apps/details?id=za.co.smartpalm.triptraka.arcfyre&hl=en',
      iOS: 'https://apps.apple.com/us/app/arcfyre-triptraka/id1472968528',
    },
    {
      heading: 'PDM Global',
      description:
        'A client and agent management system for the clients and agents of Praesidium Global.',
      media: pdmMock,
    },
  ];
  const classes = useStyles();
  const colorRef = useRef('rgba(212, 0, 249, 0.8)');

  useEffect(() => {
    const proteusContainer = document.getElementById('proteus-container');

    const cycleInterval = setInterval(() => {
      proteusContainer.style.backgroundColor = colorRef.current;
      colorRef.current =
        colorRef.current === 'rgba(212, 0, 249, 0.4)'
          ? 'rgba(212, 0, 249, 0.8)'
          : 'rgba(212, 0, 249, 0.4)';
    }, 3000);
    return () => {
      clearInterval(cycleInterval);
    };
  }, []);

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <div className={classes.me}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="inherit"
              gutterBottom
            >
              Who Am I?
            </Typography>
            <Typography variant="h5" align="center" color="inherit" paragraph>
              <a
                href="https://github.com/helgardferreira"
                className={classes.name}
              >
                Helgard Richard Ferreira
              </a>
              , full stack engineer by trade, problem solver at heart. Fluent at
              JavaScript - particularly React, Vue.js, and Node.js.
            </Typography>
          </div>
        </Container>
      </div>
      <div className={classes.proteus} id="proteus-container">
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="inherit"
            gutterBottom
          >
            What Have I Done?
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className={classes.logoContainer}>
              <img
                src={ProteusLogo}
                alt="Proteus logo"
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                display="flex"
                alignItems="center"
                className={classes.proteusDescription}
              >
                <Box>
                  <Typography
                    component="h2"
                    variant="h3"
                    align="left"
                    color="inherit"
                    paragraph
                  >
                    ProteusEMS
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    color="inherit"
                    paragraph
                  >
                    A fully-featured education management system for hospital
                    personnel (which is currently in use in the middle east).
                    Features include:
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="h6" align="left" color="inherit">
                        An automated RAG (Red, Amber, Green) reporting system.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6" align="left" color="inherit">
                        An automated taxonomization system for determining a
                        staff member's proficiency.
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="h6" align="left" color="inherit">
                        Group management utilities to manage multiple staff
                        members
                      </Typography>
                    </li>
                  </ul>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.cardGrid}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {cards.map(
              ({ heading, description, media, android, iOS }, index) => (
                <PortfolioCard
                  key={index}
                  heading={heading}
                  description={description}
                  media={media}
                  android={android}
                  iOS={iOS}
                />
              ),
            )}
          </Grid>
        </Container>
      </div>
    </main>
  );
}
