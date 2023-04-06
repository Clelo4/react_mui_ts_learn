import { Box, Drawer } from "@mui/material";

import { drawerWidth } from "config";

interface PropsType {
  open?: boolean,
  onClose: () => void,
}

export default function Sidebar(props: PropsType) {
  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component='nav'>
      <Drawer
        variant="persistent"
        anchor="left"
        open={props.open}
        onClose={props.onClose}
        ModalProps={{ keepMounted: false }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        123
      </Drawer>
    </Box>
  );
}

// '& .MuiDrawer-paper': {
//   width: drawerWidth,
//   background: theme.palette.background.default,
//   color: theme.palette.text.primary,
//   borderRight: 'none',
//   [theme.breakpoints.up('md')]: {
//       top: '88px'
//   }
// }
