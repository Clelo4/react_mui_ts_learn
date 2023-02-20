import React from 'react';
import { createTheme, ThemeProvider   } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import {
  RouterProvider,
} from 'react-router-dom';
import router from './routers/index';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  console.log('prefersDarkMode: ', prefersDarkMode);

  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
      }
    });
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
