import { List, Typography } from '@mui/material';
import { menuItems as originMenuItems } from 'config';
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export default function MenuList() {
  const location = useLocation();
  const menuItems = useMemo(() => {
    return originMenuItems.map((item) => {
      let isSelected = false;
      if (item.url === location.pathname) isSelected = true;
      return {
        ...item,
        isSelected
      };
    });
  }, [location.pathname]);

  const navItems = menuItems.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      case 'item':
        return <NavItem key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return <List sx={{ padding: '0 16px' }}>{navItems}</List>;
}
