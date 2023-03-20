// import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  RouterProvider,
} from 'react-router-dom';
import router from './routers/index';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
// import themeOption from './theme';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import React from 'react';

function App() {
  // const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const theme = React.useMemo(() => {
  //   const newTheme = { ...themeOption };
  //   if (newTheme.palette)
  //     newTheme.palette.mode = preferDarkMode ? 'dark': 'light';
  //   return createTheme(newTheme);
  // }, [preferDarkMode]);

  return (
    // <ThemeProvider theme={theme}>
    <>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}></RouterProvider>
    </>
    // </ThemeProvider>
  );
}

export default App;
