import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.profile = action.payload;
    },
    setToken: (state, action = null) => {
      if (action) state.token = action.payload;
      else state.token = action;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
