import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

import type { Comment } from './types';

interface CommentState {
  comments: Array<Comment>
}

const initialState: CommentState = {
  comments: [
  {Username: 'yusano', Content: 'Best potatoes Ever', key: '001'},
  {Username: 'yuichinabe', Content: 'Let me pick berries', key: '002'},
  {Username: 'yuichinabe', Content: 'Tells great jokes', key: '003'},
]};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    append: (state, comment) => {
      console.log(comment.payload);
      state.comments.push(comment.payload);
      console.log(state.comments);
    },
  },
});

export const { append } = commentSlice.actions;

export default commentSlice.reducer;
