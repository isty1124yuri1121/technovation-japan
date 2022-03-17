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
            "Favorites": farmer.Favorites,
            "Location": farmer.Location,
            "Username": farmer.Username,
            "Image": farmer.Image.uri,
          }
        }],
        function(err, records) {
          console.error(err);
        });
    },
    update: (state, content) => {
      const { username, farmer } = content.payload;
      for (var i =0; i < state.length; ++i) {
        if (state[i].Username == username) {
          state[i] = {
            ...state[i],
            ...farmer,
          }
          base('Table 1').update([
            {
              id: state[i].id,
              fields: {
                Name: state[i].Name,
                Favorites: state[i].Favorites,
                Location: state[i].Location,
                Username: state[i].Username,
                Image: state[i].Image.uri,
              }
            }
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
          });
        }
      }
    },
  },
});

export const { init, append, update } = farmerSlice.actions;

export default farmerSlice.reducer;
