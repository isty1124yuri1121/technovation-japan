/**
 * This library sets up the React Redux data storage and reads data from
 * Airtable.
 */
import { configureStore } from '@reduxjs/toolkit'

import Images from '../assets/Images';
import base from './Datastore';
import commentReducer from './commentSlice';
import { init as commentInit } from './commentSlice';
import farmerReducer from './farmerSlice';
import { init as farmerInit } from './farmerSlice';

// Sharing data between screens:
//   React Redux requires initial data when starting.  What are good initial
//   values when the app is first turned on?
const preloadedState = {
  farmer: [],
  comment: []
};

// Sharing data between screens:
//   React Redux lets us share many types of data across screens.  These are
//   called reduces.  
const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    comment: commentReducer,
  },
  preloadedState
});

//   We want to store Farmer profile data and user comments in Airtable.  When
//   the app first turns on, we want to read all that data and share it with
//   all the screens.
//   How do we read from Airtable and how do we share it with our React Redux
//   state?

// Using Cloud Data Exercise:
//   Read data about each farmer and store it in the React Redux farmer state.
//   
//   You can use sample code from Airtable's API page.
base('Table 1').select({}).eachPage(
  function page(records, fetchNextPage) {
    console.log(records);
    fetchNextPage();
  },
  function done(err) {
});

// Using Cloud Data exercise:
//   Read data about each comment and store it in the React Redux comment state.
base('Comments').select({}).eachPage(
  function page(records, fetchNextPage) {
    console.log(records);
    fetchNextPage();
  },
  function done(err) {
  });

// Sharing data between screens:
//   We have to export both the store object and some other objects for React
//   Redux to work correctly.
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
