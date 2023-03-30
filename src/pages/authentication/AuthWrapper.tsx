import { Box } from '@mui/material';
import React from 'react';

import { useAppTheme } from 'themes/hooks';

export default function AuthWrapper(props: React.PropsWithChildren ) {
  const theme = useAppTheme();

  return (
    <Box
      component={'div'}
      sx={{
        backgroundColor: theme.palette.primary.light,
        minHeight: '100vh',
      }}
    >
      {props.children}
    </Box>
  );
}