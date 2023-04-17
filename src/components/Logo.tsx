/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

import { Box, SxProps, Typography } from "@mui/material";

// ==============================|| LOGO SVG ||============================== //

interface PropsType {
  sx?: SxProps
}

export default function Logo(props: PropsType) {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <>
      <Typography sx={{ fontSize: '24px', fontWeight: 500, fontStyle: 'italic', ...(props.sx ?? {}) }}>CHENGJUNJIE</Typography>
    </>
  );
}
