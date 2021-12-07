import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import type { Farmer } from './types';

const initialState: Array<Farmer> = [];

export const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {
    append: (state, farmer) => {
      state.push(farmer.payload);
    },
    update: (state, username, farmer) => {
      for (var i =0; i < state.length; ++i) {
        if (state[i].Username == username) {
          state[i] = {
            ...farmer,
            ...state[i],
          }
        }
      }
    },
  },
});

export const { append, update } = farmerSlice.actions;

export default farmerSlice.reducer;
