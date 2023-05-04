import { SET_LOADER_COUNT } from "./actions";

const initialState = { count: 0 };

const loader = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER_COUNT:
      console.log(action.count);
      console.log(state.count);
      const newCount = state.count + action.count;
      console.log(newCount >= 0);
      if (newCount >= 0) {
        return Object.assign({}, state, action.count);
      }
      return state;
    default:
      return state;
  }
};

export default loader;
