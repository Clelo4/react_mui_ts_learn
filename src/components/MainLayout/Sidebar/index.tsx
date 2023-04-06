import { Box, Drawer, List } from "@mui/material";

import { drawerWidth } from "config";
import { useAppTheme } from "themes/hooks";
import MenuList from './MenuList';

interface PropsType {
  open?: boolean,
  onClose: () => void,
}

function DrawerContent() {
  return (
    <MenuList />
  );
}

export default function Sidebar(props: PropsType) {
  const theme = useAppTheme();

  return (
    <Box component='nav'>
      <Drawer
        variant="persistent"
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
            top: '88px',
          },
        }}
      >
        <DrawerContent></DrawerContent>
      </Drawer>
    </Box>
  );
}
