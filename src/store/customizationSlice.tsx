import { createSlice } from '@reduxjs/toolkit'

import { defaultCustomization } from '../config';

export const customizationSlice = createSlice({
    name: 'customization',
    initialState: {
        isOpen: [] as number[],
        defaultId: 'default',
        opened: true,
        ...defaultCustomization
    },
    reducers: {
        setLeftDrawerOpened: (state, action) => {
            return {
                ...state,
                opened: action.payload,
            }
        },
        setFontFamilyAction: (state, action) => {
            return {
                ...state,
                fontFamily: action.payload
            }
        },
        setOrderRadiusAction: (state, action) => {
            return {
                ...state,
                borderRadius: action.payload
            }
        },
        addBorderRadiusAction: (state) => {
            return {
                ...state,
                borderRadius: state.borderRadius + 1,
            }
        },
    },
});

export const {
    setLeftDrawerOpened, setFontFamilyAction,
    setOrderRadiusAction, addBorderRadiusAction,
} = customizationSlice.actions;

export default customizationSlice.reducer;
