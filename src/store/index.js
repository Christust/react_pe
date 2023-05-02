import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";

const loadState = () => {
  try {
    const serializedData = localStorage.getItem("state");
    if (serializedData === null || serializedData === undefined) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    return undefined;
  }
};

let store = configureStore({ reducer: { user }, preloadedState: loadState() });

export default store;
