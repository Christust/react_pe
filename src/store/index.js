import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";
let store = configureStore({ reducer: { user } });

export default store;
