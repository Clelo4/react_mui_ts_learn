import { Menu as MenuIcon } from '@mui/icons-material';
import { Avatar, Box, IconButton, SxProps } from '@mui/material';
import OpenAILogo from 'assets/images/OpenAILogo';

export default function Header(props: { sx?: SxProps; onClickMenu: () => void }) {
  return (
    <Box
      component="div"
      sx={{
        ...(props.sx || {}),
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ marginLeft: '20px' }}
        onClick={props.onClickMenu}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <Avatar sx={{ background: 'none', marginLeft: '5px' }}>
        <OpenAILogo sx={{ height: '32px', width: '32px' }}></OpenAILogo>
      </Avatar>
    </Box>
  );
}
