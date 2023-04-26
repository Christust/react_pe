import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
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
    getUser: (state) => {
      // if (!state.value) {
      //   const user = JSON.parse(localStorage.getItem("user-profile"));
      //   if (user) {
      //     userSlice.caseReducers.setUser(state, { payload: user });
      //   }
      // }
      console.log(state);
      console.log(state.value);
      return state.value;
    },
  },
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
