import { List } from '@mui/material';
import NavItem from './NavItem';
import type { MenuItemType } from 'interface/type';

export default function NavGroup(props: { item: MenuItemType }) {
  const listItems = props.item.children?.map((menu) => {
    return <NavItem key={menu.id} item={menu} />;
  });
  return <List>{listItems}</List>;
}
