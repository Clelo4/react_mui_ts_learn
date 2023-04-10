import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import SvgI from '@mui/material/Icon';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Avatar,
  Chip,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery
} from '@mui/material';

// assets
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useAppTheme } from 'themes/hooks';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import type { MenuItemType } from 'interface/type';
import { revertSidebarStatus } from 'store/sidebar';

interface PropsType {
  item: MenuItemType;
}

function NavItem({ item }: PropsType) {
  const theme = useAppTheme();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const customization = useAppSelector((state) => state.customization);
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const Icon = item.icon ?? FiberManualRecordIcon;

  return (
    <ListItemButton
      selected={item.isSelected}
      disabled={item.disabled}
      sx={{
        borderRadius: `${customization.borderRadius}px`,
        mb: 0.5
      }}
      onClick={() => {
        if (item.url) {
          navigate(item.url);
          if (!matchUpMd) dispatch(revertSidebarStatus());
        }
      }}
    >
      <ListItemIcon sx={{ my: 'auto' }}>
        <Icon sx={{ width: 22, height: 22 }} />
      </ListItemIcon>
      <ListItemText
        primary={<Typography color="inherit">{item.title}</Typography>}
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
}

export default NavItem;
