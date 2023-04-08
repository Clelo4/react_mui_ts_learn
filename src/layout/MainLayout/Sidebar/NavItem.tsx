import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

interface PropsType {
  item: MenuItemType;
}

function NavItem({ item }: PropsType) {
  const theme = useAppTheme();
  // const dispatch = useAppDispatch();
  const customization = useAppSelector((state) => state.customization);
  // const matchesSM = useMediaQuery(theme.breakpoints.down('lg'));

  const Icon = item.icon ?? FiberManualRecordIcon;

  // let listItemProps = {
  //     component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />)
  // };
  // if (item?.external) {
  //     listItemProps = { component: 'a', href: item.url, target: itemTarget };
  // }

  // const itemHandler = (id) => {
  //     dispatch({ type: MENU_OPEN, id });
  //     if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  // };

  // active menu item on page load
  // useEffect(() => {
  //     const currentIndex = document.location.pathname
  //         .toString()
  //         .split('/')
  //         .findIndex((id) => id === item.id);
  //     if (currentIndex > -1) {
  //         dispatch({ type: MENU_OPEN, id: item.id });
  //     }
  //     // eslint-disable-next-line
  // }, []);

  return (
    <ListItem>
      <ListItemButton
        disabled={item.disabled}
        sx={{
          borderRadius: `${customization.borderRadius}px`,
          mb: 0.5,
          alignItems: 'flex-start'
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
    </ListItem>
  );
}

export default NavItem;
