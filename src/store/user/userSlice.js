import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setUser: (state, action = null) => {
      state.value = action.payload;
      if (action.payload) {
        localStorage.setItem("user-profile", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user-profile");
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
