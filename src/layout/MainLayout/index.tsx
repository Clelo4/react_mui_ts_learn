import { Outlet } from 'react-router-dom';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import { useAppTheme } from 'themes/hooks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import Sidebar from './Sidebar';
import styled from 'utils/styled';
import { AppBarHeight, drawerWidth } from 'config';
import { revertSidebarStatus } from 'store/sidebar';
import Header from './Header';
import LogoSection from './LogoSection';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface MainProps {
  open?: boolean;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<MainProps>(
  ({ theme, open }) => {
    const mainPadding = 20;
    const margin = 16;
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return {
      boxSizing: 'border-box',
      margin: `0 ${margin}px ${margin}px ${margin}px`,
      height: `calc(100vh - ${margin + AppBarHeight}px)`,
      marginTop: `${AppBarHeight}px`,
      width: '100%',
      padding: `${mainPadding}px`,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard
      }),
      ...(open && {
        width: `calc(100% - ${(matchUpMd ? drawerWidth : 0) + margin * 2}px)`
      }),
      ...theme.typography.mainContent
    };
  }
);

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(
  ({ theme, open }) => {
    return {
      width: '100%',
      bgcolor: theme.palette.background.default,
      height: `${AppBarHeight}px`
    };
  }
);

function MainLayout() {
  const theme = useAppTheme();
  const sidebarState = useAppSelector((state) => state.sidebar);
  const dispath = useAppDispatch();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const revertSidebarStatusCb = () => {
    dispath(revertSidebarStatus());
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <CssBaseline />
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        open={sidebarState.isOpen}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: sidebarState.isOpen ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
          <Box component={"div"} sx={{ width: '180px' }}>
            <LogoSection></LogoSection>
          </Box>
          <Header setDrawerOpen={revertSidebarStatusCb}></Header>
        </Toolbar>
      </AppBar>

      <Sidebar
        open={matchUpMd ? sidebarState.isOpen : !sidebarState.isOpen}
        onClose={revertSidebarStatusCb}
      />

      <Main open={sidebarState.isOpen}>
        <Outlet></Outlet>
      </Main>
    </Box>
  );
}

export default MainLayout;
