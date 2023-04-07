import { Typography } from '@mui/material';
import { menuItems } from 'config';
import NavGroup from './NavGroup/index';

export default function MenuList() {
  const navItems = menuItems.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return <>{navItems}</>;
}
