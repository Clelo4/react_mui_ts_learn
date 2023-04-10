import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import router from 'routers/index';
import 'App.css';
import themeFactory from 'themes';
import { useAppSelector } from 'store/hooks';

function App() {
  const customization = useAppSelector((state) => state.customization);

  const theme = React.useMemo(() => {
    console.log('customization change');
    return themeFactory(customization);
  }, [customization]);

  console.log('theme', theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <SnackbarProvider maxSnack={3} autoHideDuration={1000} style={{ borderRadius: '10px' }}>
          <RouterProvider router={router}></RouterProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
