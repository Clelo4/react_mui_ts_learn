
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
import { AppBarHeight, drawerWidth } from 'config';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean,
}

interface MainProps {
    open?: boolean,
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<MainProps>(({ theme, open }) => {
    const mainPadding = 20;
    const margin = 16;
    return {
        ...theme.typography.mainContent,
        margin: `0 ${margin}px ${margin}px ${margin}px`,
        minHeight: `calc(100vh - ${margin + AppBarHeight}px)`,
        marginTop: `${AppBarHeight}px`,
        width: '100%',
        padding: `${mainPadding}px`,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.standard
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth + mainPadding}px)`,
        }),
    };
});

const AppBar = styled(MuiAppBar, {  shouldForwardProp: (prop) => prop !== 'open', })<AppBarProps>(
    ({ theme, open }) => {
        return {
            width: '100%',
            bgcolor: theme.palette.background.default,
            height: `${AppBarHeight}px`
        };
    });

function MainLayout() {
    const theme = useAppTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const dispatch = useAppDispatch();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                open={drawerOpen}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: drawerOpen ? theme.transitions.create('width') : 'none'
                }}
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

            <Sidebar open={drawerOpen} onClose={() => { setDrawerOpen(false); }}/>   

            <Main
                open={drawerOpen}
            >
                <Outlet></Outlet>
            </Main>
        </Box>
    );
}

export default MainLayout;

