
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

interface MainProps {
    open?: boolean,
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<MainProps>(({ theme, open }) => {
    const mainPadding = 20;
    return {
        ...theme.typography.mainContent,
        margin: '0 16px 16px 16px',
        minHeight: 'calc(100vh - 104px)',
        marginTop: '88px',
        width: '100%',
        padding: `${mainPadding}px`,
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
        };
    });

const MainLayout = () => {
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
};

export default MainLayout;

