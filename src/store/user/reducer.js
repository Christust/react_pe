import { SET_USER } from "./actions";

const initialState = {
  user: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        user: action.user,
      });

    default:
      return state;
  }
};

return user;
