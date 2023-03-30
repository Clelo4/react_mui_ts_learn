import { configureStore } from '@reduxjs/toolkit';

import customizationReducer from './customizationSlice';

const store = configureStore({
  reducer: {
    customization: customizationReducer
  }
});

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispathType = typeof store.dispatch;

export default store;
