import { ThemeProvider } from '@mui/material/styles';
import {
  RouterProvider,
} from 'react-router-dom';
import router from './routers/index';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
