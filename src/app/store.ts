// - - - - - - - - - - Libraries
import {configureStore} from "@reduxjs/toolkit";

// - - - - - - - - - - Reducers
import posts from "../features/posts/postSlice";
import auth from "../features/auth/auth";

// - - - - - - - - - - Store
const store = configureStore({
  reducer: {
    posts,
    auth,
  },
});

// *** Store Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
