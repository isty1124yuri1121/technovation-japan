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

// Using Cloud Data exercise:
//   Read data about each farmer and store it in the React Redux farmer state.
base('Table 1').select({}).eachPage(
  function page(records, fetchNextPage) {
    records.map(r => {
      return {
        id: r.id,
        Name: r.get('Name'),
        Image: {uri: r.get('Image')},
        Username: r.get('Username'),
        Location: r.get('Location'),
        Favorites: r.get('Favorites'),
      };
    })
      .forEach(r => store.dispatch(farmerInit(r)));
    fetchNextPage();
  },
  function done(err) {
});

// Using Cloud Data exercise:
//   Read data about each comment and store it in the React Redux comment state.
base('Comments').select({}).eachPage(
  function page(records, fetchNextPage) {
    records.map(r => {
      return {
        Username: r.get('Farmer'),
        Content: r.get('Comment'),
        Key: r.get('uuid'),
      };
    })
      .forEach(r => store.dispatch(commentInit(r)));
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
