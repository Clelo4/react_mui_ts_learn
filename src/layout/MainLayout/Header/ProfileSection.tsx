import {
  Avatar,
  Box,
  Chip,
  ClickAwayListener,
  Fade,
  List,
  ListItemButton,
  ListItemIcon,
  Paper,
  Popper,
  Transitions
} from '@mui/material';
import { useAppTheme } from 'themes/hooks';
import SettingsIcon from '@mui/icons-material/Settings';
import avatarImg from 'assets/images/1.jpg';
import { useRef, useState } from 'react';
import MainCard from 'components/cards/MainCard';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { ListItem, ListItemText, Typography, useMediaQuery } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout as APILogout } from 'utils/api';
import { useSnackbar } from 'notistack';
import { setAuth } from 'store/account';
import { AuthStateType } from 'interface/enum';
import { useNavigate } from 'react-router-dom';

export default function ProfileSection() {
  const { enqueueSnackbar } = useSnackbar();
  const dispath = useAppDispatch();
  const theme = useAppTheme();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const customization = useAppSelector((state) => state.customization);
  const nagivate = useNavigate();

  const logout = async () => {
    try {
      const { code, message } = await APILogout();
      if (code !== 0) throw new Error(message);
      dispath(setAuth(AuthStateType.INITIAL));
    } catch (error) {
      enqueueSnackbar(String(error) || '未知错误', { variant: 'error' });
    }
  };

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light
            }
          },
          '& .MuiChip-label': {
            lineHeight: 0
          }
        }}
        icon={
          <Avatar
            src={avatarImg}
            sx={{
              ...theme.typography.mediumAvatar,
              margin: '8px 0 8px 8px !important',
              cursor: 'pointer'
            }}
            aria-haspopup="true"
            color="inherit"
          />
        }
        label={<SettingsIcon sx={{ color: theme.palette.primary.main }} />}
        variant="outlined"
        aria-haspopup="true"
        color="primary"
        ref={anchorRef}
        onClick={() => {
          setOpen(true);
        }}
      />

      <Popper
        placement="bottom-end"
        anchorEl={anchorRef.current}
        open={open}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 14]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <ClickAwayListener
                onClickAway={() => {
                  setOpen(false);
                }}
              >
                <MainCard
                  sx={{
                    padding: '10px'
                  }}
                >
                  <List
                    component="nav"
                    sx={{
                      width: '100%',
                      maxWidth: 300,
                      minWidth: 250,
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: '10px',
                      [theme.breakpoints.down('md')]: {
                        minWidth: '100%'
                      },
                      '& .MuiListItemButton-root': {
                        mt: 0.5
                      }
                    }}
                  >
                    <ListItemButton
                      sx={{ borderRadius: `${customization.borderRadius}px` }}
                      onClick={() => {
                        nagivate('/account');
                      }}
                    >
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="body2">Account Settings</Typography>}
                      />
                    </ListItemButton>
                    <ListItemButton
                      sx={{ borderRadius: `${customization.borderRadius}px` }}
                      onClick={logout}
                    >
                      <ListItemIcon>
                        <LogoutIcon></LogoutIcon>
                      </ListItemIcon>
                      <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                    </ListItemButton>
                  </List>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}
