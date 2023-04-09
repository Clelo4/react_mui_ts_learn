import { Card, CardContent } from '@mui/material';
import React from 'react';

import { useAppTheme } from 'themes/hooks';

import type { SxProps, Theme } from '@mui/material/styles';

type Props = React.PropsWithChildren<{
  sx?: SxProps<Theme>;
}>;

const MainCardRef = React.forwardRef<HTMLDivElement, Props>(function MainCard(props, ref) {
  const theme = useAppTheme();
  return (
    <Card
      ref={ref}
      sx={{
        border: '1px solid',
        borderColor: theme.palette.primary[200] + 25,
        ':hover': {
          boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
        },
        padding: '20px',
        ...(props.sx ?? {})
      }}
    >
      <CardContent sx={{ padding: '0 !important' }}>{props.children}</CardContent>
    </Card>
  );
});

export default MainCardRef;
