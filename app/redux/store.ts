import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./teamSlice";
import teamsSlice from "./teamsSlice";
import themeSlice from "./themeSlice";

export const store = configureStore({
  reducer: { teamSlice, teamsSlice, themeSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
