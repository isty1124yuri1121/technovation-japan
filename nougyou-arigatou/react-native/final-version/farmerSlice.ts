import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import base from './Datastore';
import type { Farmer } from './types';

const initialState: Array<Farmer> = [];

export const farmerSlice = createSlice({
  name: 'farmer',
  initialState,
  reducers: {
    init: (state, farmer) => {
      state.push(farmer.payload);
    },
    append: (state, content) => {
      const farmer = content.payload;
      state.push(farmer);
      base('Table 1').create([
        {
          "fields": {
            "Name": farmer.Name,
            "Favorites": farmer.Favorites.join(','),
            "Location": farmer.Location,
            "Username": farmer.Username,
            "Image": [
              {
                "url": farmer.Image
              }
            ]
          }
        }],
        function(err, records) {
        });
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

export const { init, append, update } = farmerSlice.actions;

export default farmerSlice.reducer;
