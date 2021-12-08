import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import type { Comment } from './types';


const initialState: Array<Comment> = [];

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    init: (state, comment) => {
      state.push(comment.payload);
    },
    append: (state, comment) => {
      state.push(comment.payload);
    },
  },
});

export const { init, append } = commentSlice.actions;

export default commentSlice.reducer;
