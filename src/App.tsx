import { ThemeProvider } from '@mui/material/styles';
import {
  RouterProvider,
} from 'react-router-dom';
import router from 'routers/index';
import 'App.css';
import CssBaseline from '@mui/material/CssBaseline';
import themeFactory from 'themes';
import React from 'react';
import { useSelector } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';

function App() {
  const customization = useSelector((state) => state.customization)

  const theme = React.useMemo(() => {
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
