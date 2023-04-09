import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import { useAppTheme } from 'themes/hooks';

interface PropsType {
  setDrawerOpen: () => void;
}

export default function Header(props: PropsType) {
  const theme = useAppTheme();

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={props.setDrawerOpen}
        edge="start"
      >
        <MenuIcon sx={{ fontSize: '32px', color: theme.palette.primary.main }} />
      </IconButton>
      <Typography variant="h4" noWrap component="div" sx={{ marginLeft: '12px' }}>
        Persistent drawer
      </Typography>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <NotificationSection />
      <ProfileSection />
    </>
  );
}
