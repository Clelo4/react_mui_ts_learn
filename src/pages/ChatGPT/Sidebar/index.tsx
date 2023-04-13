import { Drawer, SxProps, useMediaQuery } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useAppSelector } from 'store/hooks';
import { useAppTheme } from 'themes/hooks';

export default function Sidebar(props: { sx?: SxProps; open: boolean; onClose: () => void }) {
  const theme = useAppTheme();
  const customization = useAppSelector((state) => state.customization);
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const content = (
    <Box
      component="div"
      sx={{
        padding: '10px'
      }}
    >
      123
    </Box>
  );

  console.log('dd');
  if (isUpMd) {
    return (
      <Box
        sx={{
          height: '100%',
          ...(props.sx || {}),
          backgroundColor: 'white'
        }}
      ></Box>
    );
  } else {
    return (
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
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            boxSizing: 'border-box',
            borderTopLeftRadius: customization.borderRadius,
            borderTopRightRadius: customization.borderRadius,
            padding: '10px'
          },
          zIndex: 10000
        }}
      >
        {content}
      </Drawer>
    );
  }
}
