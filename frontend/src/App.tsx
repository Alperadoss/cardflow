import { useMemo } from 'react';
import './App.css';
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';

function App() {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: '#000',
          },
          secondary: {
            main: '#15B58D',
          },
          info: {
            main: '#000',
          },
          text: {
            primary: '#000',
            secondary: '#666666',
          },
          warning: {
            main: '#F73378',
          },
          grey: {
            '900': '#6F6F6F',
          },
        },
      }),
    [],
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation />
        <Home />
        <main></main>
      </ThemeProvider>
    </>
  );
}

export default App;
