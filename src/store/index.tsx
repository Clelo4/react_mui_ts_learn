import { createStore } from 'redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import config from '../config';

interface CounterState {
  isOpen: any[],
  defaultId: string,
  fontFamily: typeof config.fontFamily,
  borderRadius: typeof config.borderRadius,
  opened: boolean,
}

const initialState: CounterState = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
}

import reducer from './reducer';

export const store = createStore(reducer);