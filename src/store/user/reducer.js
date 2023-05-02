import { SET_USER, GET_USER } from "./actions";

const initialState = null;

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};

export default user;
