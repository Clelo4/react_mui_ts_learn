import { useTheme } from '@mui/material/styles';

import type { ThemeType } from './index';

// Use throughout your app instead of plain `useTheme`
export const useAppTheme: () => ThemeType = useTheme
