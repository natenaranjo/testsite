import { combineReducers } from 'redux';
import wellReducer from './well/wellReducer';

const rootReducer = combineReducers({
  well: wellReducer,
})

export default rootReducer;