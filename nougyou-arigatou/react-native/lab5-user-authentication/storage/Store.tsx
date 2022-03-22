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
    {
      Name: 'Yuichiro',
      Favorites: 'Spinach, Nuts',
      Location: 'Nagano',
      Username: 'yusano',
      Image: Images.Farmer1
    },{
      Name: 'Yuki Sano',
      Favorites: 'Spinach, Nuts',
      Location: 'Niigata',
      Username: 'yukino',
      Image: Images.Farmer2
    },{
      Name: 'Hitomi',
      Favorites: 'Onions, Garlic',
      Location: 'Yamagata',
      Username: 'hitomi',
      Image: Images.Farmer3
    }
  ],
  comment: [{
      key: '001',
      Farmer: 'yusano',
      Content: 'Best fried spinach'
    },{
      key: '002',
      Farmer: 'hitomi',
      Content: 'Try the deep fried garlic'
    },{
      key: '003',
      Farmer: 'yukino',
      Content: 'Best farming jokes in town'
    },{
      key: '004',
      Farmer: 'yukino',
      Content: 'Her packaging is just so cute'
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
