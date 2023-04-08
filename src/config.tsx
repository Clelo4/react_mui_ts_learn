import type { CustomizationType } from 'interface/type';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import type { MenuItemType } from 'interface/type';
import OpenAILogo from 'assets/images/OpenAILogo';

export const defaultCustomization: CustomizationType = {
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 20,
  navType: 'light'
};

export const drawerWidth = 200;
export const AppBarHeight = 88;

export const menuItems: MenuItemType[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    url: '/dashboard',
    icon: DashboardRoundedIcon
  },
  {
    id: 'chatGPT',
    title: 'chatGPT',
    type: 'item',
    url: '/chatGPT',
    icon: OpenAILogo
  },
  {
    id: 'other',
    title: 'other',
    type: 'item',
    children: [
      {
        id: 'util-typography',
        title: 'Typography',
        type: 'item',
        url: '/utils/util-typography'
      },
      {
        id: 'util-color',
        title: 'Color',
        type: 'item',
        url: '/utils/util-color'
      },
      {
        id: 'util-shadow',
        title: 'Shadow',
        type: 'item',
        url: '/utils/util-shadow'
      },
      {
        id: 'icons',
        title: 'Icons',
        type: 'collapse',
        children: [
          {
            id: 'tabler-icons',
            title: 'Tabler Icons',
            type: 'item',
            url: '/icons/tabler-icons'
          },
          {
            id: 'material-icons',
            title: 'Material Icons',
            type: 'item',
            url: '/icons/material-icons'
          }
        ]
      }
    ]
  }
];
