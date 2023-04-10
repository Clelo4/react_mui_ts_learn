import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: true
  },
  reducers: {
    revertSidebarStatus: (state) => {
      return {
        isOpen: !state.isOpen
      };
    }
  }
});

export const { revertSidebarStatus } = sidebarSlice.actions;

export default sidebarSlice.reducer;
