import { Card, CardContent } from '@mui/material';
import React from 'react';

import { useAppTheme } from 'themes/hooks';

import type { SxProps, Theme } from '@mui/material/styles';

type Props = React.PropsWithChildren<{
  sx?: SxProps<Theme>;
}>;

function MainCard(props: Props) {
  const theme = useAppTheme();
  return (
    <Card
      sx={{
        border: '1px solid',
        borderColor: theme.palette.primary[200] + 25,
        ':hover': {
          boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
        },
        ...(props.sx ?? {})
      }}
    >
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

export default MainCard;
