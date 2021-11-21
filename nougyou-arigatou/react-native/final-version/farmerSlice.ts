import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import type { Farmer } from './types';
import Images from './assets/Images';

const initialState: Array<Farmer> = [
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
];

export const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {
    append: (state, farmer) => {
      state.append(farmer);
    },
  },
});

export const { append } = farmerSlice.actions;

export default farmerSlice.reducer;
