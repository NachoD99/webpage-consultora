// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0f1c',
      paper: '#131a2b',
    },
    primary: {
      main: '#00bfff',
    },
    secondary: {
      main: '#009acd',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c0c0c0',
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
