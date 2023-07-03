import { combineReducers } from 'redux';
import wellReducer from './well/wellReducer';
import tyendReducer from './tyend/tyendReducer';
// import surveyReducer from './survey/surveyReducer';
// import slideReducer from './slide/slideReducer';


const rootReducer = combineReducers({
  well: wellReducer,
  tyend: tyendReducer,
  // survey: surveyReducer,
  // slide: slideReducer,
})

export default rootReducer;