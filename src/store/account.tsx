import { createSlice } from '@reduxjs/toolkit';

import { AuthStateType } from '../interface/enum';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    isAuth: AuthStateType.INITIAL
  },
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        isAuth: action.payload
      };
    }
  }
});

export const { setAuth } = accountSlice.actions;

export default accountSlice.reducer;
