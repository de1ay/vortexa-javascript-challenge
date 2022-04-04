import { createTheme } from '@mui/material/styles';

const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e90ff',
    },
    secondary: {
      main: '#E12525',
      light: '#ff9292',
      dark: '#B51010',
    },
    background: {
      default: '#f4f8ff',
    },
  },
});

export default LightTheme;
