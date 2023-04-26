import { setUser } from "./userSlice";
import store from "../index";
const state = store.getState();

export const getUser = () => {
  console.log("init");
  console.log(!state.user.value);
  if (!state.user.value) {
    const user = JSON.parse(localStorage.getItem("user-profile"));
    console.log(user);
    if (user) {
      console.log("user");
      console.log(user);
      store.dispatch(setUser(user));
    }
  }
  console.log("end");
  console.log(state);
  return state.user.value;
};
