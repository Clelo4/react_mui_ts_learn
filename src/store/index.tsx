import { configureStore } from '@reduxjs/toolkit';

import customizationReducer from './customizationSlice';
import accountReducer from './account';
import sidebarReducer from './sidebar';

const store = configureStore({
  reducer: {
    customization: customizationReducer,
    account: accountReducer,
    sidebar: sidebarReducer,
  }
});

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispathType = typeof store.dispatch;

export default store;
