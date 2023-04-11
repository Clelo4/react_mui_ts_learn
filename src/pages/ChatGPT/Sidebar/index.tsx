import { Box, SxProps } from '@mui/material';

export default function Sidebar(props: { sx?: SxProps }) {
  return (
    <Box
      component="div"
      sx={{
        ...(props.sx || {})
      }}
    ></Box>
  );
}
