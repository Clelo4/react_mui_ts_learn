import type { PaletteOptions } from '@mui/material/styles';

type NavType = NonNullable<PaletteOptions['mode']>

export interface CustomizationType {
  borderRadius: number,
  fontFamily: string,
  navType: NavType,
}
