import { configureStore } from '@reduxjs/toolkit';
import { chatSliceReducer } from './chat/chatSlice';

export const store = configureStore({
  reducer: {
    chatSlice: chatSliceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch