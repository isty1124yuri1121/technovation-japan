/**
 * This library sets up the React Redux data storage and reads data from
 * Airtable.
 */
import { configureStore } from '@reduxjs/toolkit'

import Images from '../assets/Images';
import commentReducer from './commentSlice';
import { init as commentInit } from './commentSlice';
import farmerReducer from './farmerSlice';
import { init as farmerInit } from './farmerSlice';

// Sharing data between screens:
//   React Redux requires initial data when starting.  What are good initial
//   values when the app is first turned on?
const preloadedState = {
  farmer: [
    // Sharing data between screens Exercise:
    //   We define just one sample farmer.  Can you add more?  You can use
    //   other images stored in /asssets/images.tsx.
    {
      Name: 'Yuki Sano',
      Favorites: 'Spinach, Nuts',
      Location: 'Niigata',
      Username: 'yukino',
      Image: Images.Farmer2
    }
  ],
  comment: [
    // Sharing data between screens Exercise:
    //   We define just two comments for only one farmer.  Can you add comments
    //   for the farmers you've added?
    {
      key: '003',
      Farmer: 'yukino',
      Content: 'Best farming jokes in town'
    },{
      key: '004',
      Farmer: 'yukino',
      Content: 'The packaging is just so cute'
    }
  ]
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

// Sharing data between screens:
//   We have to export both the store object and some other objects for React
//   Redux to work correctly.
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
