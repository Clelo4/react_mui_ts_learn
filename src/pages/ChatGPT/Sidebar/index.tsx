import { Drawer, SxProps } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { useAppTheme } from 'themes/hooks';

export default function Sidebar(props: { sx?: SxProps; open: boolean; onClose: () => void }) {
  const theme = useAppTheme();
  const customization = useAppSelector((state) => state.customization);
  return (
    <>
      <Drawer
        anchor="bottom"
        ModalProps={{
          keepMounted: false
        }}
        open={props.open}
        onClose={props.onClose}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            // width: '120',
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            boxSizing: 'border-box',
            borderTopLeftRadius: customization.borderRadius,
            borderTopRightRadius: customization.borderRadius,
            padding: '10px'
            // [theme.breakpoints.up('md')]: {
            //   top: `${AppBarHeight}px`
            // }
          }
        }}
      >
        <Box
          component="div"
          sx={{
            ...(props.sx || {})
          }}
        >
          123
        </Box>
      </Drawer>
    </>
  );
}
