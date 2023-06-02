import { configureStore } from "@reduxjs/toolkit";
import tyendReducer from './db/tyendSlice';

export default configureStore({
  reducer: {
    tyendValues:  tyendReducer,
  },
});