import { combineReducers } from 'redux';

import customizationReducer from './customizationSlice';

const reducer = combineReducers({
  customization: customizationReducer
});

export default reducer;
