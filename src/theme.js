import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d500f9',
      dark: '#4a148c',
      light: '#FE6B8B',
    },
    secondary: {
      main: '#F59B00',
      dark: '#e65100',
      light: '#FF8E53',
    },
    tertiary: {
      main: '#0C566B',
      dark: '#082732',
      light: '#12B0AB',
    },
    green: {
      main: green[700],
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#333',
      dark: '#212121',
    },
    text: {
      main: '#ffffff',
    },
  },
});

export default theme;
