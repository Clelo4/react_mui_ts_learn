import { Box, Drawer, List, useMediaQuery } from '@mui/material';

import { AppBarHeight, drawerWidth } from 'config';
import { useAppTheme } from 'themes/hooks';
import MenuList from './MenuList';

interface PropsType {
  open?: boolean;
  onClose: () => void;
}

export default function Sidebar(props: PropsType) {
  const theme = useAppTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box component="nav">
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={props.open}
        onClose={props.onClose}
        ModalProps={{ keepMounted: false }}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            boxSizing: 'border-box',
            [theme.breakpoints.up('md')]: {
              top: `${AppBarHeight}px`
            }
          }
        }}
      >
        <>
          {matchUpMd || <Box component="div" sx={{ height: `${AppBarHeight}px` }}></Box>}
          <MenuList />
        </>
      </Drawer>
    </Box>
  );
}
