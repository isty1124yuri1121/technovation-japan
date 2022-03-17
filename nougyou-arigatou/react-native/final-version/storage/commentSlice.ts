import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import base from './Datastore';
import type { Comment } from '../types';


const initialState: Array<Comment> = [];

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    init: (state, comment) => {
      state.push(comment.payload);
    },
    append: (state, content) => {
      const comment = content.payload;
      state.push(comment);
      base('Comments').create([
        {
          "fields": {
            "Farmer": comment.Username,
            "Comment": comment.Content,
            "uuid": comment.key
          }
        }],
        function(err, records) {
        });
    },
  },
});

export const { init, append } = commentSlice.actions;

export default commentSlice.reducer;
