import { reducer as toastrReducer } from 'react-redux-toastr';

import { combineReducers } from 'redux';

import addTool from './addTool';
import tool from './tool';

export default combineReducers({
  toastr: toastrReducer,
  tool,
  addTool,
});
