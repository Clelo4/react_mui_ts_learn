import { Box, Typography, SxProps } from '@mui/material';

export default function TopBar(props: { sx?: SxProps }) {
  return (
    <Box
      component="div"
      sx={{
        ...(props.sx || {})
      }}
    >
      <Typography sx={{ lineHeight: '36px', fontWeight: 500, fontSize: '16px' }}>Chat</Typography>
    </Box>
  );
}
