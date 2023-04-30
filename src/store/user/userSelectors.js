import store from "../index";
import { setUser } from "./actions";

export const getUser = (state) => {
  if (!state.user.value) {
    const user = JSON.parse(localStorage.getItem("user-profile"));
    if (user) {
      store.dispatch(setUser(user));
    }
  }
  return state.user.value;
};
