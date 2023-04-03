import { configureStore } from '@reduxjs/toolkit';

import customizationReducer from './customizationSlice';
import accountReducer from './account';

const store = configureStore({
  reducer: {
    customization: customizationReducer,
    account: accountReducer,
  }
});

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispathType = typeof store.dispatch;

export default store;
