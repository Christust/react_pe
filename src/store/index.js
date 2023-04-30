import { combineReducers } from "@reduxjs/toolkit";
import userApp from "./user/reducers";
let store = combineReducers({ userApp });

export default store;
