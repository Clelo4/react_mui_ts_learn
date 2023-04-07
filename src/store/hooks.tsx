import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppStateType, AppDispathType } from './index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispathType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
