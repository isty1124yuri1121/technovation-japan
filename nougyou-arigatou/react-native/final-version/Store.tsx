import { configureStore } from '@reduxjs/toolkit'

import base from './Datastore';
import Images from './assets/Images';
import commentReducer from './commentSlice';
import { init as commentInit } from './commentSlice';
import farmerReducer from './farmerSlice';
import { init as farmerInit } from './farmerSlice';

const preloadedState = {
  farmer: [],
  comment: []
};

const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    comment: commentReducer,
  },
  preloadedState
});

// Read the initial set of farmers from Airtable.
base('Table 1').select({}).eachPage(
  function page(records, fetchNextPage) {
    records.map(r => {
      return {
      Name: r.get('Name'),
      Image: {uri: r.get('Image')[0].url},
      Username: r.get('Username'),
      Location: r.get('Location'),
      Favorites: r.get('Favorites').split(',').map(f => f.trim()),
    };
    })
      .forEach(r => store.dispatch(farmerInit(r)));
    fetchNextPage();
  },
  function done(err) {
  });

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

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
