import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import type { Comment } from './types';


const initialState: Array<Comment> = [];

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    append: (state, comment) => {
      state.push(comment.payload);
    },
  },
});

export const { append } = commentSlice.actions;

export default commentSlice.reducer;
