import { Link, Typography, Stack } from '@mui/material';
import type { SxProps, Theme } from '@mui/material/styles';
import React from 'react';

type Props = React.PropsWithChildren<{
  sx?: SxProps<Theme>;
}>;

function Footer(props: Props) {
  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ ...(props.sx ?? {}) }}>
      <Typography
        variant="subtitle2"
        component={Link}
        href="https://www.chengjunjie.com"
        target="_blank"
        underline="hover"
      >
        &copy; www.chengjunjie.com
      </Typography>
    </Stack>
  );
}

export default Footer;
