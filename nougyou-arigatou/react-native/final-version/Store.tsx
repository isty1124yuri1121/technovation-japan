import { configureStore } from '@reduxjs/toolkit'

import commentReducer from './commentSlice';
import farmerReducer from './farmerSlice';

const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    comment: commentReducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
