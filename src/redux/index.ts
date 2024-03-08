import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import app from './app/slice';
import list from './list/slice';
// import details from './details/slice';

const reducer = combineReducers({
  app,
  list,
  // details
});

const store = configureStore({
  reducer,
});

export default store;
