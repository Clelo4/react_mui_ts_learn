import { Menu as MenuIcon } from '@mui/icons-material';
import { Avatar, Box, IconButton, SxProps } from '@mui/material';
import OpenAILogo from 'assets/images/OpenAILogo';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';

interface PropsType {
  sx?: SxProps;
  onClickMenu: () => void;
  fullScreenEnter: () => void;
  fullScreenExit: () => void;
  isFullScreen: boolean;
}

export default function Header(props: PropsType) {
  return (
    <Box
      component="div"
      sx={{
        ...(props.sx || {}),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <IconButton color="inherit" aria-label="open drawer" onClick={props.onClickMenu}>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Avatar sx={{ background: 'none', marginLeft: '5px' }}>
          <OpenAILogo sx={{ height: '32px', width: '32px' }}></OpenAILogo>
        </Avatar>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {props.isFullScreen ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.fullScreenExit}
          >
            <ZoomInMapIcon></ZoomInMapIcon>
          </IconButton>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.fullScreenEnter}
          >
            <ZoomOutMapIcon></ZoomOutMapIcon>
          </IconButton>
        )}
      </Box>
    </Box>
  );
}
