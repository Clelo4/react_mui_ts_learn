// import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  RouterProvider,
} from 'react-router-dom';
import router from 'routers/index';
import 'App.css';
import CssBaseline from '@mui/material/CssBaseline';
// import themeOption from 'theme';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import React from 'react';
// import { useSelector } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';

function App() {
  // const customization: boolean = (+new Date()) % 2 === 0;
  // // = useSelector((state) => state.customization)
  // const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // const theme = React.useMemo(() => {
  //   const newTheme = { ...themeOption };
  //   if (newTheme.palette)
  //     newTheme.palette.mode = preferDarkMode ? 'dark': 'light';
  //   return createTheme(newTheme);
  // }, [preferDarkMode, customization]);

  return (
    <StyledEngineProvider injectFirst>
      {/* // <ThemeProvider theme={theme}> */}
        <CssBaseline></CssBaseline>
        <RouterProvider router={router}></RouterProvider>
      {/* // </ThemeProvider> */}
    </StyledEngineProvider>
  );
}

export default App;
