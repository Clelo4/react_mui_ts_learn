import type { PaletteOptions } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';

type NavType = NonNullable<PaletteOptions['mode']>;

export interface CustomizationType {
  borderRadius: number;
  fontFamily: string;
  navType: NavType;
}

interface MenuItemTyp {}

export interface MenuItemType {
  id: string;
  title: string;
  caption?: string;
  icon?: typeof SvgIcon | React.FC;
  disabled?: boolean;
  type: 'group' | 'item' | 'collapse';
  url?: string;
  children?: MenuItemType[];
}
