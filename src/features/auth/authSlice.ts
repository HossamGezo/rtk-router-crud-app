import {createSlice} from "@reduxjs/toolkit";

// *** InitialStateProps (Type)
type InitialStateProps = {
  isLoggedIn: boolean;
};

// *** Initial State Structure
const initialState: InitialStateProps = {
  isLoggedIn: false,
};

// *** Auth Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleLogin: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const toggleLogin = authSlice.actions.toggleLogin;
export default authSlice.reducer;
