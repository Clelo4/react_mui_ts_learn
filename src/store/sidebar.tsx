import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: true,
  },
  reducers: {
    setOpen: (state, action) => {
      return {
        ...state,
        isOpen: action.payload
      }
    }
  },
});

export const {
  setOpen
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
