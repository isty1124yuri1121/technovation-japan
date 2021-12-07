import { configureStore } from '@reduxjs/toolkit'

import Images from './assets/Images';
import commentReducer from './commentSlice';
import farmerReducer from './farmerSlice';

const preloadedState = {
  farmer: [
    {
      Name: 'Yuki Sano',
      Image: Images.Farmer1,
      Username: 'yusano',
      Location: 'Nagano', 
      Favorites: [ 'cabbage', 'spinach']
    },
    {
      Name: 'Yuichiro Watanabe',
      Image: Images.Farmer2,
      Username: 'yuichinabe',
      Location: 'Niigata',
      Favorites: [ 'rice', 'pumpkin']
    },
    {
      Name: 'Megumi Yamada',
      Image: Images.Farmer3,
      Username: 'watermelon',
      Location: 'Yamagata',
      Favorites: [ 'garlic', 'onion']
    },
  ],
  comment: [
    {Username: 'yusano', Content: 'Best potatoes Ever', key: '001'},
    {Username: 'yuichinabe', Content: 'Let me pick berries', key: '002'},
    {Username: 'yuichinabe', Content: 'Tells great jokes', key: '003'},
  ]
};

const store = configureStore({
  reducer: {
    farmer: farmerReducer,
    comment: commentReducer,
  },
  preloadedState
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
