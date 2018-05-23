import { combineReducers } from 'redux';
import CommentsReducer from './Comments_reducer';

const rootReducer = combineReducers({
  lists: CommentsReducer
});

export default rootReducer;
