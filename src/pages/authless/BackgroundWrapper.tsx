import { Box } from '@mui/material';
import React from 'react';

import { useAppTheme } from 'themes/hooks';

import type { SxProps, Theme } from '@mui/material/styles';

type Props = React.PropsWithChildren<{
  sx?: SxProps<Theme>;
}>;

function BackgroundWrapper(props: Props) {
  const theme = useAppTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        minHeight: '100vh',
        ...props.sx
      }}
    >
      {props.children}
    </Box>
  );
}

export default BackgroundWrapper;
