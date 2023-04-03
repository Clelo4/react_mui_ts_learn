import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { StyledEngineProvider } from '@mui/material';

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

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
