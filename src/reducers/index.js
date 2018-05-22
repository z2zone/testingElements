import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  lists: (state = []) => state
});

export default rootReducer;
