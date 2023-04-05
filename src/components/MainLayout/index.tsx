
import { Outlet } from 'react-router-dom';
import { AppBar as MuiAppBar, Box, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import { useAppTheme } from 'themes/hooks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import Sidebar from './Sidebar';
import styled from 'utils/styled';
import { drawerWidth } from 'config';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean,
}

const Main = styled('main')(({ theme }) => {
    return {
        ...theme.typography.mainContent
    };
});

const AppBar = styled(MuiAppBar, {  shouldForwardProp: (prop) => prop !== 'open', })<AppBarProps>(
    ({ theme, open }) => {
        return {
            width: '100%',
            bgcolor: theme.palette.background.default,
        };
    });

const MainLayout = () => {
    const theme = useAppTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const dispatch = useAppDispatch();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                open={drawerOpen}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => { setDrawerOpen(!drawerOpen); }}
                        edge="start"
                    >
                        <MenuIcon sx={{ fontSize: '32px' }} />
                    </IconButton>
                    <Typography variant="h4" noWrap component="div" sx={{ marginLeft: '12px', }}>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box component='div' sx={{
                width: '100%',
                display: 'flex',                
                minHeight: 'calc(100vh - 88px)',
                marginTop: '88px',
            }}>
                <Sidebar open={drawerOpen} onClose={() => { setDrawerOpen(false); }}/>   
                <Main sx={{
                    flexGrow: 1,
                    margin: '0 16px 16px 16px', 
                    height: 'calc(100% - 16px)',
                    width: '100%',
                    padding: '20px'
                 }}>
                    <Outlet></Outlet>
                </Main>
            </Box>
        </Box>
    );
};

export default MainLayout;

